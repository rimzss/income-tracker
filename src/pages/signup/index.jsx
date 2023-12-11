import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import SignupInput from "../components/signup";
import Loading from "../components/loading";
import { testContext } from "@/context/Provider";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState("hidden");
  const { goSetup } = useContext(testContext);
  return (
    <div className="h-screen w-screen flex">
      <div className="lg:w-1/2 w-3/4 bg-white flex flex-col justify-center items-center">
        <SignupInput setIsLoading={setIsLoading} goSetup={goSetup} />
      </div>
      <Loading isLoading={isLoading} />
      <div
        className={`lg:w-1/2 w-1/4 bg-second transition-all ease-in-out duration-300`}
      ></div>
    </div>
  );
};

export default Signup;
