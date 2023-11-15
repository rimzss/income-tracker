import React, { useState } from "react";

import Logo from "../components/logo";
import Currency from "../components/currency";
import Cash from "../components/cash";
import Finish from "../components/finish";

const Setup = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center mt-16">
      <Logo />
      <ul className="steps mt-16 w-1/3">
        <li className={`step step-primary`}>Currency</li>
        <li
          className={`step ${step === 2 && "step-primary"} ${
            step === 3 && "step-primary"
          }`}
        >
          Balance
        </li>
        <li className={`step ${step === 3 && "step-primary"}`}>Finish</li>
      </ul>
      {step === 1 && <Currency nextStep={nextStep} />}
      {step === 2 && <Cash nextStep={nextStep} />}
      {step === 3 && <Finish nextStep={nextStep} />}
    </div>
  );
};

export default Setup;
