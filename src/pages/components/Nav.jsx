import React from "react";
import Avatar from "@mui/material/Avatar";

import Logo from "./logo";

const Nav = () => {
  return (
    <nav className="flex w-screen h-20 bg-white justify-between px-20 items-center">
      <ul className="flex gap-4 text-black">
        <Logo visibility={"hidden"} />
        <h3 className="font-medium">Dashboard</h3>
        <h3>Records</h3>
      </ul>
      <div className="flex gap-5">
        <button className="w-36 h-9 rounded-3xl bg-second text-white font-light text-lg hover:bg-blue-500">
          + Record
        </button>
        <div className="flex items-center gap-3">
          <Avatar />
          <figure>
            <p className="font-light text-sm leading-3">Welcome !</p>
            <p className="font-medium text-lg leading-4">Your Name</p>
          </figure>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
