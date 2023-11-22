import React from "react";

import { GoHomeFill } from "react-icons/go";

const LastRecords = () => {
  return (
    <div className=" bg-white rounded-2xl overflow-hidden mt-5">
      <div className="flex items-center gap-2 font-bold p-4 border-b-2">
        <span>Last Records</span>
      </div>
      <div className="p-5">
        <section className=" border-b-[1px] pb-5 flex justify-between items-center">
          <div className="flex gap-3">
            <div className=" w-12 h-12 bg-second rounded-full flex justify-center items-center">
              <GoHomeFill color="white" />
            </div>
            <div>
              <h4>Lending & Renting</h4>
              <p className="font-light">3 hours ago</p>
            </div>
          </div>
          <p className=" text-green-500 font-medium">- 1,000₮</p>
        </section>
      </div>
    </div>
  );
};

export default LastRecords;
