import { testContext } from "@/context/Provider";
import React, { useContext } from "react";

const ModalIncome = ({
  setShowExpense,
  setShowIncome,
  showIncome,
  categoryArr,
}) => {
  const {
    addRecord,
    handleChangeRecords,
    transactionRecord,
    setTransactionRecord,
  } = useContext(testContext);
  return (
    <section className={`flex ${showIncome}`}>
      <div className="w-1/2 p-5">
        <div className="bg-base w-full rounded-3xl">
          <button
            onClick={() => {
              setShowExpense("");
              setShowIncome("hidden");
            }}
            className="btn w-1/2 rounded-3xl hover:bg-second hover:text-white"
          >
            Expense
          </button>
          <button className="btn w-1/2 rounded-3xl bg-green-500 text-white hover:bg-green-500 hover:text-white">
            Income
          </button>
        </div>
        <div className="relative my-5">
          <p className="absolute top-1 left-6">Amount</p>
          <input
            onChange={handleChangeRecords}
            name="amount"
            type="text"
            placeholder="₮ 000.00"
            className="input input-bordered input-lg w-full bg-base pt-4"
          />
        </div>
        <h3 className="text-lg">Category</h3>
        <div className="dropdown w-full">
          <select tabIndex={0} className="select w-full bg-base my-5" />
          <select />
          <ul
            tabIndex={0}
            className="dropdown-content z-[10] menu shadow bg-base-100 rounded-box w-full overflow-y-scroll flex-nowrap p-0 h-40"
          >
            <div className="p-5 text-lg border-b-[1px]">Add Category</div>
            {categoryArr &&
              categoryArr.map((category) => {
                return (
                  <li className="w-full p-5 text-lg">
                    <a
                      onClick={() => {
                        console.log("SELECTED CATEGORY", category.id);
                        transactionRecord.category_id = category.id;
                      }}
                      className="p-0"
                    >
                      {category.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="flex w-full gap-3">
          <div className="w-1/2">
            <h3>Date</h3>
            <input
              type="date"
              className="input input-bordered w-full bg-base mt-3"
            />
          </div>
          <div className="w-1/2">
            <h3>Date</h3>
            <input
              type="time"
              className="input input-bordered bg-base w-full mt-3"
            />
          </div>
        </div>
        <button
          onClick={() => {
            addRecord();
          }}
          className="btn rounded-3xl w-full bg-green-500 text-white mt-8"
        >
          Add Record
        </button>
      </div>
      <div className="p-5 w-1/2">
        <h3>Name</h3>
        <input
          onChange={handleChangeRecords}
          name="name"
          type="text"
          placeholder="Write Here"
          className="input input-bordered w-full bg-base mt-2 mb-6"
        />
        <h3>Note</h3>
        <textarea
          onChange={handleChangeRecords}
          name="description"
          className="textarea textarea-bordered w-full h-3/5 bg-base mt-5 resize-none"
          placeholder="Write Here"
        ></textarea>
      </div>
    </section>
  );
};

export default ModalIncome;
