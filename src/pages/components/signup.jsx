import React, { useState } from "react";
import Link from "next/link";

import Logo from "./logo";

const SignupInput = ({ setTrans, setIsLoading }) => {
  const [opacity, setOpacity] = useState("");
  return (
    <div className={`flex flex-col items-center w-1/2 ${opacity}`}>
      <Logo />
      <h2 className="text-xl font-bold text-black mt-10">
        Create Geld account
      </h2>
      <p className="font-medium mb-7">
        Sign up below to create your Wallet account
      </p>
      <div className="flex flex-col gap-4 w-full">
        <input
          className="input input-bordered bg-white"
          type="text"
          placeholder="Name"
        />
        <input
          className="input input-bordered bg-white"
          type="text"
          placeholder="Email"
        />
        <input
          className="input input-bordered bg-white"
          type="Password"
          placeholder="Password"
        />
        <input
          className="input input-bordered bg-white"
          type="Password"
          placeholder="Re-password"
        />
        <Link href="../setup">
          <button
            onClick={() => {
              setTrans("translate-x-full");
              setOpacity("opacity-0");
              setTimeout(() => {
                setOpacity("opacity-0 hidden");
                setIsLoading("block");
              }, 400);
            }}
            className="btn bg-second border-0 text-white h-10 w-full rounded-2xl hover:bg-blue-500"
          >
            Sign up
          </button>{" "}
        </Link>
      </div>
      <h3 className="font-medium text-black mt-10">
        Already have account?{" "}
        <span className="text-second">
          <Link href="../login">Login</Link>
        </span>
      </h3>
    </div>
  );
};

export default SignupInput;
