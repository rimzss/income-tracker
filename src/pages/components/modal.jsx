import React, { useState } from "react";
import ModalExpense from "./modalExpense";
import ModalIncome from "./ModalIncome";
import CategoryModal from "./categoryModal";

const Modal = ({ categorys, openCategoryModal }) => {
  const [showExpense, setShowExpense] = useState("");
  const [showIncome, setShowIncome] = useState("hidden");

  return (
    <>
      <dialog id="my_modal_1" className="modal z-10">
        <div className="modal-box p-0 w-2/3 max-w-6xl">
          <div className="flex justify-between border-b-[1px] p-5">
            <h3 className="text-xl font-semibold">Add Records</h3>
            <form method="dialog">
              <button className="text-xl">X</button>
            </form>
          </div>
          <ModalExpense
            setShowExpense={setShowExpense}
            setShowIncome={setShowIncome}
            showExpense={showExpense}
            categorys={categorys}
            openCategoryModal={openCategoryModal}
          />
          <ModalIncome
            setShowExpense={setShowExpense}
            setShowIncome={setShowIncome}
            showIncome={showIncome}
            categorys={categorys}
            openCategoryModal={openCategoryModal}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
