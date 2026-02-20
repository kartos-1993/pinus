"use client";

import { motion, useInView, Variants } from "framer-motion";
import React, { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string; // Additional classes for styling
  delay?: number; // Delay before animation starts (in seconds)
  direction?: "up" | "down" | "left" | "right" | "none"; // Animation direction
  amount?: "some" | "all" | number; // Viewport amount to trigger (0 to 1)
  once?: boolean; // Whether to animate only once
  duration?: number; // Animation duration
  staggerChildren?: number; // Delay between children animations
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up", // Default slide up
  amount = 0.3,
  once = true,
  duration = 0.8,
  staggerChildren = 0,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once, margin: "-100px" });

  const getHiddenVariant = () => {
    switch (direction) {
      case "up":
        return { y: 60, opacity: 0 };
      case "down":
        return { y: -60, opacity: 0 };
      case "left":
        return { x: 60, opacity: 0 };
      case "right":
        return { x: -60, opacity: 0 };
      case "none":
        return { scale: 0.95, opacity: 0 };
      default:
        return { y: 60, opacity: 0 };
    }
  };

  const variants: Variants = {
    hidden: getHiddenVariant(),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "luxurious" feel
        delay: delay,
        staggerChildren: staggerChildren > 0 ? staggerChildren : undefined,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
