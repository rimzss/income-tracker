import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import LoginInput from "../components/login";
import Loading from "../components/loading";
import { testContext } from "@/context/Provider";

const Login = () => {
  // const [trans, setTrans] = useState("");
  // const [isLoading, setIsLoading] = useState("hidden");

  const { trans, isLoading, goDashboard } = useContext(testContext);

  return (
    <div className="h-screen w-screen flex justify-between overflow-hidden bg-white">
      <div className="lg:w-1/2 w-3/4 bg-white flex flex-col justify-center items-center">
        <LoginInput
        // setTrans={setTrans}
        // setIsLoading={setIsLoading}
        />
      </div>
      <Loading isLoading={isLoading} />
      <div
        className={`lg:w-1/2 w-1/4 bg-second transition-all ease-in-out duration-300 ${trans}`}
      ></div>
    </div>
  );
};

export default Login;
