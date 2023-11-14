import React from "react";

import SignupInput from "../components/signup";

const Signup = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <SignupInput />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
};

export default Signup;
