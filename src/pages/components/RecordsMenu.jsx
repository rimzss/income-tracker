import React from "react";
import AmountRange from "./AmountRange";

const RecordsMenu = () => {
  const categorys = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transporting",
    "Vehicle",
    "Life & Entertainment",
    "Commnucation & Pc",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ];
  return (
    <section className="bg-white rounded-2xl w-1/3 max-w-md border-[1px] h-full px-5 py-8">
      <h3 className="font-medium mb-5 text-3xl">Records</h3>
      <button className="btn w-full h-9 rounded-3xl bg-second text-white font-light text-lg hover:bg-blue-500">
        + Add
      </button>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full bg-base h-10 my-8"
      />
      <div className="mb-8">
        <h3 className="font-medium text-xl mb-5">Types</h3>
        <div className="flex gap-3 items-center">
          <input type="radio" name="radio-2" className="radio" />
          <span className="text-xl">All</span>
        </div>
        <div className="flex gap-3 items-center my-5">
          <input type="radio" name="radio-2" className="radio" />
          <span className="text-xl">Income</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="radio" name="radio-2" className="radio" />
          <span className="text-xl">Expenses</span>
        </div>
        <div className="mt-5">
          <h3 className="font-medium text-xl mb-5">Category</h3>
          {categorys.map((category) => {
            return (
              <div className="flex gap-3 my-5">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                      fill="#94A3B8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.664255 10.5904C0.517392 10.2087 0.517518 9.78563 0.66461 9.40408C2.10878 5.65788 5.7433 3 9.99859 3C14.256 3 17.892 5.66051 19.3347 9.40962C19.4816 9.79127 19.4814 10.2144 19.3344 10.5959C17.8902 14.3421 14.2557 17 10.0004 17C5.74298 17 2.10698 14.3395 0.664255 10.5904ZM14.0004 10C14.0004 12.2091 12.2095 14 10.0004 14C7.79123 14 6.00037 12.2091 6.00037 10C6.00037 7.79086 7.79123 6 10.0004 6C12.2095 6 14.0004 7.79086 14.0004 10Z"
                      fill="#94A3B8"
                    />
                  </svg>
                </button>
                <p className="text-xl truncate">{category}</p>
              </div>
            );
          })}
          <p className="text-xl text-second">
            + <span className="text-black">Add Category</span>
          </p>
        </div>
      </div>
      <h3 className="font-medium text-xl mb-5">Amount Range</h3>
      <AmountRange />
    </section>
  );
};

export default RecordsMenu;
