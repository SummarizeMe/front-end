import ApexCharts from "react-apexcharts";
import React, { useState } from "react";
import axios from "axios";

export default function TeamContribute({ state }) {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);

  const realData = { repo: [], percent: [] };
  let response = "";

  const handleClick = async () => {
    setLoading(true);
    let data = state.filter((e) => e.type == "github").map((e) => e.link);
    console.log(data);

    response = await axios.post("/api/v1/github/get_repos", data);
    console.log(response.data);
    setLoading(false);

    response.data.forEach((e) => {
      realData.repo.push(e.url);
      realData.percent.push(e.contribution);
    });
    console.log(realData);

    setData({
      series: [
        {
          name: "percent",
          data: realData.percent,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "radar",
        },
        title: {
          text: "Basic Radar Chart",
        },
        xaxis: {
          categories: realData.repo,
        },
      },
    });
  };

  return (
    <div>
      {Data != null ? (
        <ApexCharts
          options={Data.options}
          series={Data.series}
          type="radar"
          width="600"
        />
      ) : (
        <button
          style={{ background: "skyblue", cursor: "pointer", width: 200 }}
          onClick={handleClick}
        >
          View Team Contribute Graph
        </button>
      )}
      <div style={{ display: "inline", margin: 10 }}>
        {loading ? "로딩중..." : "버튼을 눌러주세요"}
      </div>
    </div>
  );
}
