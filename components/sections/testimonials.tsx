import {
  ChevronLeft,
  ChevronRight,
  CircleChevronLeft,
  MoveLeft,
  Star,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

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
      "Peaceful and beautiful place with clean and better rooms. Just little insects in the room but overall good stay with good food!!",
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
  activeIndex: number;
}

const Card = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg py-8">
      <Image
        width={50}
        height={50}
        alt="testimonials-profile"
        src={testimonials[activeIndex].profileImg}
        className="mx-auto rounded-full mb-8 pt-4"
      />

      <div className="flex gap-2 justify-center mb-8 ">
        {Array.from({ length: testimonials[activeIndex].star }).map(
          (_, index) => (
            <Star
              key={index}
              size={20}
              fill="#FBD167"
              strokeWidth={0}
              className="inline"
            />
          )
        )}
      </div>
      <p className="text-center text-lg font-sans px-4 text-gray-600 mb-6">
        &quot;{testimonials[activeIndex].review}&quot;
      </p>
      <h4 className="text-center text-xl font-mono font-semibold">
        {testimonials[activeIndex].name}
      </h4>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-20 px-6 bg-green-50 mb-10">
      <div className="container mx-auto">
        <h3 className="text-4xl font-mono font-semibold text-center mb-6">
          Guest Experiences
        </h3>
        <p className="text-xl font-sans text-center max-w-lg mx-auto mb-10">
          Discover what our guests have to say about their stay
        </p>
        <div className="relative">
          <button
            onClick={() => {
              setActiveIndex((prev) => {
                if (prev === 0) return testimonials.length - 1;
                return prev - 1;
              });
            }}
            type="button"
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-white shadow-md inline-flex items-center justify-center absolute -left-7 top-[50%] translate-y-[-50%]"
          >
            <ChevronLeft size={25} />
          </button>
          <button
            onClick={() => {
              setActiveIndex((prev) => {
                if (prev === testimonials.length - 1) return 0;
                return prev + 1;
              });
            }}
            type="button"
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-white shadow-md inline-flex items-center justify-center absolute -right-8 top-[50%] translate-y-[-50%]"
          >
            <ChevronRight size={25} />
          </button>
          <Card activeIndex={activeIndex} />
        </div>
        <div className="flex justify-center gap-1">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              aria-label="active testimonial indicator"
              key={index}
              onClick={() => setActiveIndex(index)}
              className={` ${
                index === activeIndex && "bg-green-400"
              } h-3 w-3 rounded-full bg-green-200 mr-2 mt-10`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
