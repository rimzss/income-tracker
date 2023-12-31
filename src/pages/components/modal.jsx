import React, { useState } from "react";
import ModalExpense from "./modalExpense";
import ModalIncome from "./ModalIncome";
import CategoryModal from "./categoryModal";

const Modal = ({
  categoryArr,
  openCategoryModal,
  setCategoryOpen,
  categoryOpen,
  open,
  setOpen,
}) => {
  const [showExpense, setShowExpense] = useState("");
  const [showIncome, setShowIncome] = useState("hidden");

  return (
    <>
      <dialog
        open={open}
        id="my_modal_1"
        className="modal z-10 bg-black bg-opacity-40"
      >
        <div className="modal-box p-0 w-2/3 max-w-6xl bg-white">
          <div className="flex justify-between border-b-[1px] p-5">
            <h3 className="text-xl font-semibold">Add Records</h3>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="text-xl"
            >
              X
            </button>
          </div>
          <ModalExpense
            setShowExpense={setShowExpense}
            setShowIncome={setShowIncome}
            showExpense={showExpense}
            categoryArr={categoryArr}
            setCategoryOpen={setCategoryOpen}
            categoryOpen={categoryOpen}
            open={open}
            setOpen={setOpen}
          />
          <ModalIncome
            setShowExpense={setShowExpense}
            setShowIncome={setShowIncome}
            showIncome={showIncome}
            categoryArr={categoryArr}
            openCategoryModal={openCategoryModal}
            open={open}
            setOpen={setOpen}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
