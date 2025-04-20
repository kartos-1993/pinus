import React from "react";
import {
  Bed,
  Bath,
  Coffee,
  Users,
  UtensilsCrossed,
  Wifi,
  Clock,
  LampDesk,
  Utensils,
  Home,
  Users2,
  CalendarClock,
  Check,
  IndianRupee,
} from "lucide-react";
import AnimatedSection from "../animated-section";

function RoomCard({
  title,
  price,
  features,
  image,
  icon: Icon,
}: {
  title: string;
  price: number;
  features: Array<{
    text: string;
    icon: React.ElementType;
  }>;
  image: string;
  icon: React.ElementType;
}) {
  return (
    <AnimatedSection>
      <div className="flex flex-col rounded-lg shadow-lg font-sans bg-white">
        <div
          className={`h-64 lg:h-40 rounded-t-lg bg-cover bg-center`}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-8">
          <h3 className="text-2xl lg:text-xl font-semibold text-gray-800 font-mono mb-4">
            {title}
          </h3>
          <ul className="flex flex-col gap-2 ml-2 mb-4 min-h-[120px]">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 font-regular"
                >
                  <FeatureIcon
                    className="w-5 h-5 text-pine-500"
                    color="#D97706"
                    size={15}
                  />
                  {feature.text}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between items-center">
            <h1 className="text-[#D97706] text-xl font-semibold">
              Nrs. {price}
            </h1>

            <button
              type="button"
              className="rounded-lg bg-amber-600 text-white py-2 px-6 whitespace-nowrap"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Suites() {
  const rooms = [
    {
      title: "Double Bedroom Deluxe",
      price: 2000,
      features: [
        { text: "Spacious Double Bed", icon: Bed },
        { text: "Clean Attached Bathroom", icon: Bath },
        { text: "Breakfast Included", icon: Coffee },
        { text: "Wifi", icon: Wifi },
      ],
      image: "assets/suites/slide6.jpg",
      icon: Home,
    },
    {
      title: "Single Bedroom Comfort",
      price: 1500,
      features: [
        { text: "Comfortable Single Bed", icon: Bed },
        { text: "Attached Bathroom", icon: Bath },
        { text: "Wifi", icon: Wifi },
      ],
      image: "assets/suites/slide7.jpg",
      icon: Home,
    },
    {
      title: "Group Package Special",
      price: 2000,
      features: [
        { text: "Suitable for 14 People", icon: Users2 },
        { text: "All Meals Included", icon: Utensils },
        { text: "Spacious Common Area", icon: Home },
        { text: "Wifi", icon: Wifi },
      ],
      image: "assets/suites/slide8.jpg",
      icon: Users,
    },
    {
      title: "Large Group Package",
      price: 1800,
      features: [
        { text: "Suitable for 28 People", icon: Users2 },
        { text: "All Meals Included", icon: Utensils },
        { text: "Spacious Common Area", icon: Home },
        { text: "Wifi", icon: Wifi },
      ],
      image: "assets/suites/slide8.jpg",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 px-6 bg-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="text-3xl text-center font-mono font-bold mb-4">
              Our Room Packages
            </h2>
            <p className="text-xl text-center font-sans font-light mb-12 max-w-2xl mx-auto">
              Experience comfort and luxury with our carefully curated room
              packages, designed to make your stay memorable.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Suites;
