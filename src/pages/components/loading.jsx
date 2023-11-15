import React from "react";

import Loader from "./loader";
import Logo from "./logo";

const Loading = ({ isLoading }) => {
  return (
    <div
      className={`${isLoading} flex flex-col justify-center items-center gap-5`}
    >
      <Logo />
      <Loader />
      <p>Түр хүлээнэ үү...</p>
    </div>
  );
};

export default Loading;
