import ApexCharts from "react-apexcharts";
import { Suspense } from "react";
import "./GraphLoading.css";

// 회전하는 로딩 중 표시
const LoadingBox = () => {
  return <div className="loading-box"></div>;
};

export default function GraphWrapper({ data, type, height, width }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        display: "inline-block",
        position: "relative",
      }}
    >
      {data ? (
        <ApexCharts
          options={data.options}
          series={data.series}
          type={type}
          height="100%"
          width="100%"
        />
      ) : (
        <LoadingBox />
      )}
    </div>
  );
}
