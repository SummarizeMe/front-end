import { useState,useEffect } from "react";
import axios from "axios";
import GraphWrapper from "./GraphWrapper";

export default function MonthlyCommit({ state }) {
  const [data, setData] = useState(null);

  const asyncWrapper = async () => {

    const response = await axios.post("/api/v1/github/get_monthly_commits", state);

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
    <GraphWrapper data={data} type="bar"  height="350px" width="50%"/>
  );
}
