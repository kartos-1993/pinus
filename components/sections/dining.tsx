import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { Check, Star } from "lucide-react";

const Dining = () => {
  return (
    <section className="py-20 px-6 bg-white ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-10  mb-6">
          <div className=" lg:w-1/2">
            <h2 className="text-4xl font-bold font-mono mb-4">
              Fine Dining Excellence
            </h2>
            <h6 className="font-sans flex items-center gap-2 mb-6">
              <Star fill="#FBD167" strokeWidth={0} size={20} />
              <Star fill="#FBD167" strokeWidth={0} size={20} />
              <span className="text-xl font-medium ">
                2-Star Cleanliness Award
              </span>
            </h6>
            <p className="text-xl font-sans mb-8">
              Experience culinary excellence in our award-winning restaurant,
              where every dish is crafted with passion and served in an
              immaculate environment.
            </p>
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
            <button
              type="button"
              className="bg-amber-600 py-2 px-8 rounded-lg text-white text-lg font-normal font-sans"
            >
              Visit menu
            </button>
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
                  src="/assets/slide/slide1.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
                {/* <img src="/assets/slide/slide1.jpeg" alt="dining1" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/slide/slide2.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/slide/slide3.jpeg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/slide/slide4.jpeg"
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
      </div>
    </section>
  );
};

export default Dining;
