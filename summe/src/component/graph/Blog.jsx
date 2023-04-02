import { useState,useEffect} from "react";
import axios from "axios";
import GraphWrapper from "./GraphWrapper";

export default function Blog({ state }) {
  const [data, setData] = useState(null);

  const asyncWrapper = async () => {
    let tistoryData = state.filter((e) => e.type === "tistory").map((e) => e.link);
    let velogData = state.filter((e) => e.type === "velog").map((e) => e.link);

    try {
      const waitArray = [];
      if(tistoryData.length > 0) waitArray.push(axios.post("/api/v1/blog/tistory", tistoryData));
      if(velogData.length > 0) waitArray.push(axios.post("/api/v1/blog/velog", velogData));
      const response = await Promise.all(waitArray);
      const responseData =  response.reduce((result, item) => result.concat(item.data), []);

      const realData = responseData.reduce((result, item) => {
        item.keyword.forEach((keyword) => {
          const existingItem = result.find((r) => r.x === keyword);
          if (existingItem) {
            existingItem.y++;
          } else {
            result.push({ x: keyword, y: 1 });
          }
        });
        return result;
      }, []);

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
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <GraphWrapper data={data} type="treemap" height="350px" width="100%"
      title="내가 가장 많이 쓴 키워드"
      description="Tistory, Velog의 데이터를 기반으로 분석하여 가장 많이 쓴 키워드들을 나타냈습니다.사용자의 블로그 내에서 특정 키워드의 사용빈도와 그래프의 면적이 비례합니다."
    />
  );
}
