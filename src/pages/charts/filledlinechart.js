import { useContext, useEffect, useState } from "react";
import { Chart } from "chart.js";
import { timeRelativer } from "@/utils/dateFormat";
import { transContext } from "@/context/TransProvider";
function FilledChart() {
  const { monthSums, isMonthDone } = useContext(transContext);
  const [months, setMonths] = useState([]);
  const [monthSumsInc, setMonthSumsInc] = useState([]);
  const [monthSumsExp, setMonthSumsExp] = useState([]);

  // useEffect(() => {
  // //   if (monthSums) {
  // //     months.push(monthSums.exp.sar);
  // //     monthSumsExp.push(monthSums.exp.sum);
  // //     monthSumsInc.push(monthSums.inc.sum);
  // //     console.log("BAR CHART DATA", monthSums);
  // //   }
  // // }, [monthSums]);

  useEffect(() => {
    let options = {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              max: monthSums?.exp.sum,
              min: 0,
              stepSize: 5000000,
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
        labels: months,
        datasets: [
          {
            barThickness: 20,
            data: monthSumsInc,
            label: "Income",
            borderColor: "rgb(132, 204, 22)",
            backgroundColor: "rgb(132, 204, 22)",
            borderWidth: 0,
            categoryPercentage: 0.5,
          },
          {
            barThickness: 20,
            data: monthSumsExp,
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
