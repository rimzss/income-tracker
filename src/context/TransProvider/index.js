import React, { useState, createContext, useContext } from "react";
import { testContext } from "../Provider";

export const transContext = createContext();

const TransProvider = ({ children }) => {
  let { userId, userCash, setUserCash } = useContext(testContext);

  let [transactionRecord, setTransactionRecord] = useState({
    userId: userId,
    name: "",
    amount: 0,
    transaction_type: "EXP",
    description: "",
    currency_type: "MNT",
    category_id: "",
    updated_at: "",
  });
  const handleChangeRecords = (e) => {
    setTransactionRecord({
      ...transactionRecord,
      [e.target.name]: e.target.value,
    });
  };
  const [transRefresh, setTransRefresh] = useState(false);
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
      setTransRefresh(!transRefresh);
    } catch (error) {
      console.log(error);
    } finally {
      transactionRecord.transaction_type = "EXP";
    }
  };

  let [transactionList, setTransactionList] = useState();
  const getTrans = async () => {
    try {
      const { transactionss } = await fetch(
        "http://localhost:8008/api/transaction",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        }
      ).then((res) => res.json());
      setTransactionList(transactionss.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  const getTransLimit = async () => {
    try {
      const { transactionss } = await fetch(
        "http://localhost:8008/api/transaction/limit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        }
      ).then((res) => res.json());
      setTransactionList(transactionss.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const [sumTrans, setSumTrans] = useState([]);
  const sumTransGet = async () => {
    try {
      const { sum } = await fetch("http://localhost:8008/api/transaction/sum", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      }).then((res) => res.json());
      setSumTrans(sum);
      console.log("SUMMMM", sum);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCash = async () => {
    console.log("UPDATE CASH REQ WORKING", userCash)
    if(transactionRecord.transaction_type==="EXP"){
      userCash=userCash-transactionRecord.amount
    }else{
      userCash=userCash+Number(transactionRecord.amount)
    }
    try {
      const { updatedValue } = await fetch(
        "http://localhost:8008/api/transaction/updateCash",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({userCash, userId}),
        }
      ).then((res) => res.json());
      console.log("UPDATED VALUE", updatedValue[0])
      setUserCash(updatedValue[0].value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <transContext.Provider
      value={{
        transactionRecord,
        handleChangeRecords,
        addRecord,
        transactionList,
        setTransactionRecord,
        getTrans,
        sumTransGet,
        sumTrans,
        transRefresh,
        getTransLimit,
        updateCash,
      }}
    >
      {children}
    </transContext.Provider>
  );
};

export default TransProvider;
