"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion, useScroll, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface INavLinkProps {
  title: string;
  link: string;
}

type NavProps = {
  isOpen: boolean;
  setIsOpen: (isOPen: boolean) => void;
};
// Update the sidebarVariants to handle null values safely
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${
      (height || 1000) * 2 + 200
    }px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(23px at calc(100% - 53px) 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul
    className=" list-none absolute right-0 w-full flex flex-col items-center uppercase text-4xl font-sans font-medium leading-[1.5] mt-10"
    variants={navVariants}
  >
    {navLinks.map((item, index) => (
      <MenuItem {...item} key={index} />
    ))}
  </motion.ul>
);

export function Header({ isOpen, setIsOpen }: NavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((currentScrollY) => {
      if (currentScrollY > 100 && currentScrollY > prevScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setPrevScrollY(currentScrollY);
    });
  }, [scrollY, prevScrollY]);

  return (
    <div>
      <div>
        <motion.div
          variants={{
            visible: {
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            },
            hidden: {
              y: "-100%",
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          }}
          initial="visible"
          animate={isVisible ? "visible" : "hidden"}
          className=" fixed top-0 w-full justify-between items-center z-20 px-4 py-3 backdrop-blur-lg"
        >
          <div className="container mx-auto flex justify-between items-center ">
            <Image
              className="-ml-1.5"
              src="/assets/logo.svg"
              alt="logo"
              priority={true}
              width={50}
              height={50}
            />
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
              className=""
            >
              <motion.div
                className="bg-white absolute top-0 right-0 bottom-0 w-full h-screen "
                variants={sidebarVariants}
              />
              <Navigation />
              <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </motion.nav>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    type="button"
    title="navigation toggle button"
    className="outline-none border-none select-none cursor-pointer absolute top-[18px] right-[15px] w-[50px] h-[50px] rounded-full bg-transparent"
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

type MenuProps = {
  link: string;
  title: string;
};

const MenuItem = ({ title, link }: MenuProps) => {
  // const border = `2px solid ${colors[i]}`;
  return (
    <motion.li
      className=""
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a className="" href={link}>
        {title}
      </a>
    </motion.li>
  );
};

const navLinks = [
  {
    id: 1,
    title: "Homes",
    link: "#testimonials",
  },
  {
    id: 2,
    title: "Packages",
    link: "#testimonials",
  },
  {
    id: 3,
    title: "Dining",
    link: "#testimonials",
  },
  {
    id: 4,
    title: "Activities",
    link: "#testimonials",
  },
  {
    id: 5,
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    id: 6,
    title: "Location",
    link: "#location",
  },
];

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    updateDimensions();

    // Add resize listener
    window.addEventListener("resize", updateDimensions);

    // Clean up
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]);

  // Return null for unmeasured dimensions
  return {
    width: dimensions.width ?? 0,
    height: dimensions.height ?? 0,
  };
};

export default Header;
