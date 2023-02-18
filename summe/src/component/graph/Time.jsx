import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useRef } from "react";

export default function Time({}) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const startMonth = useRef(null);
  const endMonth = useRef(null);

  /*
    // repos에 배열 생성
    let repos = {};
    data1.forEach(e=>{repos[e.addr.split("/").pop()]=[]});

    // repos에 날짜 github면 push
    data.forEach(e=>{
        e.works.forEach(d=>{
            if(d.type=="github")
            {
                repos[d.addr.split("/").pop()].push(e.date);
            }
        });
    });
    console.log(repos);
    */

  const handleClick = async () => {
    setLoading(true);
    let data = {
      github: ["https://github.com/raipen"],
      start: {
        year: 2022,
        month: Number(startMonth.current.value.split("-")[1]),
      },
      end: { year: 2022, month: Number(endMonth.current.value.split("-")[1]) },
    };
    let response = await axios.post("/api/v1/search/get_calender", data);
    console.log(response.data);
    setLoading(false);
  };

  return (
    <div id="chart">
      <h2>Project TimeLine Graph</h2>
      <button
        style={{ background: "skyblue", cursor: "pointer", width: 200 }}
        onClick={handleClick}
      >
        Time Graph
      </button>
      <div style={{ display: "inline", margin: 10 }}>
        {loading ? "로딩중..." : "버튼을 눌러주세요"}
      </div>
      <br />
      <input type="month" ref={startMonth} />
      <input type="month" ref={endMonth} />
    </div>
  );
}
