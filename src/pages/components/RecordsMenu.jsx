import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import AmountRange from "./AmountRange";
import Modal from "./modal";
import CategoryModal from "./categoryModal";

const RecordsMenu = ({
  open,
  setOpen,
  categoryOpen,
  setCategoryOpen,
  categoryArr,
  setRefresh,
  refresh,
  isLoaded,
}) => {
  const openCategoryModal = () => {
    console.log("CATEGORY MODALL");
    document.getElementById("my_modal_2").showModal();
  };
  return (
    <>
      <section className="bg-white rounded-2xl w-1/3 max-w-md border-[1px] h-full px-5 py-8">
        <h3 className="font-medium mb-5 text-3xl">Records</h3>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="btn w-full h-9 rounded-3xl bg-second text-white font-light text-lg hover:bg-blue-500"
        >
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
            {isLoaded &&
              categoryArr.map((category) => {
                return (
                  <div className="flex items-center justify-between my-5">
                    <div className="flex gap-3">
                      <button className="text-2xl">
                        <MdRemoveRedEye color="gray" />
                      </button>
                      <p className="text-xl truncate">{category.name}</p>
                    </div>

                    <IoMdArrowDropright />
                  </div>
                );
              })}
            <p
              onClick={() => setCategoryOpen(true)}
              className="text-xl text-second cursor-pointer"
            >
              + <span className="text-black">Add Category</span>
            </p>
          </div>
        </div>
        <h3 className="font-medium text-xl mb-5">Amount Range</h3>
        <AmountRange />
      </section>
      <Modal
        categoryArr={categoryArr}
        openCategoryModal={openCategoryModal}
        open={open}
        setOpen={setOpen}
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
      />
      <CategoryModal
        setRefresh={setRefresh}
        refresh={refresh}
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
      />
    </>
  );
};

export default RecordsMenu;
