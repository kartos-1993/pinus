import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import logo from "../public/assets/pinuslogopng.png";
import heroImage from "../public/image-desktop1.png";

import { Sidebar } from "../components/Sidebar/Sidebar";

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
      <main className=" w-full h-screen overflow-x-hidden">
        <motion.header
          className="header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <nav className=" pt-3">
            <div className="logo-container">
              <Image className="w-12" src={logo} alt="logo" priority={true} />
            </div>
            {/* <ul className="flex text-white">
              <li className="py-0 px-4">menu</li>
              <li className="py-0 px-4">packages</li>
              <li className="py-0 px-4">contact</li>
            </ul> */}
            <Sidebar />
          </nav>
        </motion.header>

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
            initial={{ opacity: 0, y: "90%" }}
            animate={{ opacity: 1, y: "40%" }}
            // exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div className="section-text1 absolute text-4xl md:text-5xl lg:text-6xl px-4 ">
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

        <section className="h-screen">
          <h1 className="">Welcome to Pinus Hotel</h1>
          <h2>A Serene Escape in the Heart of Nature</h2>
          <p>
            Escape to a world of natural beauty and tranquility at our hotel,
            surrounded by the serene splendor of nature. Our secluded location
            allows you to unwind and immerse yourself in the sights, sounds, and
            scents of the great outdoors. From verdant forests to flowing
            streams, our surroundings offer the perfect backdrop for your next
            adventure or peaceful retreat. Whether seeking a romantic getaway or
            a family vacation, our comfortable rooms and friendly staff will
            make your stay unforgettable. Come and experience the beauty and
            serenity of nature at our hotel. We t wait to welcome you!
          </p>
        </section>
      </main>

      <footer className="footer"></footer>
    </>
  );
}
// https://dev.to/dancrtis/ci-cd-pipeline-with-netlify-and-github-actions-bcm
