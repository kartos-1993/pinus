import { motion } from "framer-motion";
import React, { useRef, ReactNode } from "react";

type ScrollOffset =
  | `${number} ${number}`
  | `${number}`
  | "start"
  | "end"
  | "center";

interface AnimatedSectionProps {
  children: ReactNode;
  offsetStart?: ScrollOffset;
  offsetEnd?: ScrollOffset;
  staggerChildren?: number; // Delay between children animations in seconds
  animateOnce?: boolean; // Whether to animate only once
}

const AnimatedSection = ({
  children,
  staggerChildren = 0.1,
  animateOnce = true,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Stagger animation for children
  const container = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: staggerChildren,
        when: "beforeChildren",
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier for smoothness
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      viewport={{ once: animateOnce, margin: "0px 0px -50px 0px" }}
      ref={ref}
      initial="hidden"
      whileInView="show"
      variants={container}
      style={{}}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedSection;
