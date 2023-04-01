import { useState,useEffect } from "react";
import axios from "axios";
import GraphWrapper from "./GraphWrapper";

export default function MonthlyCommit({ state }) {
  const [Data, setData] = useState(null);

  const asyncWrapper = async () => {
    let data = state.filter((e) => e.type === "github").map((e) => e.link);

    const response = await axios.post("/api/v1/github/get_monthly_commits", data);

    const realData = { commits: [], categories: [] };
    response.data.forEach((e) => {
      realData.commits = realData.commits.concat(e.count);
      realData.categories = realData.categories.concat(e.year + "-" + e.month);
    });

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

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <GraphWrapper data={Data} type="bar" height={350} width={600} />
  );
}
