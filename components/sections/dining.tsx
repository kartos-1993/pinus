import React, { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { Check, Star } from "lucide-react";
import { useScroll } from "framer-motion";
import AnimatedSection from "../animated-section";

const Dining = () => {
  return (
    <section id="dining" className="py-20 px-6 bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-10 mb-6">
          <div className=" lg:w-1/2">
            <AnimatedSection staggerChildren={0.15}>
              <h2 className="text-3xl font-bold font-mono mb-4 text-center">
                Fine Dining Excellence
              </h2>

              <h6 className="font-sans flex justify-center items-center gap-2 mb-6">
                <Image
                  alt="two star awarded for cleanliness"
                  src="/assets/dining/award.gif"
                  width={30}
                  height={30}
                />
                <span className="text-xl text-center font-medium ">
                  2-Star Cleanliness Award
                </span>
              </h6>
              <p className="text-xl font-sans mb-8">
                Experience culinary excellence in our award-winning restaurant,
                where every dish is crafted with passion and served in an
                immaculate environment.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4 items-start">
                <Check
                  size={20}
                  strokeWidth={3}
                  color="#D97706"
                  className="mt-1.5"
                />
                <div className="font-sans text-lg">
                  <h3 className="font-medium mb-1">Gourmet Cuisine</h3>
                  <p className="">International and local specialties</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Check
                  size={20}
                  strokeWidth={3}
                  color="#D97706"
                  className="mt-1.5"
                />
                <div className="font-sans text-lg">
                  <h3 className="font-medium mb-1">Panoramic Views</h3>
                  <p className="">Dine with mountain vistas</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Check
                  size={20}
                  strokeWidth={3}
                  color="#D97706"
                  className="mt-1.5"
                />
                <div className="font-sans text-lg">
                  <h3 className="font-medium mb-1">Expert Staff</h3>
                  <p className="">Professional service team</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Check
                  size={20}
                  strokeWidth={3}
                  color="#D97706"
                  className="mt-1.5"
                />
                <div className="font-sans text-lg">
                  <h3 className="font-medium  mb-1">Fresh Ingredients</h3>
                  <p className="">Local and organic produce</p>
                </div>
              </div>
            </div>
          </div>
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
                  src="/assets/dining/slide1.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
                {/* <img src="/assets/slide/slide1.jpeg" alt="dining1" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/dining/slide2.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/dining/slide3.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/dining/slide4.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/dining/slide5.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/dining/slide6.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
