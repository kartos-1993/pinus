import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import AnimatedSection from "../animated-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Welcome = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto ">
        <AnimatedSection>
          <h2 className="text-4xl font-bold font-mono mb-4 text-center">
            Welcome to Pinus Hotel
          </h2>
          <p className="text-xl text-center font-sans font-light mb-12 max-w-2xl mx-auto">
            Your Nature Retreat Awaits!
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="w-full h-[450px] lg:w-1/2 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src="/assets/welcome/slide1.jpeg" alt="dining1" fill />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/welcome/slide2.webp"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/welcome/slide3.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/welcome/slide4.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/slide/slide5.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Welcome;
