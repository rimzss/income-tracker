import React, { useState } from "react";
import Link from "next/link";

import Logo from "./logo";

const LoginInput = ({ setTrans, setIsLoading, goDashboard }) => {
  const [opacity, setOpacity] = useState("");
  return (
    <div
      className={`flex flex-col items-center 2xl:w-1/2 w-2/3 transition-all duration-200 ${opacity}`}
    >
      <Logo />
      <h2 className="text-3xl font-bold text-black mt-10">Welcome Back</h2>
      <p className="mb-7 text-xl font-light mt-3">
        Welcome back, Please enter your details
      </p>
      <div className="flex flex-col gap-4 w-full">
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
        <button
          onClick={() => {
            setTrans("translate-x-full");
            setOpacity("opacity-0");
            setTimeout(() => {
              setOpacity("opacity-0 hidden");
              setIsLoading("block");
            }, 400);
            goDashboard();
          }}
          className="btn bg-second border-0 text-white h-10 w-full rounded-2xl hover:bg-blue-500"
        >
          Log in
        </button>
      </div>
      <h3 className="font-medium text-black mt-10">
        Don't have account?{" "}
        <span className="text-second">
          <Link href="../signup">Sign up</Link>
        </span>
      </h3>
    </div>
  );
};

export default LoginInput;
