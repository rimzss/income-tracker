import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import Loader from "./components/loader";
import Nav from "./components/Nav";
import Top from "./components/top";

export default function Home() {
  return (
    <main className="bg-base w-screen h-screen">
      <Nav />
      <article className="px-20">
        <Top />
      </article>
    </main>
  );
}
