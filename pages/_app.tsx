import "../styles/Home.scss";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import {
  Source_Sans_3,
  Cormorant_Garamond,
  Marcellus,
  Jost,
} from "next/font/google";
import "../styles/embla.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const source_sans_3 = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-source_sans_3",
});

export const CormorantGaramond = Marcellus({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
  variable: "--font-comorant_garamond",
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag?.("config", GA_MEASUREMENT_ID!, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [GA_MEASUREMENT_ID, router.events]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
