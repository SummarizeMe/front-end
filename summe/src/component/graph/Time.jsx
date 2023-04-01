import axios from "axios";
import { useState, useEffect } from "react";
import GraphWrapper from "./GraphWrapper";

export default function Time({ state }) {
  const [data, setData] = useState(null);

  const asyncWrapper = async () => {
    let response = await axios.post("/api/v1/github/get_calender", state);

    let realData = [];
    response.data.forEach((commitDate) => {
      let today = new Date(commitDate.date);
      let nextDay = new Date(commitDate.date);
      nextDay.setDate(today.getDate() + 1);
      commitDate.works
        .map((e) => e.repo)
        .forEach((repo) => {
          if (realData.find((e) => e.name === repo)) {
            realData
              .find((e) => e.name === repo)
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

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <GraphWrapper data={data} type="rangeBar" height={450} width={600} />
  );
}

