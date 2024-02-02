import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import logo from "../public/assets/pinuslogopng.png";

import { Sidebar } from "../components/Sidebar/Sidebar";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <nav className=" pt-3">
        <div className="logo-container">
          <Image className="w-12" src={logo} alt="logo" priority={true} />
        </div>
        {/* <ul className="flex text-white">
              <li className="py-0 px-4">menu</li>
              <li className="py-0 px-4">packages</li>
              <li className="py-0 px-4">contact</li>
            </ul> */}
        <Sidebar />
      </nav>
    </motion.header>
  );
};

export default Header;
