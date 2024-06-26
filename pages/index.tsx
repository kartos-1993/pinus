import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import heroImage from "../public/assets/hero.jpeg";

import { CormorantGaramond, source_sans_3 } from "./_app";

import Header from "../components/Header";
import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "@/components/Carousel/Carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const slides = [
  { src: "/assets/slide/slide1.jpeg", alt: "Slide 1" },
  { src: "/assets/slide/slide2.jpeg", alt: "Slide 2" },
  { src: "/assets/slide/slide3.jpeg", alt: "Slide 3" },
  { src: "/assets/slide/slide4.jpeg", alt: "Slide 4" },
  { src: "/assets/slide/slide5.jpeg", alt: "Slide 5" },
];

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
            className="z-20 absolute w-full text-white text-left text-4xl md:text-5xl lg:text-6xl px-4 font-mono font-light lg:text-center"
            initial={{ opacity: 0, top: "70%" }}
            animate={{ opacity: 1, top: "40%" }}
            // exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            A Serene Escape in the Heart of Nature
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

        <section className="py-12 px-6">
          <p className="text-3xl font-mono text-center font-normal">
            Escape to our tranquil hotel surrounded by pine forests for a
            memorable nature retreat. Perfect for romantic getaways or family
            vacations. Unwind and immerse yourself in serene beauty. We cannot
            wait to welcome you!
          </p>
        </section>
        <section className="py-10">
          <Image
            src={heroImage}
            height={700}
            width={600}
            className="pt-6 mb-16"
            alt="front"
          />
          <h1 className="text-4xl text-center mt-8 font-mono font-light">
            Welcome to Pinus Hotel
          </h1>
          <p className="text-xl font-sans text-center px-18 mt-10 font-thin px-4">
            Our dedicated staff is committed to ensuring your comfort and
            satisfaction. From the moment you enter, you’ll be welcomed with
            genuine warmth and attentiveness that adds an extra layer of delight
            to your dining experience.
          </p>
        </section>

        <section className=" text-center text-4xl font-normal py-12 px-2">
          <EmblaCarousel slides={slides} options={OPTIONS} />
        </section>
        <section className="py-10">
          <h1 className="text-4xl text-center mt-8 font-mono font-light">
            Embrace Tranquility Amidst Majestic Pine Forests
          </h1>
          <p className="text-xl font-sans text-center px-18 mt-10 font-thin px-4">
            Bask in the breathtaking views of rolling hills, lush pine forests,
            and distant snow-capped peaks, all from the comfort of your private
            sanctuary. Let nature&rsquo;s splendor rejuvenate your spirit and
            soothe your soul.
          </p>
        </section>
      </main>

      <footer className="footer"></footer>
    </>
  );
}
// https://dev.to/dancrtis/ci-cd-pipeline-with-netlify-and-github-actions-bcm
