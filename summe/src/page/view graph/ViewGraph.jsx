import { useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import MonthlyCommit from "../../component/graph/MonthlyCommit";
import TeamContribute from "../../component/graph/TeamContribute";

export default function ViewGraph() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state } = useLocation();
  console.log("View Graph props");
  console.log(state);

  // 가짜 response
  const falserespose = {
    status: 200,
    data: {
      monthlycommit: [
        { date: "2018-09", commitCnt: 30, lineCnt: 150 },
        { date: "2018-12", commitCnt: 40, lineCnt: 160 },
        { date: "2019-02", commitCnt: 50, lineCnt: 170 },
      ],
      teamcontribute: [
        { repo: "A", percent: 75 },
        { repo: "B", percent: 65 },
        { repo: "C", percent: 35 },
        { repo: "D", percent: 90 },
      ],
    },
  };

  //백엔드에 json형식으로 값을 전달: axios post
  // const dataPost = async () => {
  //   try {
  //     setError(null);
  //     setLoading(true);
  //     const response = await axios.post(
  //       "http://localhost:8000/link",
  //       JSON.stringify(state)
  //     );
  //   } catch (e) {
  //     setError(e);
  //   }
  //   setLoading(false);
  // };
  // if (loading) {
  //   return <div>로딩중..</div>;
  // }
  // if (error) {
  //   alert("오류가 발생하였습니다. 다시 시도하세요");
  // }

  return (
    <>
      <h1>view graph page</h1>
      <h2>{JSON.stringify(falserespose)}</h2>
      <MonthlyCommit data={falserespose.data.monthlycommit} />
      <TeamContribute data={falserespose.data.teamcontribute} />
    </>
  );
}
