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

// const Suites = () => {
//   return (
//     <section className="py-20 px-6 bg-green-50">
//       <div className="container mx-auto">
//         <AnimatedSection>
//           <h2 className="text-4xl text-center font-mono font-bold mb-4">
//             Luxurious Suites
//           </h2>

//           <p className="text-xl text-center font-sans font-light mb-12 max-w-2xl mx-auto">
//             Experience ultimate comfort in our meticulously maintained suites,
//             where luxury meets hygiene excellence
//           </p>
//         </AnimatedSection>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           <div className="flex flex-col rounded-lg shadow-lg font-sans bg-white">
//             <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/assets/suites/slide1.jpeg')]"></div>
//             <div className="p-8">
//               <h3 className="font-extrabold font-mono text-2xl mb-2">
//                 Deluxe Mountain View Suite
//               </h3>
//               <ul className="flex flex-col gap-2 text-lg mb-4">
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Panoramic Mountain Views
//                 </li>
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Ultra-Clean Bathroom
//                 </li>
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Bathroom King Size Bed
//                 </li>
//               </ul>
//               <div className="flex justify-between">
//                 <span className="flex items-center gap-1 text-2xl o">
//                   <IndianRupee size={15} />
//                   250 per night
//                 </span>
//                 <button
//                   type="button"
//                   className="rounded-lg bg-amber-600 text-white py-2 px-6 whitespace-nowrap"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col rounded-lg shadow-lg font-sans bg-white">
//             <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/assets/suites/slide2.jpg')]"></div>
//             <div className="p-8">
//               <h3 className="font-extrabold font-mono text-2xl mb-2">
//                 Deluxe Mountain View Suite
//               </h3>
//               <ul className="flex flex-col gap-2 text-lg mb-4">
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Panoramic Mountain Views
//                 </li>
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Ultra-Clean Bathroom
//                 </li>
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Bathroom King Size Bed
//                 </li>
//               </ul>
//               <div className="flex justify-between">
//                 <span className="flex items-center gap-1 text-2xl o">
//                   <IndianRupee size={15} />
//                   250 per night
//                 </span>
//                 <button
//                   type="button"
//                   className="rounded-lg bg-amber-600 text-white py-2 px-6"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col rounded-lg shadow-lg font-sans bg-white">
//             <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/3.jpg')]"></div>
//             <div className="p-8">
//               <h3 className="font-extrabold font-mono text-2xl mb-2">
//                 Deluxe Mountain View Suite
//               </h3>
//               <ul className="flex flex-col gap-2 text-lg mb-4">
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Panoramic Mountain Views
//                 </li>
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Ultra-Clean Bathroom
//                 </li>
//                 <li className="flex items-center gap-1">
//                   <Check size={15} color="#D97706" /> Bathroom King Size Bed
//                 </li>
//               </ul>
//               <div className="flex justify-between">
//                 <span className="flex items-center gap-1 text-2xl o">
//                   <IndianRupee size={15} />
//                   250 per night
//                 </span>
//                 <button
//                   type="button"
//                   className="rounded-lg bg-amber-600 text-white py-2 px-6"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Suites;

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
   
      <div className="flex flex-col rounded-lg shadow-lg font-sans bg-white">
        <div
          className={`h-64 rounded-t-lg bg-cover bg-center`}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-800 font-mono">
            {title}
          </h3>
          <ul className="flex flex-col gap-2 text-lg mb-4">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <AnimatedSection key={index}>
                  <li key={index} className="flex items-center gap-1">
                    <FeatureIcon
                      className="w-5 h-5 text-pine-500"
                      color="#D97706"
                      size={15}
                    />
                    {feature.text}
                  </li>
                </AnimatedSection>
              );
            })}
          </ul>
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-lg bg-amber-600 text-white py-2 px-6 whitespace-nowrap"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
   
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
        { text: "Daily Breakfast Included", icon: Coffee },
        { text: "24/7 Room Service", icon: Clock },
      ],
      image: "assets/suites/slide1.jpeg",
      icon: Home,
    },
    {
      title: "Single Bedroom Comfort",
      price: 1500,
      features: [
        { text: "Comfortable Single Bed", icon: Bed },
        { text: "Modern Attached Bathroom", icon: Bath },
        { text: "Work Desk", icon: LampDesk },
        { text: "Daily Housekeeping", icon: Clock },
      ],
      image: "assets/suites/slide3.jpg",
      icon: Home,
    },
    {
      title: "Group Package Special",
      price: 2000,
      features: [
        { text: "Suitable for 14 People", icon: Users2 },
        { text: "All Meals Included", icon: Utensils },
        { text: "Spacious Common Area", icon: Home },
        { text: "Group Activities Support", icon: CalendarClock },
      ],
      image: "assets/suites/slide4.jpg",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 px-6 bg-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="text-4xl text-center font-mono font-bold mb-4">
              Our Room Packages
            </h2>
            <p className="text-xl text-center font-sans font-light mb-12 max-w-2xl mx-auto">
              Experience comfort and luxury with our carefully curated room
              packages, designed to make your stay memorable.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Suites;
