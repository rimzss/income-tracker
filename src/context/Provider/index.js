import React, { useState, createContext, use } from "react";
import { useRouter } from "next/router";

export const testContext = createContext();

const Provider = ({ children }) => {
  // =========SAVE USER INFO=========
  const [userName, setUserName] = useState("");
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
      console.log(userInfo);
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
      const { id } = await fetch(
        "http://localhost:8008/auth/users/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpData),
        }
      ).then((res) => res.json());
      console.log("ID!!!!!", id)
      setUserId(id)
      goSetup();
    } catch (error) {
      console.log(error);
    }
  };

 let [setupObject, setSetupObject] = useState({unit:"",value:"", id:""})
 const handleChangeEdit = (e) => {
  console.log(e.target.value)
  setSetupObject({ ...setupObject, [e.target.name]: e.target.value });
};

const editUser = async ()=>{
  console.log(userId)
  setupObject.id=userId
  try{
    console.log(setupObject)
    const {message} = await fetch("http://localhost:8008/auth/users/edit/",{
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
      },body: JSON.stringify(setupObject),
    })
  }catch(error){
    console.log(error)
  }
}


  const handleChangeSignUp = (e) => {
    console.log("INPUTING", e.target.value);
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // ==========CATEGORY FUNCTIONS=============
  const [categoryArr, setCategoryArr] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getCategorys = async () => {
    try {
      const { categorys } = await fetch("http://localhost:8008/api/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      }).then((res) => res.json());
      setIsLoaded(true);
      setCategoryArr(categorys);
    } catch (error) {
      console.log(error);
    }
  };

  // ==========TRANSACTION FUNCTIONS==========
  let [transactionRecord, setTransactionRecord] = useState({
    userId: userId,
    name: "",
    amount: 0,
    transaction_type: "EXP",
    description: "",
    currency_type: "MNT",
    category_id: "",
  });
  const handleChangeRecords = (e) => {
    setTransactionRecord({
      ...transactionRecord,
      [e.target.name]: e.target.value,
    });
  };

  const addRecord = async () => {
    transactionRecord.userId = userId;
    try {
      const { message } = await fetch(
        "http://localhost:8008/api/transaction/create",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(transactionRecord),
        }
      );
      console.log("ADD RECORD FUNTION WORKING");
    } catch (error) {}
  };

  let [transactionList, setTransactionList] = useState(null);
  const getTrans = async () => {
    try {
      const { transactions } = await fetch(
        "http://localhost:8008/api/transaction",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userId),
        }
      );
      setTransactionList(transactions);
    } catch (error) {
      console.log(error);
    }
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
        handleChangeRecords,
        transactionRecord,
        addRecord,
        setTransactionRecord,
        categoryArr,
        getCategorys,
        refresh,
        setRefresh,
        isLoaded,
        getTrans,
        transactionList,
        setupObject,
        setSetupObject,
        handleChangeEdit,
        editUser,
      }}
    >
      {children}
    </testContext.Provider>
  );
};

export default Provider;
