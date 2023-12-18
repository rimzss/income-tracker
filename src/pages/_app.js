import Provider from "@/context/Provider";
import CatProvider from "@/context/CatProvider";
import "@/styles/globals.css";
import { useState } from "react";
import TransProvider from "@/context/TransProvider";
import SetupProvider from "@/context/setupProvider";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const userEmail = "";
  return (
    <Provider>
      <CatProvider>
        <TransProvider>
          <SetupProvider>
            <Component
              {...pageProps}
              open={open}
              setOpen={setOpen}
              userEmail={userEmail}
            />
          </SetupProvider>
        </TransProvider>
      </CatProvider>
    </Provider>
  );
}
