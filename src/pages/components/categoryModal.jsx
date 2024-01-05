import React, { use, useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { GoHomeFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { testContext } from "@/context/Provider";
import { IoCart } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

const CategoryModal = ({
  categoryOpen,
  setCategoryOpen,
  setRefresh,
  refresh,
}) => {
  const { userId } = useContext(testContext);
  const icons = [
    { icon: <GoHomeFill />, name: "home1" },
    { icon: <FaHome />, name: "home2" },
    { icon: <FaClipboardUser />, name: "clipboardUser" },
    { icon: <FaClipboardList />, name: "clipboardList" },
    { icon: <FaMoneyBillWave />, name: "money" },
    { icon: <RiNetflixFill />, name: "netflix" },
    { icon: <IoFastFood />, name: "fastfood" },
    { icon: <IoCart />, name: "cart" },
    { icon: <FaCar />, name: "car" },
    { icon: <FaGift />, name: "gift" },
  ];
  const colors = [
    "bg-second",
    "bg-red-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-yellow-500",
    "bg-orange-500",
  ];

  const [displayIcon, setDisplayIcon] = useState(<GoHomeFill />);
  const [displayColor, setDisplayColor] = useState("bg-second");
  const [inputValue, setInputValue] = useState("");

  const [addCategory, setAddCategory] = useState({
    catName: "",
    catIcon: "chosen",
    catColor: displayColor,
    catDescription: "blank",
    userId: userId,
  });

  const handleColor = (color) => {
    setAddCategory({ ...addCategory, catColor: color });
  };
  const handleIcon = (icon) => {
    setAddCategory({ ...addCategory, catIcon: icon });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setAddCategory({ ...addCategory, [e.target.name]: e.target.value });
  };

  const createCategory = async () => {
    try {
      const { message } = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/category/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addCategory),
        }
      );
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog open={categoryOpen} className="modal z-10 bg-black bg-opacity-40">
      <div className="modal-box p-0 bg-white">
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
                {displayIcon ? displayIcon : icons[0].icon}
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
                      key={icon.name}
                      onClick={() => {
                        setDisplayIcon(icon.icon);
                        handleIcon(icon.name);
                      }}
                      className="p-3 text-3xl cursor-pointer inline"
                    >
                      {icon.icon}
                    </div>
                  );
                })}
                <div className="p-3 flex gap-3 border-t-[1px] w-full">
                  {colors.map((color) => {
                    return (
                      <div
                        key={color}
                        onClick={() => handleColor(color)}
                        className={`w-8 h-8 rounded-full ${color}`}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div></div>
            </div>
            <input
              value={inputValue}
              name="catName"
              type="text"
              placeholder="Name"
              className="input input-bordered w-3/4 bg-base"
              onChange={handleChange}
            />
          </div>
          <button
            onClick={() => {
              createCategory();

              setInputValue("");
              setCategoryOpen(false);
            }}
            className="btn w-full rounded-3xl bg-green-500 hover:bg-green-600 mt-8 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button
          onClick={() => {
            console.log(addCategory);
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
