import ApexCharts from "react-apexcharts";
import React, { useState } from "react";
import axios from "axios";

export default function MonthlyCommit() {
  const [loading, setLoading] = useState(false);

  const realData = { commits: [], lines: [], categories: [] };
  const response = "";
  const Data = null;

  const handleClick = async () => {
    setLoading(true);
    let data = ["https://github.com/raipen"];
    response = await axios.post("/api/v1/search/get_monthly_commits", data);
    console.log(response.data);
    setLoading(false);

    response.forEach((e) => {
      realData.commits.push(e.commitCnt);
      realData.lines.push(e.lineCnt);
      realData.categories.push(e.date);
    });

    Data = {
      series: [
        {
          name: "commit",
          data: realData.commits,
        },
        {
          name: "line",
          data: realData.lines,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: realData.categories,
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
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
          type="area"
          width="500"
        />
      ) : (
        <button
          style={{ background: "skyblue", cursor: "pointer", width: 200 }}
          onClick={handleClick}
        >
          Monthly Commit Graph
        </button>
      )}
      <div style={{ display: "inline", margin: 10 }}>
        {loading ? "로딩중..." : "버튼을 눌러주세요"}
      </div>
    </div>
  );
}
