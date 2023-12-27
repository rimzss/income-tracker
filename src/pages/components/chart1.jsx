import React, { useContext, useEffect, useState } from "react";
import FilledChart from "../charts/filledlinechart";
import { transContext } from "@/context/TransProvider";
import SimpleBar from "../charts/simplebar";

const Chart1 = () => {
  const { monthSum } = useContext(transContext);
  return (
    <div className=" lg:w-1/2 bg-white rounded-2xl overflow-hidden mt-5">
      <div className="flex items-center gap-2 font-bold p-4 border-b-[1px]">
        <span>Income - Expense</span>
      </div>
      <div className="p-5 h-1/3">{monthSum ? <SimpleBar /> : ""}</div>
    </div>
  );
};

export default Chart1;
