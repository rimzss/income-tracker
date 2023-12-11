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

export default function Home({ open, setOpen }) {
  const { userName } = useContext(testContext);
  const router = useRouter();

  useEffect(() => {
    if (userName === "") {
      router.push("./login");
    }
  }, []);
  if (userName === "") {
    return null;
  }

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
