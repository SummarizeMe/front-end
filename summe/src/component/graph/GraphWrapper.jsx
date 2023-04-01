import ApexCharts from "react-apexcharts";
import "./GraphLoading.css";
import "./GraphTitle.css";

// 회전하는 로딩 중 표시
const LoadingBox = () => {
    return <div className="loading-box"></div>;
};

const GraphTitle = ({ title, description }) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</div>
            <div className="material-icons description" style={{ color: "gray" }}>
                help_outline
                <div>{description}</div>
            </div>
        </div>
    );

};

export default function GraphWrapper({ data, type, height, width, title = "그래프 제목", description = "그래프 설명" }) {
    return (
        <div style={{ width: width, height: height, display: "inline-block", position: "relative" }}>
            <GraphTitle title={title} description={description} />
            {data
                ? <ApexCharts
                    options={data.options}
                    series={data.series}
                    type={type}
                    height="100%"
                    width="100%"
                />
                : <LoadingBox />
            }
        </div>
    );
}
