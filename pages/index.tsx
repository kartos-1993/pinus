import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import heroImage from "../public/assets/hero.jpeg";

import { CormorantGaramond, source_sans_3 } from "./_app";

import Header from "../components/Header";
import { EmblaOptionsType } from "embla-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import EmblaCarousel from "@/components/Carousel/Carousel";
import { Check, IndianRupee } from "lucide-react";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const introSlides = [
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
            className="z-20 absolute text-left lg:text-center text-white text-3xl  md:text-5xl lg:text-6xl px-4 font-mono font-light "
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
        {/**Hero section end */}

        <section className="py-20 bg-green-50 ">
          <h2 className="text-4xl text-center font-mono font-bold mb-4">
            Luxurious Suites
          </h2>
          <p className="text-xl text-center font-sans font-light mb-12 max-w-2xl mx-auto">
            {/* Escape to our tranquil hotel surrounded by pine forests for a
            memorable nature retreat. Perfect for romantic getaways or family
            vacations. Unwind and immerse yourself in serene beauty. We cannot
            wait to welcome you! */}
            Experience ultimate comfort in our meticulously maintained suites,
            where luxury meets hygiene excellence
          </p>
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg shadow-lg font-sans">
                <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/1.jpg')]"></div>
                <div className="p-8">
                  <h3 className="font-extrabold font-mono text-2xl mb-2">
                    Deluxe Mountain View Suite
                  </h3>
                  <ul className="flex flex-col gap-2 text-lg mb-4">
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Panoramic Mountain Views
                    </li>
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Ultra-Clean Bathroom
                    </li>
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Bathroom King Size Bed
                    </li>
                  </ul>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1 text-2xl o">
                      <IndianRupee size={15} />
                      250 per night
                    </span>
                    <button
                      type="button"
                      className="rounded-lg bg-amber-600 text-white py-2 px-6"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg font-sans">
                <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/2.jpg')]"></div>
                <div className="p-8">
                  <h3 className="font-extrabold font-mono text-2xl mb-2">
                    Deluxe Mountain View Suite
                  </h3>
                  <ul className="flex flex-col gap-2 text-lg mb-4">
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Panoramic Mountain Views
                    </li>
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Ultra-Clean Bathroom
                    </li>
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Bathroom King Size Bed
                    </li>
                  </ul>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1 text-2xl o">
                      <IndianRupee size={15} />
                      250 per night
                    </span>
                    <button
                      type="button"
                      className="rounded-lg bg-amber-600 text-white py-2 px-6"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg font-sans">
                <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/3.jpg')]"></div>
                <div className="p-8">
                  <h3 className="font-extrabold font-mono text-2xl mb-2">
                    Deluxe Mountain View Suite
                  </h3>
                  <ul className="flex flex-col gap-2 text-lg mb-4">
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Panoramic Mountain Views
                    </li>
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Ultra-Clean Bathroom
                    </li>
                    <li className="flex items-center gap-1">
                      <Check size={15} /> Bathroom King Size Bed
                    </li>
                  </ul>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1 text-2xl o">
                      <IndianRupee size={15} />
                      250 per night
                    </span>
                    <button
                      type="button"
                      className="rounded-lg bg-amber-600 text-white py-2 px-6"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-2">
          {/* <EmblaCarousel slides={introSlides} options={OPTIONS} /> */}
        </section>
      </main>

      <footer className="footer"></footer>
    </>
  );
}
// https://dev.to/dancrtis/ci-cd-pipeline-with-netlify-and-github-actions-bcm
