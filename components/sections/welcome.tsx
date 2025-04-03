import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import AnimatedSection from "../animated-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

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
          <div className="w-full [500px] h-[450px] lg:w-1/2 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/assets/welcome/slide1.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
                {/* <img src="/assets/slide/slide1.jpeg" alt="dining1" /> */}
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
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Welcome;
