import { useContext, useEffect, useState } from "react";
import { Chart } from "chart.js";
import { transContext } from "@/context/TransProvider";
function Doughnut() {
  const { catSum, catSums } = useContext(transContext);
  const [data, setData] = useState([]);
  const [nameData, setNameData] = useState([]);
  const [colorData, setColorData] = useState([]);

  useEffect(() => {
    catSum();
  }, []);
  useEffect(() => {
    if (catSums) {
      setData(
        catSums.map((e) => {
          return e.sum;
        })
      );
      setNameData(catSums.map((e) => e.name));
      setColorData(
        catSums.map((e) => {
          switch (e.categorycolor) {
            case "bg-second":
              return "#0166FF";
              break;
            case "bg-red-500":
              return "#ef4444";
              break;
            case "bg-green-500":
              return "#22c55e";
              break;
            case "bg-purple-500":
              return "#a855f7";
              break;
            case "bg-yellow-500":
              return "#eab308";
              break;
            case "bg-orange-500":
              return "#f97316";
              break;
            default:
              break;
          }
        })
      );
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
            borderColor: colorData,
            backgroundColor: colorData,
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
