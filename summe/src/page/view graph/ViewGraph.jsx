import { useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { useEffect } from "react";

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
      github_repos: [
        {
          addr: "레포주소",
          used_tech: ["react", "spring"],
          used_lang: ["javascript", "python"],
        },
        {},
      ],
      blog: [{ addr: "블로그 글 주소", title: "제목", keyword: ["", "", ""] }],
      calender: [
        { date: "2022-01-11", works: [{ type: "github", addr: "레포주소" }] },
        { date: "2022-01-12", works: [{ type: "github", addr: "레포주소" }] },
        { date: "2022-03-09", works: [{ type: "github", addr: "레포주소" }] },
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
    </>
  );
}
