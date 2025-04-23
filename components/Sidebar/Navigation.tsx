import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {menuItems.map((i) => (
      <MenuItem key={i.title} title={i.title} href={i.href} />
    ))}
  </motion.ul>
);

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Suites", href: "#suites" },
  { title: "Dining", href: "#dining" },
  { title: "Activities", href: "#activities" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Location", href: "#location" },
];
