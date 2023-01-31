import ApexCharts from "react-apexcharts";

export default function TeamContribute({ data }) {
  const realData = { repo: [], percent: [] };
  console.log(data);
  data.forEach((e) => {
    realData.repo.push(e.repo);
    realData.percent.push(e.percent);
  });
  const Data = {
    series: [
      {
        name: "percent",
        data: realData.percent,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },
      title: {
        text: "Basic Radar Chart",
      },
      xaxis: {
        categories: realData.repo,
      },
    },
  };
  return (
    <>
      <h1>Team contribute graph</h1>
      <h2>{JSON.stringify(realData)}</h2>
      <ApexCharts
        options={Data.options}
        series={Data.series}
        type="radar"
        width="600"
      />
    </>
  );
}
