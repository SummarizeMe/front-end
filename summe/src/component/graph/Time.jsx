import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useRef } from "react";

export default function Time({ state }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const startMonth = useRef(null);
  const endMonth = useRef(null);

  const handleClick = async () => {
    setLoading(true);
    let data = state.filter((e) => e.type == "github").map((e) => e.link);
    let response = await axios.post("/api/v1/github/get_calender", data);
    console.log(response.data);
    setLoading(false);

    let realData = [];
    response.data.forEach((commitDate) => {
      let today = new Date(commitDate.date);
      let nextDay = new Date(commitDate.date);
      nextDay.setDate(today.getDate() + 1);
      commitDate.works
        .map((e) => e.repo)
        .forEach((repo) => {
          if (realData.find((e) => e.name == repo)) {
            realData
              .find((e) => e.name == repo)
              .data.push({
                x: "commit",
                y: [today.getTime(), nextDay.getTime()],
              });
          } else {
            realData.push({
              name: repo,
              data: [
                {
                  x: "commit",
                  y: [today.getTime(), nextDay.getTime()],
                },
              ],
            });
          }
        });
    });

    setData({
      series: realData,
      options: {
        chart: {
          height: 450,
          type: "rangeBar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%",
          },
        },
        xaxis: {
          type: "datetime",
        },
        stroke: {
          width: 1,
        },
        fill: {
          type: "solid",
          opacity: 0.6,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
      },
    });
  };
  return (
    <div>
      {data != null ? (
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="rangeBar"
          height={450}
        />
      ) : (
        <button
          style={{ background: "skyblue", cursor: "pointer", width: 200 }}
          onClick={handleClick}
        >
          View Timeline
        </button>
      )}
      <div style={{ display: "inline", margin: 10 }}>
        {loading ? "로딩중…" : "버튼을 눌러주세요"}
      </div>
    </div>
  );
}

