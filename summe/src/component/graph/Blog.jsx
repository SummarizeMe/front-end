import { useState,useEffect} from "react";
import axios from "axios";
import GraphWrapper from "./GraphWrapper";

export default function Blog({ state }) {
  const [data, setData] = useState(null);

  const asyncWrapper = async () => {
    let data = state.filter((e) => e.type === "tistory").map((e) => e.link);

    try {
      const response = await axios.post("/api/v1/blog/tistory", data);

      const realData = response.data.reduce((result, item) => {
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
          },
          title: {
            text: "Basic Treemap",
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <GraphWrapper data={data} type="treemap" height={350} width={600} />
  );
}
