import { useState, useEffect } from "react";
import axios from "axios";
import GraphWrapper from "./GraphWrapper";

// 문자열을 파싱하는 함수
function getLastStringFromGithubUrl(url) {
  const splitUrl = url.split("/");
  return splitUrl[splitUrl.length - 1];
}

export default function TeamContribute({ state }) {
  const [data, setData] = useState(null);

  const asyncWrapper = async () => {
    const response = await axios.post("/api/v1/github/get_repos", state);
    const realData = { repo: [], percent: [] };
    response.data.forEach((e) => {
      realData.repo.push(getLastStringFromGithubUrl(e.url)); //url을 파싱하여 넣기
      realData.percent.push(e.contribution);
    });

    //readlData.repo = https://github.com/bokoo14/SwiftUI_Study

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
    <GraphWrapper data={data} type="radar"  height="350px" width="50%"/>
  );
}
