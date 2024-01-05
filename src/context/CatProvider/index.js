import React, { useState, createContext, useContext } from "react";
import { testContext } from "../Provider";

export const catContext = createContext();

const CatProvider = ({ children }) => {
  const { userId } = useContext(testContext);

  const [categoryArr, setCategoryArr] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getCategorys = async () => {
    try {
      const { categorys } = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/category`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        }
      ).then((res) => res.json());
      setCategoryArr(categorys);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };
  return (
    <catContext.Provider
      value={{
        categoryArr,
        refresh,
        setRefresh,
        isLoaded,
        setIsLoaded,
        getCategorys,
      }}
    >
      {children}
    </catContext.Provider>
  );
};

export default CatProvider;
