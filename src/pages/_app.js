import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const userEmail = "";
  return (
    <Component
      {...pageProps}
      open={open}
      setOpen={setOpen}
      userEmail={userEmail}
    />
  );
}
