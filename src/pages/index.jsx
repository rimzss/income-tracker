import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import Loader from "./components/loader";
import Nav from "./components/Nav";
import Top from "./components/top";
import LastRecords from "./components/LastRecords";
import Chart1 from "./components/chart1";
import Chart2 from "./components/chart2";

export default function Home() {
  return (
    <main className="bg-base w-screen lg:h-screen">
      <Nav />
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
