import ApexCharts from "react-apexcharts";

const LoadingBox = () => {
    return (
        <div style={{ height: "100%", width: "100%" }}>
            로딩중 ...
        </div>
    );
};

export default function GraphWrapper({ data, type, height, width }) {
    return (
        <div style={{width:width,height:height,display:"inline-block"}}>
            {data
                ? <ApexCharts
                    options={data.options}
                    series={data.series}
                    type={type}
                    height="100%"
                    width="100%"
                />
                : <LoadingBox/>
            }
        </div>
    );
}