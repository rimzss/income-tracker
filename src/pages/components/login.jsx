import React from "react";
import Link from "next/link";

import Logo from "./logo";

const LoginInput = () => {
  return (
    <div className="flex flex-col items-center w-1/2">
      <Logo />
      <h2 className="text-xl font-bold text-black mt-10">Welcome Back</h2>
      <p className="font-medium mb-7">
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
        <button className="btn bg-second border-0 text-white h-10 w-full rounded-2xl hover:bg-blue-500">
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
