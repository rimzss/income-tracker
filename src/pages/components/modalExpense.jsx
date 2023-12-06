import React, { useState } from "react";

const ModalExpense = ({
  setShowExpense,
  setShowIncome,
  showExpense,
  categoryArr,
  categoryOpen,
  setCategoryOpen,
  open,
  setOpen,
}) => {
  return (
    <section className={`flex ${showExpense}`}>
      <div className="w-1/2 p-5">
        <div className="bg-base w-full rounded-3xl">
          <button className="btn w-1/2 rounded-3xl bg-second text-white hover:bg-second">
            Expense
          </button>
          <button
            onClick={() => {
              setShowExpense("hidden");
              setShowIncome("");
            }}
            className="btn w-1/2 rounded-3xl hover:bg-green-400 hover:text-white"
          >
            Income
          </button>
        </div>
        <div className="relative my-5">
          <p className="absolute top-1 left-6">Amount</p>
          <input
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
            className="dropdown-content z-[10] menu shadow bg-base rounded-box w-full overflow-y-scroll flex-nowrap p-0 h-40 "
          >
            <div className="p-5 text-lg border-b-[1px] cursor-pointer">
              <button
                onClick={() => {
                  setOpen(false);
                  setCategoryOpen(true);
                }}
              >
                Add Category
              </button>
            </div>
            {categoryArr &&
              categoryArr.map((category) => {
                return (
                  <li className="w-full p-5 text-lg">
                    <a className="p-0">{category.name}</a>
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
        <button className="btn rounded-3xl w-full bg-second text-white mt-8">
          Add Record
        </button>
      </div>
      <div className="p-5 w-1/2">
        <h3>Payee</h3>
        <input
          type="text"
          placeholder="Write Here"
          className="input input-bordered w-full bg-base mt-2 mb-6"
        />
        <h3>Note</h3>
        <textarea
          className="textarea textarea-bordered w-full h-3/5 bg-base mt-5"
          placeholder="Write Here"
        ></textarea>
      </div>
    </section>
  );
};

export default ModalExpense;
