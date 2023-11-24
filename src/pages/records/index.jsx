import React, { useState } from "react";

import Nav from "../components/Nav";
import RecordsMenu from "../components/RecordsMenu";
import RecordList from "../components/RecordList";

const Records = ({ open, setOpen }) => {
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
        />
        <RecordList />
      </article>
    </main>
  );
};

export default Records;
