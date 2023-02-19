import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
          className="h-full w-full bg-white z-10 absolute"
          initial={{ scale: 2 }}
          animate={{ x: "100%", scale: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        ></motion.div>
        <motion.header
          className="header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <nav>
            <div className="logo-container">
              <svg height="50" width="200">
                <text x="15" y="50" fill="white">
                  Pinus
                </text>
              </svg>
            </div>

            <ul className="flex text-white">
              <li>menu</li>
              <li>packages</li>
              <li>contact</li>
            </ul>
          </nav>
        </motion.header>
        <section className="hero">
          <div className="container">
            <motion.div
              className="text-wrapper"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              <h1 className="section-text1">
                <Image
                  className=""
                  priority
                  src="/assets/pinus_logo_png.png"
                  alt="pinus hotel"
                  // width={2578}
                  height={1024}
                 width={300}
                />
              </h1>
            </motion.div>

            <motion.div
              className="img_container"
              initial={{ y: -100, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Image
                className="hero-image"
                priority
                src="/hero1.webp"
                alt="pinus hotel"
                // width={2578}
                // height={1879}
                width={3072}
                height={2304}
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
