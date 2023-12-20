import { transContext } from "@/context/TransProvider";
import React, { useContext, useEffect } from "react";
import { getIcon } from "@/utils/getIcon";
import { timeRelativer } from "@/utils/dateFormat";

import { GoHomeFill } from "react-icons/go";

const LastRecords = () => {
  const { getTransLimit, transactionList } = useContext(transContext);
  useEffect(() => {
    getTransLimit();
  }, []);
  return (
    <div className=" bg-white rounded-2xl overflow-hidden mt-5">
      <div className="flex items-center gap-2 font-bold p-4 border-b-2">
        <span>Last Records</span>
      </div>
      <div className="p-5">
        {transactionList?.map((record) => {
          return (
            <section className="mb-5 border-b-[1px] pb-5 flex justify-between items-center">
              <div className="flex gap-3">
                <div
                  className={`w-12 h-12 ${record.categorycolor} rounded-full flex justify-center items-center`}
                >
                  {getIcon(record.categoryicon)}
                </div>
                <div>
                  <h4>{record.name}</h4>
                  <p className="font-light">
                    {timeRelativer(record.createdAt)}
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
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default LastRecords;
