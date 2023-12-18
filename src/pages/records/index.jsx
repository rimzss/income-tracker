import React, { useContext, useEffect, useState } from "react";

import Nav from "../components/Nav";
import RecordsMenu from "../components/RecordsMenu";
import RecordList from "../components/RecordList";
import { testContext } from "@/context/Provider";
import { useRouter } from "next/router";
import { catContext } from "@/context/CatProvider";

const Records = ({ open, setOpen }) => {
  const { userName, userId } = useContext(testContext);

  const { categoryArr, getCategorys, refresh, setRefresh, isLoaded } =
    useContext(catContext);

  useEffect(() => {
    getCategorys();
  }, [refresh]);

  const router = useRouter();
  useEffect(() => {
    if (userName === "") {
      router.push("./login");
    }
  }, []);
  if (userName === "") {
    return null;
  }

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
