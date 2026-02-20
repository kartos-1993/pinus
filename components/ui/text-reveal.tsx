"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string; // Additional classes for styling
  delay?: number; // Delay before animation starts
  stagger?: number; // Delay between each word/char
  duration?: number; // Duration of each element's animation
  type?: "word" | "char" | "line"; // How to split the text
  once?: boolean; // Whether to animate only once
}

export const TextReveal = ({
  children,
  className = "",
  delay = 0,
  stagger = 0.05,
  duration = 0.5,
  type = "word",
  once = true,
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  // Helper to split text based on type
  const getContent = () => {
    if (type === "char") {
      return children.split("").map((char, index) => (
        <motion.span variants={child} key={index}>
          {char}
        </motion.span>
      ));
    }

    if (type === "line") {
      // Simple line splitting by newline, or just wrap the whole thing if no newlines
      // For true line-splitting in responsive text, we'd need a more complex solution
      // So we'll treat "line" as just block reveal for now or split by explicit \n
      return children.split("\n").map((line, index) => (
        <motion.span variants={child} key={index} style={{ display: "block" }}>
          {line}
        </motion.span>
      ));
    }

    // Default to word
    return children.split(" ").map((word, index) => (
      <motion.span
        variants={child}
        key={index}
        style={{ display: "inline-block", marginRight: "0.25em" }}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <motion.span
      ref={ref}
      style={{
        overflow: "hidden",
        display: type === "line" ? "block" : "inline-block",
        flexWrap: "wrap",
        whiteSpace: "pre-wrap",
      }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {getContent()}
    </motion.span>
  );
};
