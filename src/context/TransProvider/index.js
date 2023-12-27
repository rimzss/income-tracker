import React, { useState, createContext, useContext } from "react";
import { testContext } from "../Provider";

export const transContext = createContext();

const TransProvider = ({ children }) => {
  const { userId, userCash, setUserCash } = useContext(testContext);

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
  let [transactionListLimit, setTransactionListLimit] = useState();
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
      setTransactionList(transactionss);
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
      setTransactionListLimit(transactionss.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const [sumTrans, setSumTrans] = useState([]);
  const sumTransGet = async () => {
    try {
      const { data } = await fetch(
        "http://localhost:8008/api/transaction/sum/" + userId
      ).then((res) => res.json());
      setSumTrans(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const updateCash = async () => {
  //   try {
  //     const { updatedValue } = await fetch(
  //       "http://localhost:8008/api/transaction/sum",
  //       {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ userId, userCash }),
  //       }
  //     ).then((res) => res.json());
  //     setUserCash(updatedValue);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [monthSums, setMonthSum] = useState();
  const [isMonthDone, setIsMonthDone] = useState(false);
  const monthSum = async () => {
    try {
      const { data } = await fetch(
        "http://localhost:8008/api/transaction/monthsum/" + userId
      ).then((res) => res.json());
      setMonthSum(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsMonthDone(!isMonthDone);
    }
  };
  const [catSums, setCatSums] = useState();
  const catSum = async () => {
    try {
      const { sum } = await fetch(
        "http://localhost:8008/api/transaction/catsum/" + userId
      ).then((res) => res.json());
      setCatSums(sum);
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
        // updateCash,
        transactionListLimit,
        monthSum,
        monthSums,
        catSums,
        catSum,
      }}
    >
      {children}
    </transContext.Provider>
  );
};

export default TransProvider;
