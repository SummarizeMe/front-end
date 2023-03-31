import { useState, useEffect } from "react";
import axios from "axios";
import GraphWrapper from "./GraphWrapper";

export default function TeamContribute({ state }) {
  const [data, setData] = useState(null);

  const asyncWrapper = async () => {
    let data = state.filter((e) => e.type == "github").map((e) => e.link);

    const response = await axios.post("/api/v1/github/get_repos", data);
    const realData = { repo: [], percent: [] };
    response.data.forEach((e) => {
      realData.repo.push(e.url);
      realData.percent.push(e.contribution);
    });

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

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <GraphWrapper data={data} type="radar" height={350} width={600} />
  );
}
