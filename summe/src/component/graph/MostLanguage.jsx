import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useRef } from "react";

export default function MostLanguage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const pieData = null;
  let RealData = { language: [], percentage: [] };

  const handleClick = async () => {
    setLoading(true);
    let data = ["https://github.com/raipen"];
    let response = await axios.post("/api/v1/search/get_github_repos", data);
    console.log(response.data);
    setResult(response.data);
    setLoading(false);

    response.forEach((e) => {
      RealData.language.push(e.language);
      RealData.percentage.push(e.percentage);
    });

    pieData = {
      series: RealData.percentage,
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: RealData.language,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  };

  return (
    <div id="chart">
      {pieData != null ? (
        <ReactApexChart
          options={pieData.options}
          series={pieData.series}
          type="pie"
          width="500"
        />
      ) : (
        <button
          style={{ background: "skyblue", cursor: "pointer", width: 200 }}
          onClick={handleClick}
        >
          Most Language Graph
        </button>
      )}
      <div style={{ display: "inline", margin: 10 }}>
        {loading ? "로딩중..." : "버튼을 눌러주세요"}
      </div>
    </div>
  );
}
