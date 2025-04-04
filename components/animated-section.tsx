import { useScroll, motion, useTransform, animate } from "framer-motion";
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
  offsetStart = "0 1",
  offsetEnd = "1 1",
  staggerChildren = 0.1,
  animateOnce = true,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [offsetStart, offsetEnd],
  });

  // Animation ranges
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  // Stagger animation for children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      viewport={{ once: animateOnce, margin: "0px 0px -50px 0px" }}
      ref={ref}
      style={{
        scale,
        opacity,
        y,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: animateOnce, margin: "0px 0px -50px 0px" }}
        variants={container}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSection;
