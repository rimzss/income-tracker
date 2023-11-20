import React from "react";

import Nav from "../components/Nav";
import RecordsMenu from "../components/RecordsMenu";
import RecordList from "../components/RecordList";

const Records = () => {
  return (
    <main className="bg-base w-screen">
      <Nav />
      <article className="px-20 py-5 flex gap-10">
        <RecordsMenu />
        <RecordList />
      </article>
    </main>
  );
};

export default Records;
