import React, { useContext, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { GoHomeFill } from "react-icons/go";
import { PiForkKnifeFill } from "react-icons/pi";
import { transContext } from "@/context/TransProvider";
import { getIcon } from "@/utils/getIcon";
import { dateFormatter } from "@/utils/dateFormat";

const RecordList = () => {
  const [filterStyle, setFilterStyle] = React.useState("");

  const { transactionList, getTrans, transRefresh } = useContext(transContext);

  const handleChange = (event) => {
    setFilterStyle(event.target.value);
  };

  useEffect(() => {
    getTrans();
  }, [transRefresh]);
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
          <p className="text-gray-500">- 00,000₮</p>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-xl my-5">Today</h3>
        {transactionList?.map((record) => {
          return (
            <Tooltip title={record.description} placement="top-end">
              <div className="flex items-center gap-4 w-full bg-white p-5 rounded-xl border-[1px] mt-5">
                <input type="checkbox" className="checkbox" />
                <div className="flex justify-between w-full">
                  <div className="flex gap-2">
                    <div
                      className={`w-12 h-12 rounded-full flex justify-center items-center ${record.categorycolor} `}
                    >
                      {getIcon(record.categoryicon)}
                    </div>
                    <div>
                      <p>{record.name}</p>
                      <p className="text-sm text-gray-400">
                        {dateFormatter(record.createdat)}
                      </p>
                    </div>
                  </div>

                  <p
                    className={
                      record.transaction_type === "EXP"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {record.transaction_type === "EXP" ? "-" : "+"}
                    {record.amount}₮
                  </p>
                </div>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default RecordList;
