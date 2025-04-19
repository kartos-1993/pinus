import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import AnimatedSection from "../animated-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { MessageCircleMore } from "lucide-react";

// Floating WhatsApp Button Component
const FloatingWhatsAppButton = () => {
  const phone = "9779855088360"; // Nepal country code +977
  const message = encodeURIComponent("Hello, I would like to inquire about Pinus Hotel.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      <MessageCircleMore size={32} color="#fff" />
    </a>
  );
};

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
          <div className="w-full h-[450px] lg:w-1/2 mx-auto">
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
                <Image src="/assets/welcome/slide1.webp" alt="dining1" fill />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/welcome/slide2.jpeg"
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
                  src="/assets/welcome/slide5.webp"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </AnimatedSection>
      </div>
      <FloatingWhatsAppButton />
    </section>
  );
};

export default Welcome;
