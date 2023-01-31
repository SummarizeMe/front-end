import ApexCharts from "react-apexcharts";

export default function MonthlyCommit({ data }) {
  const realData = { commits: [], lines: [], categories: [] };
  console.log(data);
  data.forEach((e) => {
    realData.commits.push(e.commitCnt);
    realData.lines.push(e.lineCnt);
    realData.categories.push(e.date);
  });
  const Data = {
    series: [
      {
        name: "commit",
        data: realData.commits,
      },
      {
        name: "line",
        data: realData.lines,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: realData.categories,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  return (
    <>
      <h1>Monthly Commit graph</h1>
      <h2>{JSON.stringify(realData)}</h2>
      <ApexCharts
        options={Data.options}
        series={Data.series}
        type="area"
        width="500"
      />
    </>
  );
}
