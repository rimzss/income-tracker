import React, { useEffect, useState } from "react";

import Nav from "../components/Nav";
import RecordsMenu from "../components/RecordsMenu";
import RecordList from "../components/RecordList";

const Records = ({ open, setOpen }) => {
  const [refresh, setRefresh] = useState(false);
  const [categoryArr, setCategoryArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getCategorys = async () => {
    try {
      const { categorys } = await fetch(
        "http://localhost:8008/api/category"
      ).then((res) => res.json());
      setCategoryArr(categorys);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategorys();
  }, [refresh]);

  const [categoryOpen, setCategoryOpen] = useState(false);
  return (
    <main className="bg-base w-screen">
      <Nav open={open} setOpen={setOpen} />
      <article className="px-20 py-5 flex gap-10">
        <RecordsMenu
          open={open}
          setOpen={setOpen}
          categoryOpen={categoryOpen}
          setCategoryOpen={setCategoryOpen}
          categoryArr={categoryArr}
          setRefresh={setRefresh}
          refresh={refresh}
          isLoaded={isLoaded}
        />
        <RecordList />
      </article>
    </main>
  );
};

export default Records;
