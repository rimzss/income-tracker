import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

import Logo from "./logo";
import Modal from "./modal";

const Nav = ({ open, setOpen }) => {
  return (
    <nav className="flex w-screen h-20 bg-white justify-between px-20 items-center">
      <ul className="flex gap-4 text-black">
        <Logo visibility={"hidden"} />
        <Link href="../" >
          <h3 className="font-medium">Dashboard</h3>
        </Link>
        <Link href="../records" >
          <h3>Records</h3>
        </Link>
      </ul>
      <div className="flex gap-5">
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="w-36 h-9 rounded-3xl bg-second text-white font-light text-lg hover:bg-blue-500"
        >
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
