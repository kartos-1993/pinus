import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import AnimatedSection from "../animated-section";

const Welcome = () => {
  return (
    <AnimatedSection>
      <section className="py-20 px-6">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold font-mono mb-4 text-center">
            Welcome to Pinus Hotel
          </h2>
          <p className="text-xl font-sans mb-8 text-center">
            Your Nature Retreat Awaits!
          </p>
          <div className=" flex flex-col gap-8">
            <Image
              alt="two star awarded for cleanliness"
              src="/assets/welcome/slide1.jpeg"
              width={450}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Welcome;
