"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TextReveal } from "../ui/text-reveal";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="hero"
      ref={targetRef}
      className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* Background Image Container with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{ y, scale, opacity }}
      >
        {/* Desktop Image */}
        <div className="hidden lg:block w-full h-full relative">
          <Image
            src="/image-desktop.png"
            alt="Serene nature escape"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
            style={{ filter: "brightness(0.85)" }}
          />
        </div>

        {/* Tablet Image */}
        <div className="hidden md:block lg:hidden w-full h-full relative">
          <Image
            src="/image-tablet.png"
            alt="Serene nature escape"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
            style={{ filter: "brightness(0.85)" }}
          />
        </div>

        {/* Mobile Image */}
        <div className="md:hidden w-full h-full relative">
          <Image
            src="/image-mobile.png"
            alt="Serene nature escape"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
            style={{ filter: "brightness(0.85)" }}
          />
        </div>

        {/* Gradient Overlay for text readability - more subtle now */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <div className="mb-8 max-w-5xl">
          <div className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium text-white tracking-tight leading-tight mix-blend-overlay">
            <TextReveal type="word" stagger={0.08} delay={0.5} duration={1}>
              A Serene Escape in the Heart of Nature
            </TextReveal>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        >
          <p className="text-white/90 text-sm md:text-base font-mono tracking-widest uppercase mb-10">
            Pinus Resort & Spa
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-white/70 text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
