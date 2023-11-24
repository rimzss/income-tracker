import { useEffect } from "react";
import { Chart } from "chart.js";
function Doughnut() {
  useEffect(() => {
    var ctx = document.getElementById("myChart1").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
        datasets: [
          {
            data: [15, 15, 15, 15, 15],
            borderColor: [
              "rgb(28, 100, 242",
              "rgb(231, 70, 148)",
              "rgba(253, 186, 140, 1)",
              "rgba(22, 189, 202, 1)",
              "rgba(242, 144, 28, 1)",
            ],
            backgroundColor: [
              "rgb(28, 100, 242",
              "rgb(231, 70, 148)",
              "rgba(253, 186, 140, 1)",
              "rgba(22, 189, 202, 1)",
              "rgba(242, 144, 28, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        legend: { display: false },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      <div className="pt-0 w-4/5 pb-2 my-5 -ml-20">
        <canvas id="myChart1"></canvas>
      </div>
    </>
  );
}

export default Doughnut;
