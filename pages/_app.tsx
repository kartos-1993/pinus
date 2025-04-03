import "../styles/Home.scss";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";
import Head from "next/head";

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
      {/* Global Head - Only non-page-specific tags */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Google Analytics */}
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
