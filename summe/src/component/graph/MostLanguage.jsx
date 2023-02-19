import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useRef } from "react";

export default function MostLanguage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
<<<<<<< Updated upstream
  const pieData = null;
  let RealData = { language: [], percentage: [] };

  const handleClick = async () => {
    setLoading(true);
    let data = ["https://github.com/raipen"];
    let response = await axios.post("/api/v1/search/get_github_repos", data);
    console.log(response.data);
    setResult(response.data);
    setLoading(false);

    response.forEach((e) => {
      RealData.language.push(e.language);
      RealData.percentage.push(e.percentage);
    });

    pieData = {
      series: RealData.percentage,
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: RealData.language,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
=======
  
  let RealData = { language:[], percentage:[] }
  const [pieData, setpieData]=useState(null)

  const handleClick = async () => {
    setLoading(true);
    let data =["https://github.com/raipen"];
    let response = await axios.post("/api/v1/github/get_repos", data);
    console.log(response);
    setResult(response.data);
    setLoading(false);

    let repos={}; 
    response.data.forEach(e=>{e.used_lang.forEach(j=>repos[j.lang]=new Array(response.data.length).fill(0))});

    response.data.forEach((e,i)=>{
      e.used_lang.forEach(d=>{
        repos[d.lang][i]=d.percent;
      })
    }); 

    console.log(repos)
    let project_name=[];
    response.data.forEach(e=>project_name.push(e.url.split("/").splice(3,2).join("/")));
    console.log(project_name);

    let seriesData=[];

    Object.keys(repos).forEach((key,index)=>{
      seriesData.push({
        name:key,
        data:repos[key],
        fillColor: `#${((index + 1) * 1000000 + 0x1000000).toString(16).substring(1)}`, // 여기서 각 시리즈의 색상을 지정
      });
    });

    console.log(seriesData);

    setpieData({
      plotOptions:{
        bar:{
          distributed:true
        }
      },
      series: seriesData,
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '100%'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          categories: project_name,
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'right',
          offsetX: 0,
          offsetY: 50
        },
        colors: ['#FFB64D', '#FF4D4D', '#6F7CFF', '#D3D3D3', '#C54DFF','#fff000','#0000FF','#00FF00','#369F36','#FF8CFF','#8B4F1D','#CD4646'], // 기본 색상 팔레트 대신 사용할 색상을 배열로 지정
      },
      });
>>>>>>> Stashed changes
  };

  return (
    <div id="chart">
<<<<<<< Updated upstream
      {pieData != null ? (
        <ReactApexChart
          options={pieData.options}
          series={pieData.series}
          type="pie"
          width="500"
        />
      ) : (
        <button
          style={{ background: "skyblue", cursor: "pointer", width: 200 }}
          onClick={handleClick}
        >
          Most Language Graph
=======
        <h2>Most Language Graph</h2>
        {pieData != null ? (
        <ReactApexChart 
        options={pieData.options}
        series={pieData.series}
        type="bar"
        width="1500"
    />
      ) : (
        <button
          style={{ background: "skyblue", cursor: "pointer"}}
          onClick={handleClick}>
          Most Language graph
>>>>>>> Stashed changes
        </button>
      )}
      <div style={{ display: "inline", margin: 10 }}>
        {loading ? "로딩중..." : "버튼을 눌러주세요"}
      </div>
    </div>
  );
}
