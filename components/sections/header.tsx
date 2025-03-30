import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { exit } from "process";

interface INavLinkProps {
  title: string;
  link: string;
}
const Header = () => {
  return (
    <motion.header
      className="absolute bg-transparent z-20 w-full px-6 py-3 flex justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <Image
        className="w-12"
        src="/assets/logo.png"
        alt="logo"
        priority={true}
        width={50}
        height={50}
      />

      <NavBar />
    </motion.header>
  );
};

export default Header;

const NavBar = () => {
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

  const [isOpen, setIsOpen] = useState(false);
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
  const navKinkVariant = {
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
