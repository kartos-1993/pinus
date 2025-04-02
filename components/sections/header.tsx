import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { exit } from "process";

interface INavLinkProps {
  title: string;
  link: string;
}

type NavProps = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export function Navigation({ isOpen, setIsOpen }: NavProps) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    scrollY.get;
    const latest = scrollY.onChange(() => {
      const current = scrollY.get();
      if (current > 0) {
        // Check if the user is scrolling down
        setHidden(true); // Hide the navbar
      } else {
        // Check if the user is scrolling up
        setHidden(false); // Show the navbar
      }
    });
    console.log(latest);
  }, [scrollY]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className=" backdrop-blur-md fixed top-0 w-full justify-between items-center z-20 px-6 py-3"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Image
          className="w-12"
          src="/assets/logo.svg"
          alt="logo"
          priority={true}
          width={20}
          height={20}
        />

        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.nav>
  );
}

const NavBar = ({ isOpen, setIsOpen }: NavProps) => {
  const menuVariant = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  return (
    <nav>
      <p
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer font-sans text-white"
      >
        Menu
      </p>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute origin-top top-0 right-0 uppercase w-full h-screen bg-slate-50"
          >
            <p
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-right font-sans mr-4 mt-2"
            >
              close
            </p>
            <ul className="pt-52 flex flex-col gap-2 text-4xl items-center justify-center font-mono font-bold ">
              {navLinks.map((link) => (
                <NavLink key={link.id} title={link.title} link={link.link} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function NavLink({ title, link }: INavLinkProps) {
  const navLinkVariant = {
    initial: {
      scaleY: 0,
    },
  };
  return (
    <li key={title} className="py-0 px-4">
      <Link href={link}>{title}</Link>
    </li>
  );
}

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
    id: 3,
    title: "Activities",
    link: "#testimonials",
  },
  {
    id: 3,
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    id: 3,
    title: "Location",
    link: "#location",
  },
];

export default Navigation;
