import React, { useContext, useState } from "react";
import Link from "next/link";

import Logo from "./logo";
import { testContext } from "@/context/Provider";

const SignupInput = ({ setIsLoading, goSetup }) => {
  // const [signUpData, setSignUpData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   value: 0,
  //   unit: 0,
  // });
  // const addUser = async () => {
  //   try {
  //     const { message } = await fetch(
  //       "http://localhost:8008/auth/users/signup/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(signUpData),
  //       }
  //     );
  //     goSetup();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleChange = (e) => {
  //   console.log("INPUTING", e.target.value);
  //   setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  // };
  const { handleChangeSignUp, addUser } = useContext(testContext);
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
          onChange={handleChangeSignUp}
        />
        <input
          name="email"
          className="input input-bordered bg-white"
          type="text"
          placeholder="Email"
          onChange={handleChangeSignUp}
        />
        <input
          name="password"
          className="input input-bordered bg-white"
          type="Password"
          placeholder="Password"
          onChange={handleChangeSignUp}
        />
        <input
          className="input input-bordered bg-white"
          type="Password"
          placeholder="Re-password"
          onChange={handleChangeSignUp}
        />
        <button
          onClick={() => {
            // setTrans("translate-x-full");
            // setTimeout(() => {
            //   setOpacity("opacity-0");
            //   setOpacity("opacity-0 hidden");
            //   setIsLoading("block");
            // }, 400);
            addUser();
          }}
          className="btn bg-second border-0 text-white h-10 w-full rounded-2xl hover:bg-blue-500"
        >
          Sign up
        </button>
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
