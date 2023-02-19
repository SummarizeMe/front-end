import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useRef } from "react";

<<<<<<< Updated upstream
export default function Time({}) {
  const [result, setResult] = useState(null);
=======
export default function Time({ state }) {
>>>>>>> Stashed changes
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const startMonth = useRef(null);
  const endMonth = useRef(null);

  // 가짜 데이터
  const exampleData = [
    {
      date: "2022-02-12",
      works: [
        { repo: "raipen/escape_room", commit: "5 commits", type: "github" },
      ],
    },
    {
      date: "2022-01-11",
      works: [{ repo: "raipen/ex", commit: "5 commits", type: "github" }],
    },
    {
      date: "2022-12-22",
      works: [{ repo: "raipen/sfs", commit: "5 commits", type: "github" }],
    },
    {
      date: "2022-07-22",
      works: [{ repo: "raipen/dfsf", commit: "5 commits", type: "github" }],
    },
  ];

  const handleClick = async () => {
    setLoading(true);
    let data = state.filter((e) => e.type == "github").map((e) => e.link);
    let response = await axios.post("/api/v1/github/get_calender", data);
    console.log(response.data);
    setLoading(false);
    const realData = response.data.flatMap((entry) => {
      const date = new Date(entry.date);
      return entry.works.map((work) => {
        return {
          name: work.repo,
          data: [
            {
              x: "commit",
              y: [
                date.getTime(),
                new Date(
                  date.getFullYear(),
                  date.getMonth() + 1,
                  date.getDate()
                ).getTime(),
              ],
            },
          ],
        };
      });
    });

<<<<<<< Updated upstream
  const handleClick = async () => {
    setLoading(true);
    let data = {
      github: ["https://github.com/raipen"],
      start: {
        year: 2022,
        month: Number(startMonth.current.value.split("-")[1]),
      },
      end: { year: 2022, month: Number(endMonth.current.value.split("-")[1]) },
    };
    let response = await axios.post("/api/v1/search/get_calender", data);
    console.log(response.data);
    setLoading(false);
  };

  return (
    <div id="chart">
      <button
        style={{ background: "skyblue", cursor: "pointer", width: 200 }}
        onClick={handleClick}
      >
        Time Graph
      </button>
      <div style={{ display: "inline", margin: 10 }}>
        {loading ? "로딩중..." : "버튼을 눌러주세요"}
      </div>
      <br />
      <input type="month" ref={startMonth} />
      <input type="month" ref={endMonth} />
=======
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
>>>>>>> Stashed changes
    </div>
  );
}
