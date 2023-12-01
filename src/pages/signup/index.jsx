import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import SignupInput from "../components/signup";
import Loading from "../components/loading";

const Signup = () => {
  const router = useRouter();
  const [trans, setTrans] = useState("");
  const [isLoading, setIsLoading] = useState("hidden");
  const goSetup = () => {
    setTimeout(() => {
      router.push("../setup");
    }, 5000);
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="lg:w-1/2 w-3/4 bg-white flex flex-col justify-center items-center">
        <SignupInput
          setTrans={setTrans}
          setIsLoading={setIsLoading}
          goSetup={goSetup}
        />
      </div>
      <Loading isLoading={isLoading} />
      <div
        className={`lg:w-1/2 w-1/4 bg-second transition-all ease-in-out duration-300 ${trans}`}
      ></div>
    </div>
  );
};

export default Signup;
