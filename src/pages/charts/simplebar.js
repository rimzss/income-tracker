import { transContext } from "@/context/TransProvider";
import React, { useContext, useEffect } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SimpleBar = () => {
  const { monthSums } = useContext(transContext);
  const data = [
    {
      sar: "December",
      inc: 4000,
      exp: 2400,
    },
    useEffect(() => {
      if (monthSums) {
        monthSums.map((e) => {});
      }
    }, [monthSums]),
  ];
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sar" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="inc"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="exp"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </div>
  );
};

export default SimpleBar;
