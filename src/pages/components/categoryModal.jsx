import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { GoHomeFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { PiLadderBold } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";

const CategoryModal = ({ categoryOpen, setCategoryOpen }) => {
  const icons = [
    <GoHomeFill />,
    <FaHome />,
    <FaClipboardUser />,
    <FaClipboardList />,
    <PiLadderBold />,
  ];
  const colors = [];
  const [displayIcon, setDisplayIcon] = useState();

  return (
    <dialog open={categoryOpen} className="modal z-10">
      <div className="modal-box p-0">
        <div className="flex justify-between border-b-[1px] p-5">
          <h3 className="text-xl font-semibold">Add Category</h3>

          <button
            onClick={() => {
              setCategoryOpen(false);
            }}
            className="text-xl"
          >
            X
          </button>
        </div>
        <div className="p-5 ">
          <div className="flex items-center gap-5">
            <div className="dropdown w-1/4 ">
              <label tabIndex={0} className="btn m-1 w-full text-3xl">
                {displayIcon ? displayIcon : icons[0]}
                <FaCaretDown
                  className="text-lg
                "
                />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-2xl bg-base-100 rounded-box w-72 z-50 flex-row"
              >
                {icons.map((icon) => {
                  return (
                    <div
                      onClick={() => {
                        setDisplayIcon(icon);
                      }}
                      className="p-3 text-3xl cursor-pointer inline"
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <div></div>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-3/4 bg-base"
            />
          </div>
          <button className="btn w-full rounded-3xl bg-green-500 hover:bg-green-600 mt-8">
            Confirm
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button
          onClick={() => {
            setCategoryOpen(false);
          }}
        >
          close
        </button>
      </form>
    </dialog>
  );
};

export default CategoryModal;
