import { React, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

import ChartDataLabels from "chartjs-plugin-datalabels";

function StatistikUlasan(props) {
  const [statistikUlasan, setStatistikUlasan] = useState([]);

  useEffect(() => {
    if (props.statisik) {
      fetchUlasan();
    }
  }, []);

  const fetchUlasan = () => {
    const res = props.statisik;
    setStatistikUlasan(res);
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    indexAxis: "y",
    legend: {
      display: false,
    },
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        // hidden legend
        display: false,
      },
    },
    datalabels: {
      formatter: function (value, ctx) {
        const total = statistikUlasan.reduce((acc, cur) => acc + cur.total, 0);
        return total;
      },
      display: function (ctx) {
        // return ctx.datasetIndex === ctx.chart.$totalizer.utmost;
        return ctx.datasetIndex === 0;
      },
      anchor: "end",
      align: "end",
    },
  };

  const labels = statistikUlasan.map((media) => media.rating);

  const data = {
    labels,
    datasets: [
      {
        label: "Ulasan",
        data: statistikUlasan.map((media) => media.total),
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
        ],
        backgroundColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
        ],
      },
    ],
  };

  return (
    <>
      {/* statistic review */}
      <div className="px-5">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

StatistikUlasan.propTypes = {};

export default StatistikUlasan;
