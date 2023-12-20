import React from "react";
import Doughnut from "../charts/doughnut";

const Chart2 = () => {
  const mockDataChart = [
    { color: "bg-[#1C64F2]", category: "Bills", amount: 5000000 },
    { color: "bg-[#E74694]", category: "Food", amount: 5000000 },
    { color: "bg-[#FDBA8C]", category: "Shopping", amount: 5000000 },
    { color: "bg-[#16BDCA]", category: "Insurance", amount: 5000000 },
    { color: "bg-[#F2901C]", category: "Clothing", amount: 5000000 },
  ];
  return (
    <div className=" lg:w-1/2 bg-white rounded-2xl overflow-hidden mt-5">
      <div className="flex items-center gap-2 font-bold p-4 border-b-[1px]">
        <span>Income - Expense</span>
      </div>
      <div className="p-5 flex">
        <Doughnut />
        <div className="w-full h-full flex flex-col gap-4">
          {mockDataChart.map((data) => {
            return (
              <div
                key={data.category}
                className="flex items-center gap-3 -ml-15"
              >
                <div className={`w-5 h-5 rounded-full ${data.color}`}></div>
                <h4>{data.category}</h4>
                <span className="">{data.amount}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chart2;
