import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import Loader from "./components/loader";
import Nav from "./components/Nav";
import Top from "./components/top";
import LastRecords from "./components/LastRecords";
import Chart1 from "./components/chart1";
import Chart2 from "./components/chart2";
import { useContext, useEffect } from "react";
import { testContext } from "@/context/Provider";
import { transContext } from "@/context/TransProvider";

export default function Home({ open, setOpen }) {
  const { userName, userId, isLogout } = useContext(testContext);
  const { sumTransGet, sumTrans } = useContext(transContext);
  const router = useRouter();

  useEffect(() => {
    if (userName === "") {
      router.push("./login");
    }
    if (userName === null) {
      router.push("./login");
    }
  }, [userName]);

  if (userName === "") {
    return null;
  }

  useEffect(() => {
    sumTransGet();
  }, []);
  return (
    <main className="bg-base w-screen lg:h-screen">
      <Nav setOpen={setOpen} open={open} />
      <article className="px-20 py-5">
        <Top />
        <div className="lg:flex gap-5 justify-center items-center">
          <Chart1 />
          <Chart2 />
        </div>

        <LastRecords />
      </article>
    </main>
  );
}
