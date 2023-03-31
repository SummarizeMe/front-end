import ApexCharts from "react-apexcharts";

export default function GraphWrapper({ data, type, height, width }) {
    return (
        <div>
            {data
                ? <ApexCharts
                    options={data.options}
                    series={data.series}
                    type={type}
                    height={height}
                    width={width}
                />
                : <div
                    style={{ height: height + "px", width: width + "px" }}>
                    로딩중 ...
                </div>
            }
        </div>
    );
}