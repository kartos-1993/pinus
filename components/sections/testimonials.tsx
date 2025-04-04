import {
  ChevronLeft,
  ChevronRight,
  CircleChevronLeft,
  MoveLeft,
  Star,
} from "lucide-react";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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

const Card = (testimonial: TestimonialProps) => {
  return (
    <div className=" shadow-sm py-10 bg-url">
      <div
        className="w-20 h-20 mx-auto bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${testimonial.profileImg})` }}
      ></div>

      <div className="flex gap-2 justify-center mb-8 ">
        {Array.from({ length: testimonial.star }).map((_, index) => (
          <Star
            key={index}
            size={20}
            fill="#FBD167"
            strokeWidth={0}
            className="inline"
          />
        ))}
      </div>
      <p className=" min-w-min text-center text-lg font-sans px-6 text-gray-600 mb-6 ">
        &quot;{testimonial.review}&quot;
      </p>
      <h4 className="text-center text-xl font-mono font-semibold">
        {testimonial.name}
      </h4>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-20 px-6 bg-green-50 ">
      <div className="container mx-auto">
        <h3 className="text-4xl font-mono font-semibold text-center mb-6">
          Guest Experiences
        </h3>
        <p className="text-xl font-sans text-center max-w-lg mx-auto mb-10">
          Discover what our guests have to say about their stay
        </p>

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
