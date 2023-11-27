import { useEffect } from "react";
import { Chart } from "chart.js";
function FilledChart() {
  useEffect(() => {
    let options = {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              max: 3000000,
              min: 0,
              stepSize: 1000000,
            },
          },
        ],
      },
    };
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      options: options,
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            barThickness: 20,
            data: [
              3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            label: "Income",
            borderColor: "rgb(132, 204, 22)",
            backgroundColor: "rgb(132, 204, 22)",
            borderWidth: 0,
            categoryPercentage: 0.5,
          },
          {
            barThickness: 20,
            data: [
              2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000,
            ],
            label: "Expense",
            borderColor: "rgb(249, 115, 22)",
            backgroundColor: "rgb(249, 115, 22)",
            borderWidth: 1,

            categoryPercentage: 0.5,
          },
        ],
      },
    });
  }, []);

  return (
    <>
      <div className="pt-0 rounded-xl w-full h-fit mx-auto">
        <canvas className="" id="myChart"></canvas>
      </div>
    </>
  );
}

export default FilledChart;
