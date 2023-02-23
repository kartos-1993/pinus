import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import logo from "../public/assets/pinuslogosvg.svg";

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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main className="main">
        <motion.div
          className="h-full w-full bg-white z-10 absolute "
          initial={{ scale: 2 }}
          animate={{ x: "100%", scale: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          exit={{}}
        ></motion.div>
        <motion.header
          className="header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <nav>
            <div className="logo-container">
              <Image src={logo} alt="logo"  width={100}
              height ={100} priority/>
            </div>

            {/* <ul className="flex text-white">
              <li>menu</li>
              <li>packages</li>
              <li>contact</li>
            </ul> */}
          </nav>
        </motion.header>
        <section className="hero">
          <div className="container">
            <motion.div
              className="text-wrapper"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              <h1 className="section-text1 absolute">
                <Link href="/travel" className=" text-3xl">
                  Travel
                </Link>
                <Link href="/relax" className=" text-3xl">
                  Travel
                </Link>
                <Link href="/relax" className=" text-3xl">
                  Event
                </Link>
                {/* <Image
                  className=""
                  priority
                  src="/assets/e.svg"
                  alt="pinus hotel"
                  // width={2578}
                  height={1024}
                  width={300}
                /> */}
              </h1>
            </motion.div>

            <motion.div
              className="img_container"
              initial={{ y: -100, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -100, scale: 0.5 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Link href="/travel" className="absolute z-index">
                Travel
              </Link>
              <Image
                className="hero-image"
                priority
                src="/hero1.webp"
                alt="pinus hotel"
                // width={2578}
                // height={1879}
                width={1920}
                height={1080}
              />
            </motion.div>
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </section>
      </main>

      <footer className="footer"></footer>
    </>
  );
}
