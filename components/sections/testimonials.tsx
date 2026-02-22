import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedSection from "../animated-section";

const testimonials = [
  {
    name: "Gaurab Dhungana",
    profileImg: "/assets/testimonials/1.png",
    star: 5,
    review:
      "Hotel Pinus! is a must-visit in Daman. The ambiance is elegant and inviting, with comfortable seating and exceptional decor. ",
  },
  {
    name: "Wingedman",
    profileImg: "/assets/testimonials/2.png",
    star: 4,
    review:
      "Peaceful and beautiful place with clean and better room and overall good stay with good food!!",
  },
  {
    name: "Nabaraj Karki",
    profileImg: "/assets/testimonials/3.png",
    star: 5,
    review: "One of the best places to visit and stay for a weekend getaway.",
  },
  {
    name: "Nirvik Singh Mahara",
    profileImg: "/assets/testimonials/4.png",
    star: 5,
    review:
      "The food and the service is the best I have never gone to a hotel like this before the best hotel ever been.",
  },
  {
    name: "Sunil Sharma",
    profileImg: "/assets/testimonials/5.png",
    star: 5,
    review:
      "Owner and staff are very friendly. A holiday to remember with clean room and beautiful view with affordable price starting from 2K. Thank you for giving us loveable hospitality.",
  },
  {
    name: "Pragya Manandhar",
    profileImg: "/assets/testimonials/6.png",
    star: 5,
    review:
      "Quality food, good ambience and greenery all around..Had great stay!!! Love pinus hotel❤",
  },
  {
    name: "Bisheshwor Bhatta",
    profileImg: "/assets/testimonials/7.png",
    star: 5,
    review:
      "Hotel is in perfect location with wonderful view. You will enjoy the good foods and heart warming hospitality looking at the hills and mountains from your left to right breathing the nature's aroma.",
  },
  {
    name: "Saajan Raut",
    profileImg: "/assets/testimonials/8.png",
    star: 5,
    review:
      "Nice view in the morning. The staff are also very nice and helpful. Price is also affordable. Had great experience.",
  },
];

interface TestimonialProps {
  name: string;
  profileImg: string;
  star: number;
  review: string;
}

const Card = ({ name, profileImg, star, review }: TestimonialProps) => {
  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-sm px-6 py-7 md:px-9 md:py-9 min-h-[300px]">
      <div className="grid gap-6 md:grid-cols-[190px_1fr] md:items-start">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-12 h-12 rounded-full overflow-hidden mb-3 border border-slate-200 bg-slate-100 ring-2 ring-slate-100">
            <Image
              src={profileImg}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <h4 className="text-xl md:text-2xl font-mono font-semibold text-slate-800 leading-tight">
            {name}
          </h4>

          <div className="flex gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                fill={index < star ? "#FACC15" : "transparent"}
                strokeWidth={1.75}
                className="inline"
                color={index < star ? "#FACC15" : "#94A3B8"}
              />
            ))}
          </div>
        </div>

        <div className="relative md:pl-6 md:border-l md:border-slate-200">
          <span className="absolute -top-1 left-0 text-5xl font-mono text-slate-300 leading-none">
            “
          </span>
          <p className="pt-6 text-lg md:text-[1.18rem] font-sans text-slate-600 leading-relaxed">
            {review}
          </p>
        </div>
      </div>
    </article>
  );
};

const AnimatedCard = ({
  testimonial,
  isActive,
}: {
  testimonial: TestimonialProps;
  isActive: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={{
        opacity: isActive ? 1 : 0.7,
        y: isActive ? 0 : 10,
        scale: isActive ? 1 : 0.985,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pb-2"
    >
      <Card {...testimonial} />
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-green-50">
      <div className="container mx-auto">
        <AnimatedSection>
          <h3 className="text-4xl font-mono font-semibold text-center mb-4">
            Guest Experiences
          </h3>
          <p className="text-xl font-sans text-center max-w-2xl mx-auto mb-12 text-slate-600">
            Discover what our guests have to say about their stay
          </p>
        </AnimatedSection>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          className="mySwiper max-w-4xl"
          breakpoints={{
            768: {
              spaceBetween: 24,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <AnimatedCard testimonial={testimonial} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
