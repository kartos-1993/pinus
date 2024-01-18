import "../styles/Home.scss";
import "../styles/globals.css";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Source_Sans_3 } from "next/font/google";

export const source_sans_3 = Source_Sans_3({ subsets: ["latin"] });

function MyApp({ Component, pageProps, router }) {
  console.log("font", source_sans_3);
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}

export default MyApp;
