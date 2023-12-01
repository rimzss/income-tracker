import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { GoHomeFill } from "react-icons/go";
import { PiForkKnifeFill } from "react-icons/pi";

const RecordList = () => {
  const records = [
    {
      category: "Lending & Renting",
      amount: -1000,
      time: "14:00",
      color: "second",
      icon: <GoHomeFill color="white"/>,
    },
    {
      category: "Lending & Renting",
      amount: -1000,
      time: "14:00",
      color: "second",
      icon: <GoHomeFill color="white" />,
    },
    {
      category: "Lending & Renting",
      amount: -1000,
      time: "14:00",
      color: "second",
      icon: <GoHomeFill color="white" />,
    },
    {
      category: "Lending & Renting",
      amount: -1000,
      time: "14:00",
      color: "second",
      icon: <GoHomeFill color="white" />,
    },
    {
      category: "Food & Drinks",
      amount: -1000,
      time: "14:00",
      color: "red-500",
      icon: <PiForkKnifeFill color="white" />,
    },
    {
      category: "Food & Drinks",
      amount: -1000,
      time: "14:00",
      color: "red-500",
      icon: <PiForkKnifeFill color="white" />,
    },
    {
      category: "Food & Drinks",
      amount: -1000,
      time: "14:00",
      color: "red-500",
      icon: <PiForkKnifeFill color="white" />,
    },
    {
      category: "Food & Drinks",
      amount: -1000,
      time: "14:00",
      color: "red-500",
      icon: <PiForkKnifeFill color="white" />,
    },
  ];
  const [filterStyle, setFilterStyle] = React.useState("");

  const handleChange = (event) => {
    setFilterStyle(event.target.value);
  };

  return (
    <div className="w-2/3">
      <div className=" flex justify-between">
        <div className="join">
          <button className="join-item btn bg-[#E5E7EB]">«</button>
          <button className="join-item mx-5">Last 30 days</button>
          <button className="join-item btn bg-[#E5E7EB]">»</button>
        </div>
        <div>
          <Select
            value={filterStyle}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="bg-[#F9FAFB] font-semibold rounded-lg w-48"
          >
            <MenuItem value="">
              <p>Newest First</p>
            </MenuItem>
            <MenuItem value={"old"}>Oldest First</MenuItem>
          </Select>
        </div>
      </div>
      <div className="flex gap-4 w-full bg-white py-2 px-5 rounded-xl border-[1px] mt-5">
        <input type="checkbox" className="checkbox" />
        <div className="flex justify-between w-full">
          <p>Select All</p>
          <p className="text-gray-500">- 35,500₮</p>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-xl my-5">Today</h3>
        {records.map((record) => {
          return (
            <div className="flex items-center gap-4 w-full bg-white p-5 rounded-xl border-[1px] mt-5">
              <input type="checkbox" className="checkbox" />
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <div
                    className={`w-12 h-12 rounded-full flex justify-center items-center bg-${record.color} `}
                  >
                    {record.icon}
                  </div>
                  <div>
                    <p>{record.category}</p>
                    <p className="text-sm text-gray-400">{record.time}</p>
                  </div>
                </div>

                <p className="text-red-500">{record.amount}₮</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecordList;
