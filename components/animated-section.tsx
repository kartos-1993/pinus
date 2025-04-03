import { useScroll, motion } from "framer-motion";
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
}

const AnimatedSection = ({
  children,
  offsetStart = "0 1", // Default: when bottom of viewport crosses top of element
  offsetEnd = "0.8 1", // Default: when bottom of viewport reaches top of element
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [offsetStart, offsetEnd],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
