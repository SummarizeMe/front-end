import { useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import MostLanguage from "../../component/graph/MostLanguage";
import Time from "../../component/graph/Time";

export default function ViewGraph() {
  const { state } = useLocation();
  console.log("View Graph props");
  console.log(state);

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
      <Time/>
      <MostLanguage/>
    </>
  );
}
