import { useContext, useEffect, useState } from "react";
import { Chart } from "chart.js";
import { transContext } from "@/context/TransProvider";
function Doughnut() {
  const { catSum, catSums } = useContext(transContext);
  const [data, setData] = useState([]);
  const [nameData, setNameData] = useState([]);

  useEffect(() => {
    catSum();
    console.log("BAR DATA CHART", catSums);
  }, []);

  useEffect(() => {
    if (catSums) {
      setData(
        catSums.map((e) => {
          console.log(e.sum);
          return e.sum;
        })
      );
      setNameData(catSums.map((e) => e.name));
    }
  }, [catSums]);

  useEffect(() => {
    var ctx = document.getElementById("myChart1").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: nameData,
        datasets: [
          {
            data: data,
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
  }, [catSums]);

  return (
    <>
      <div className="pt-0 w-4/5 pb-2 my-5 -ml-20">
        <canvas id="myChart1"></canvas>
      </div>
    </>
  );
}

export default Doughnut;
