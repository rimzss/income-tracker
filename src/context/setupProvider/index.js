import React, { useState, createContext, useContext } from "react";
import { testContext } from "../Provider";

export const setContext = createContext();

const SetupProvider = ({ children }) => {
  const { userId } = useContext(testContext);

  let [setupObject, setSetupObject] = useState({ unit: "", value: "", id: "" });
  const handleChangeEdit = (e) => {
    console.log(e.target.value);
    setSetupObject({ ...setupObject, [e.target.name]: e.target.value });
  };

  const editUser = async () => {
    console.log(userId);
    setupObject.id = userId;
    try {
      console.log(setupObject);
      const { message } = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/users/edit/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(setupObject),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <setContext.Provider
      value={{ setupObject, setSetupObject, handleChangeEdit, editUser }}
    >
      {children}
    </setContext.Provider>
  );
};

export default SetupProvider;
