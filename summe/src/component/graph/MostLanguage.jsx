import axios from "axios";
import { useEffect, useState } from "react";
import GraphWrapper from "./GraphWrapper";

export default function MostLanguage({ state }) {
  const [pieData, setpieData] = useState(null);

  const asyncWrapper = async () => {
    let data = state.filter((e) => e.type === "github").map((e) => e.link);

    let response = await axios.post("/api/v1/github/get_repos", data);
    let repos = {};
    response.data.forEach((e) => {
      e.used_lang.forEach(
        (j) => (repos[j.lang] = new Array(response.data.length).fill(0))
      );
    });

    response.data.forEach((e, i) => {
      e.used_lang.forEach((d) => {
        repos[d.lang][i] = d.percent;
      });
    });

    let project_name = [];
    response.data.forEach((e) =>
      project_name.push(e.url.split("/").splice(3, 2).join("/"))
    );

    let seriesData = [];

    Object.keys(repos).forEach((key, index) => {
      seriesData.push({
        name: key,
        data: repos[key],
        fillColor: `#${((index + 1) * 1000000 + 0x1000000)
          .toString(16)
          .substring(1)}`, // 여기서 각 시리즈의 색상을 지정
      });
    });

    setpieData({
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      series: seriesData,
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        xaxis: {
          categories: project_name,
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "right",
          offsetX: 0,
          offsetY: 50,
        },
        colors: [
          "#FFB64D",
          "#FF4D4D",
          "#6F7CFF",
          "#D3D3D3",
          "#C54DFF",
          "#fff000",
          "#0000FF",
          "#00FF00",
          "#369F36",
          "#FF8CFF",
          "#8B4F1D",
          "#CD4646",
        ], // 기본 색상 팔레트 대신 사용할 색상을 배열로 지정
      },
    });
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <GraphWrapper data={pieData} type="bar" height={350} width={600} />
  );
}