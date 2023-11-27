import React from "react";
import FilledChart from "../charts/filledlinechart";

const Chart1 = () => {
  return (
    <div className=" lg:w-1/2 bg-white rounded-2xl overflow-hidden mt-5">
      <div className="flex items-center gap-2 font-bold p-4 border-b-[1px]">
        <span>Income - Expense</span>
      </div>
      <div className="p-5 h-1/3">
        <FilledChart />
      </div>
    </div>
  );
};

export default Chart1;
