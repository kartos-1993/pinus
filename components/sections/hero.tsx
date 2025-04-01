import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen flex relative overflow-hidden">
      {/* White overlay animation */}
      <motion.div
        className="h-full w-full bg-white z-10 absolute"
        initial={{ scale: 2 }}
        animate={{ x: "100%", scale: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* Text animation */}
      <motion.div
        className="z-20 absolute text-center lg:text-center text-white text-4xl md:text-5xl lg:text-6xl px-4 font-mono font-medium w-full"
        style={{ top: "40%" }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      >
        A Serene Escape in the Heart of Nature
      </motion.div>

      {/* Background image animation */}
      <motion.div
        className="absolute w-full h-full"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="hidden lg:block">
          <Image
            src="/image-desktop.png"
            alt="Serene nature escape"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image
            src="/image-tablet.png"
            alt="Serene nature escape"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="md:hidden">
          <Image
            src="/image-mobile.jpg"
            alt="Serene nature escape"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
