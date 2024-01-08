import { motion, useScroll, useSpring } from "framer-motion";
// import { Image } from "./Image";
import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";





export default function Gallery() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.h1
        className="text-lg"
        // style={{ "--base-width": `${titleWidth}vw`, x: "-50%" } as any}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        TRAVEL

        <Sidebar/>
      </motion.h1>

      {/* <motion.div className="progress" style={{ scaleX }} /> */}
    </motion.article>
  );
}
