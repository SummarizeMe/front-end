import ApexCharts from "react-apexcharts";
import React, { useState } from "react";
import axios from "axios";

export default function Blog({ state }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    let data = state.filter((e) => e.type === "tistory").map((e) => e.link);

    try {
      const response = await axios.post("/api/v1/blog/tistory", data);
      console.log(response.data);

      const realData = response.data.reduce((result, item) => {
        item.keyword.forEach((keyword) => {
          const existingItem = result.find((r) => r.key === keyword);
          if (existingItem) {
            existingItem.count++;
          } else {
            result.push({ key: keyword, count: 1 });
          }
        });
        return result;
      }, []);
      console.log("realData = ", realData);

      setData({
        series: [
          {
            data: realData,
          },
        ],
        options: {
          legend: {
            show: false,
          },
          chart: {
            height: 350,
            type: "treemap",
          },
          title: {
            text: "Basic Treemap",
          },
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {data != null ? (
        <ApexCharts
          options={data.options}
          series={data.series}
          type="treemap"
          height={350}
        />
      ) : (
        <button
          style={{ background: "skyblue", cursor: "pointer", width: 200 }}
          onClick={handleClick}
        >
          Most used keyword
        </button>
      )}
      <div style={{ display: "inline", margin: 10 }}>
        {loading ? "로딩중..." : "버튼을 눌러주세요"}
      </div>
    </div>
  );
}
