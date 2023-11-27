import React, { useState } from "react";
import Link from "next/link";

import Logo from "./logo";

const SignupInput = ({ setTrans, setIsLoading }) => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    createdAt: 2023 - 11 - 27,
    updatedAt: 2023 - 11 - 27,
  });
  const addUser = async () => {
    const { message } = await fetch("http://localhost:8008/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });
  };
  const handleChange = (e) => {
    console.log("INPUTING", e.target.value);
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
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
          name="name"
          className="input input-bordered bg-white"
          type="text"
          placeholder="Name"
          onChange={() => handleChange()}
        />
        <input
          name="email"
          className="input input-bordered bg-white"
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          className="input input-bordered bg-white"
          type="Password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          className="input input-bordered bg-white"
          type="Password"
          placeholder="Re-password"
          onChange={handleChange}
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
              addUser();
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
