import React from "react";
import { CircleCheck, Armchair, Zap, CalendarCheck2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import AnimatedSection from "../animated-section";

const conferenceData = [
  {
    icon: <CircleCheck strokeWidth={2} color="grey" />,
    heading: "Modern Audio-Visual Equipment",
    subheading:
      "High-definition projectors, sound systems, and video conferencing capabilities",
    image: "/assets/conference/slide1.jpg",
  },
  {
    icon: <Armchair strokeWidth={2} color="grey" />,
    heading: "Flexible Seating Arrangements",
    subheading: "Customizable layouts to accommodate up to 200 attendees",
    image: "/assets/conference/slide2.jpg",
  },
  {
    icon: <Zap strokeWidth={2} color="grey" />,
    heading: "High-Speed Internet",
    subheading: "Dedicated fiber-optic connection for seamless presentations",
    image: "/assets/conference/slide3.jpg",
  },
  {
    icon: <CalendarCheck2 strokeWidth={2} color="grey" />,
    heading: "Full Event Support",
    subheading: "Dedicated team for technical assistance and catering services",
    image: "/assets/conference/slide4.jpg",
  },
  {
    image: "/assets/conference/slide5.jpg",
  },
];

const Conference = () => {
  return (
    <div className="bg-green-50 px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-mono font-semibold text-center mb-6">
          State-of-the-Art Conference Facilities
        </h2>
        <p className="text-xl text-center font-sans font-light mx-auto max-w-lg mb-10">
          Host your next event in our fully equipped conference center, perfect
          for gatherings of up to 200 people
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <AnimatedSection>
            {conferenceData.map((item, index) => (
              <div key={index} className="flex items-start gap-6 py-4">
                {item.icon && (
                  <div className="w-[60px] h-[60px] shrink-0 bg-green-100 flex items-center justify-center rounded-lg">
                    {item.icon}
                  </div>
                )}
                <div>
                  {item.heading && (
                    <h3 className="text-xl font-medium font-mono mb-2">
                      {item.heading}
                    </h3>
                  )}
                  {item.subheading && (
                    <p className=" text-lg font-thin text-gray-600 font-sans">
                      {item.subheading}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </AnimatedSection>

          <div className="lg:w-1/2 h-[450px]">
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
              {conferenceData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item.image}
                    alt="dining1"
                    width={600}
                    height={500}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
