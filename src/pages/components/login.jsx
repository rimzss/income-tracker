import React, { useState } from "react";
import Link from "next/link";

import Logo from "./logo";

const LoginInput = ({ setTrans, setIsLoading, goDashboard, userEmail }) => {
  const [opacity, setOpacity] = useState("");
  const [loginTry, setLoginTry] = useState({
    logEmail: "",
    logPassword: "",
  });
  const handleChange = (e) => {
    console.log("WRITING", e.target.name, e.target.value);
    setLoginTry({ ...loginTry, [e.target.name]: e.target.value });
    userEmail = loginTry.logEmail;
  };
  const [warningMessage, setWarningMessage] = useState();
  const getLoginInfo = async () => {
    try {
      const { message } = await fetch(
        "http://localhost:8008/auth/users/signin/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginTry),
        }
      ).then((res) => res.json());
      setWarningMessage(message);
      if (message === "SUCCESS") {
        setTrans("translate-x-full");
        setOpacity("opacity-0");
        setTimeout(() => {
          setOpacity("opacity-0 hidden");
          setIsLoading("block");
        }, 400);
        goDashboard();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          name="logEmail"
          onChange={handleChange}
          className="input input-bordered bg-white"
          type="text"
          placeholder="Email"
        />
        <input
          name="logPassword"
          onChange={handleChange}
          className="input input-bordered bg-white"
          type="Password"
          placeholder="Password"
        />
        <p className="text-red-500">{warningMessage}</p>
        <button
          onClick={() => {
            getLoginInfo();
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
