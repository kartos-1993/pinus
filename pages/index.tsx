import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import heroImage from "../public/image-desktop1.png";

import Reveal from "../components/Reveal";
import { CormorantGaramond, source_sans_3 } from "./_app";

import Example from "../components/HorizontalCaraousel";
import Header from "../components/Header";
import first from "../public/1.jpg";
import second from "../public/2.jpg";
import third from "../public/3.jpg";
import forth from "../public/4.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pinus Hotel</title>
        <meta name="description" content="Hotel Food Travel " />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main
        className={`w-full h-screen overflow-x-hidden ${source_sans_3.variable} ${CormorantGaramond.variable}`}
      >
        <Header />

        {/**Hero section start */}
        <section className="h-screen flex relative">
          <motion.div
            className="h-full w-full bg-white z-10 absolute "
            initial={{ scale: 2 }}
            animate={{ x: "100%", scale: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            // exit={{ x: "100%", scale: 0 }}
          ></motion.div>
          <motion.div
            className="z-20 flex justify-center w-full text-white"
            initial={{ opacity: 0, y: "70%" }}
            animate={{ opacity: 1, y: "40%" }}
            // exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div className="section-text1 absolute text-4xl md:text-5xl lg:text-6xl px-4 font-mono font-light">
              A Serene Escape in the Heart of Nature
            </div>
          </motion.div>
          <motion.div
            className="absolute w-full h-screen flex justify-center overflow-hidden "
            initial={{ y: -100, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -100 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <picture>
              <source media="(max-width: 636px)" srcSet="/image-mobile.jpg" />
              <source media="(max-width: 1055px)" srcSet="/image-tablet.png" />
              <img src="/image-desktop.png" alt="image" />
            </picture>
          </motion.div>
        </section>
        {/**Hero section end */}

        <section className="p-8 h-4/6 flex justify-center flex-col">
          <Reveal>
            <h1 className="text-4xl text-center mb-4">
              Welcome to Pinus Hotel
            </h1>
          </Reveal>

          <Reveal>
            <div className="mb-4">
              <p className="text-lg text-center px-4 font-sans font-extralight">
                Escape to our tranquil hotel surrounded by pine forests for a
                memorable nature retreat. Perfect for romantic getaways or
                family vacations. Unwind and immerse yourself in serene beauty.
                We cannot wait to welcome you!
              </p>
            </div>
          </Reveal>
        </section>
        <section className="">
          <Reveal>
            <div className="p-4">
              <Image alt="a" src={first} width={500} height={900} />
            </div>
          </Reveal>
          <Reveal>
            <div className="p-4">
              <Image alt="a" src={second} width={500} height={900} />
            </div>
          </Reveal>
          <Reveal>
            <div className="p-4">
              <Image alt="a" src={third} width={500} height={900} />
            </div>
          </Reveal>
          <Reveal>
            <div className="p-4">
              <Image alt="a" src={forth} width={500} height={900} />
            </div>
          </Reveal>{" "}
          <Reveal>
            <div style={source_sans_3.style}></div>
          </Reveal>
        </section>
      </main>

      <footer className="footer"></footer>
    </>
  );
}
// https://dev.to/dancrtis/ci-cd-pipeline-with-netlify-and-github-actions-bcm
