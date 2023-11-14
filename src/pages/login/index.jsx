import React from "react";

import LoginInput from "../components/login";

const Login = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <LoginInput />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
};

export default Login;
