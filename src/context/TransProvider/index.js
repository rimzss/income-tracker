import React, { useState, createContext, useContext } from "react";
import { testContext } from "../Provider";

export const transContext = createContext();

const TransProvider = ({ children }) => {
  const { userId } = useContext(testContext);

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

  const [sumTrans, setSumTrans] = useState([]);
  const sumTransGet = async () => {
    try {
      const { sum } = await fetch("http://localhost:8008/api/transaction/sum", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      }).then((res) => res.json());
      setSumTrans(sum);
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
      }}
    >
      {children}
    </transContext.Provider>
  );
};

export default TransProvider;
