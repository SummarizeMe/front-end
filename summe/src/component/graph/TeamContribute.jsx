import ApexCharts from "react-apexcharts";
import React, { useState } from "react";
import axios from "axios";

export default function TeamContribute() {
  const [loading, setLoading] = useState(false);

  const realData = { repo: [], percent: [] };
  const Data = null;
  let response = "";

  const handleClick = async () => {
    setLoading(true);
    let data = ["https://github.com/raipen"];
    response = await axios.post("/api/v1/search/get_github_repos", data);
    console.log(response.data);
    setLoading(false);

    response.forEach((e) => {
      realData.repo.push(e.repo);
      realData.percent.push(e.percent);
    });
    Data = {
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
    };
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
