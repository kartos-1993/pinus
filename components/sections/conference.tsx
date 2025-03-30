import React from "react";
import { CircleCheck, Armchair, Zap, CalendarCheck2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const conferenceFeatures = [
  {
    icon: <CircleCheck strokeWidth={2} color="grey" />,
    heading: "Modern Audio-Visual Equipment",
    subheading:
      "High-definition projectors, sound systems, and video conferencing capabilities",
  },
  {
    icon: <Armchair strokeWidth={2} color="grey" />,
    heading: "Flexible Seating Arrangements",
    subheading: "Customizable layouts to accommodate up to 200 attendees",
  },
  {
    icon: <Zap strokeWidth={2} color="grey" />,
    heading: "High-Speed Internet",
    subheading: "Dedicated fiber-optic connection for seamless presentations",
  },
  {
    icon: <CalendarCheck2 strokeWidth={2} color="grey" />,
    heading: "Full Event Support",
    subheading: "Dedicated team for technical assistance and catering services",
  },
];

const Conference = () => {
  return (
    <div className="bg-green-50 px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-mono font-semibold text-center mb-6">
          State-of-the-Art Conference Facilities
        </h2>
        <p className="text-lg text-center font-sans mx-auto max-w-lg mb-10">
          Host your next event in our fully equipped conference center, perfect
          for gatherings of up to 200 people
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex flex-col mx-auto gap-8">
            {conferenceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-[60px] h-[60px] shrink-0 bg-green-100 flex items-center justify-center rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-mono mb-2">
                    {feature.heading}
                  </h3>
                  <p className="text-xl text-gray-600 font-sans">
                    {feature.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              <SwiperSlide>
                <Image
                  src="/assets/conference/slide1.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
                {/* <img src="/assets/slide/slide1.jpg" alt="dining1" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/conference/slide2.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/conference/slide3.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/conference/slide4.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/conference/slide5.jpg"
                  alt="dining1"
                  width={600}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
