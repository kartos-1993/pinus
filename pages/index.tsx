import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import heroImage from "../public/assets/hero.jpeg";

import { CormorantGaramond, source_sans_3 } from "./_app";

import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Suites from "@/components/sections/suites";
import Dining from "@/components/sections/dining";
import Conference from "@/components/sections/conference";
import Activites from "@/components/sections/activites";
import Testimonials from "@/components/sections/testimonials";
import Location from "@/components/sections/location";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main
        className={` relative ${
          isOpen ? "overflow-hidden" : ""
        }  w-full h-screen  ${source_sans_3.variable} ${
          CormorantGaramond.variable
        }`}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero />
        <Dining />
        <Suites />
        <Conference />
        <Activites />
        <Testimonials />
        <Location />
        <Footer />
      </main>
    </>
  );
}
// https://dev.to/dancrtis/ci-cd-pipeline-with-netlify-and-github-actions-bcm
