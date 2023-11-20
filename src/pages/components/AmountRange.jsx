import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const AmountRange = () => {
  function valuetext(value) {
    return `${value}₮`;
  }
  const [value, setValue] = useState([0, 1000]);
  const [firstValue, setFirstValue] = useState(0);
  const [secondtValue, setSecondValue] = useState(1000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFirstValue(newValue[0]);
    setSecondValue(newValue[1]);
  };
  return (
    <div>
      <div className="flex gap-7 mb-5">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-1/2 bg-base"
          value={firstValue}
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-1/2 bg-base"
          value={secondtValue}
        />
      </div>

      <Slider
        max={1000}
        getAriaLabel={() => "Amount Range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className="flex justify-between">
        <span className="-ml-2">{firstValue}</span>
        <span className="-mr-3">{secondtValue}</span>
      </div>
    </div>
  );
};

export default AmountRange;
