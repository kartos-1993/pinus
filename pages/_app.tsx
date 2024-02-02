import "../styles/Home.scss";
import "../styles/globals.css";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Source_Sans_3, Cormorant_Garamond } from "next/font/google";

export const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source_sans_3",
});
export const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  style: "normal",
  weight: ["300"],
  variable: "--font-comorant_garamond",
});

function MyApp({ Component, pageProps, router }) {
  console.log("font", source_sans_3);
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}

export default MyApp;
