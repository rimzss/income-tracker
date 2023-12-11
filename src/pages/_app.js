import Provider from "@/context/Provider";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const userEmail = "";
  return (
    <Provider>
      <Component
        {...pageProps}
        open={open}
        setOpen={setOpen}
        userEmail={userEmail}
      />
    </Provider>
  );
}
