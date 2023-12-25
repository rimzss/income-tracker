import React, { useState, createContext } from "react";
import { useRouter } from "next/router";

export const testContext = createContext();

const Provider = ({ children }) => {
  // =========SAVE USER INFO=========
  let [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userCash, setUserCash] = useState(0);

  // =========LOGIN FUNCTION=========
  const router = useRouter();
  const [opacity, setOpacity] = useState("");
  const [loginTry, setLoginTry] = useState({
    logEmail: "",
    logPassword: "",
  });
  const [warningMessage, setWarningMessage] = useState();
  const [trans, setTrans] = useState("");
  const [isLoading, setIsLoading] = useState("hidden");
  const handleChange = (e) => {
    console.log("WRITING", e.target.name, e.target.value);
    setLoginTry({ ...loginTry, [e.target.name]: e.target.value });
  };
  const logout = () => {
    setUserName(null);
  };

  const goDashboard = async () => {
    try {
      const { userInfo } = await fetch("http://localhost:8008/auth/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginTry),
      }).then((res) => res.json());
      setUserName(userInfo[0].name);
      setUserId(userInfo[0].id);
      setUserCash(userInfo[0].value);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      router.push("../");
    }, 2000);
  };
  const getLoginInfo = async () => {
    try {
      const { message } = await fetch(
        "http://localhost:8008/auth/users/signin/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginTry),
        }
      ).then((res) => res.json());
      setWarningMessage(message);
      if (message === "SUCCESS") {
        setTrans("translate-x-full");
        setOpacity("opacity-0");
        setTimeout(() => {
          setOpacity("opacity-0 hidden");
          setIsLoading("block");
        }, 400);
        goDashboard();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   ======SIGN UP FUNCTION=======
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    value: 0,
    unit: "MNT",
  });
  const goSetup = () => {
    setTimeout(() => {
      router.push("../setup");
    }, 5000);
  };
  const addUser = async () => {
    try {
      const { id } = await fetch("http://localhost:8008/auth/users/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      }).then((res) => res.json());
      console.log("ID!!!!!", id);
      setUserId(id);
      goSetup();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSignUp = (e) => {
    console.log("INPUTING", e.target.value);
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  return (
    <testContext.Provider
      value={{
        opacity,
        warningMessage,
        handleChange,
        getLoginInfo,
        trans,
        isLoading,
        loginTry,
        handleChangeSignUp,
        addUser,
        userName,
        goSetup,
        userId,
        userCash,
        logout,
        setUserCash,
      }}
    >
      {children}
    </testContext.Provider>
  );
};

export default Provider;
