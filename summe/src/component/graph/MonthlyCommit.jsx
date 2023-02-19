import ApexCharts from "react-apexcharts";
import React, { useState } from "react";
import axios from "axios";

export default function MonthlyCommit() {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);

  const realData = { commits: [], categories: [] };
  let response = "";

  const handleClick = async () => {
    setLoading(true);
    let data = ["https://github.com/raipen"];
    response = await axios.post("/api/v1/search/get_monthly_commits", data);
    console.log(response.data);
    setLoading(false);

    response.data.forEach((e) => {
      realData.commits = realData.commits.concat(e.commit);
      realData.categories = realData.categories.concat(
        new Array(12).fill(0).map((_, i) => e.year + "-" + (i + 1))
      );
    });
    console.log(realData);

    setData({
      series: [
        {
          name: "commit",
          data: realData.commits,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
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
            format: "MM/yy",
          },
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
          type="bar"
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
