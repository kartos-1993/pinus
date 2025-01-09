import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex relative">
      <motion.div
        className="h-full w-full bg-white z-10 absolute "
        initial={{ scale: 2 }}
        animate={{ x: "100%", scale: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        // exit={{ x: "100%", scale: 0 }}
      ></motion.div>
      <motion.div
        className="z-10 absolute text-left lg:text-center text-white text-3xl  md:text-5xl lg:text-6xl px-4 font-mono font-light "
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
  );
};

export default Hero;
