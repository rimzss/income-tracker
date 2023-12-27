import React, { useContext, useEffect } from "react";
import Doughnut from "../charts/doughnut";
import { catContext } from "@/context/CatProvider";
import { transContext } from "@/context/TransProvider";

const Chart2 = () => {
  const mockDataChart = [
    { color: "bg-[#1C64F2]", category: "Bills", amount: 5000000 },
    { color: "bg-[#E74694]", category: "Food", amount: 5000000 },
    { color: "bg-[#FDBA8C]", category: "Shopping", amount: 5000000 },
    { color: "bg-[#16BDCA]", category: "Insurance", amount: 5000000 },
    { color: "bg-[#F2901C]", category: "Clothing", amount: 5000000 },
  ];

  const { catSums, catSum } = useContext(transContext);
  return (
    <div className=" lg:w-1/2 bg-white rounded-2xl overflow-hidden mt-5">
      <div className="flex items-center gap-2 font-bold p-4 border-b-[1px]">
        <span>Income - Expense</span>
      </div>
      <div className="p-5 flex">
        <Doughnut />
        <div className="w-full h-full flex flex-col gap-4">
          {catSums?.map((data) => {
            return (
              <div
                key={data.category}
                className="flex items-center justify-between gap-3 -ml-15"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full ${data.categorycolor}`}
                  ></div>
                  <h4>{data.name}</h4>
                </div>

                <span className="">{data.sum}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chart2;
