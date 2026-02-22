import React, { useRef } from "react";
import {
  Bed,
  Bath,
  Coffee,
  Users,
  Wifi,
  Utensils,
  Home,
  Users2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const rooms = [
  {
    title: "Double Bedroom Deluxe",
    price: 2200,
    features: [
      { text: "Spacious Double Bed", icon: Bed },
      { text: "Clean Attached Bathroom", icon: Bath },
      { text: "Breakfast Included", icon: Coffee },
      { text: "Wifi", icon: Wifi },
    ],
    image: "assets/suites/slide6.jpg",
  },
  {
    title: "Single Bedroom Comfort",
    price: 2000,
    features: [
      { text: "Comfortable Single Bed", icon: Bed },
      { text: "Attached Bathroom", icon: Bath },
      { text: "Wifi", icon: Wifi },
    ],
    image: "assets/suites/slide7.jpg",
  },
  {
    title: "Group Package Special",
    price: 2200,
    features: [
      { text: "Suitable for 14 People", icon: Users2 },
      { text: "All Meals Included", icon: Utensils },
      { text: "Spacious Common Area", icon: Home },
      { text: "Wifi", icon: Wifi },
    ],
    image: "assets/suites/slide8.jpg",
  },
  {
    title: "Large Group Package",
    price: 2000,
    features: [
      { text: "Suitable for 28 People", icon: Users2 },
      { text: "All Meals Included", icon: Utensils },
      { text: "Spacious Common Area", icon: Home },
      { text: "Wifi", icon: Wifi },
    ],
    image: "assets/suites/slide8.jpg",
  },
];

// ─── Feature row — icon spring-pops after the row fades in ────────────────────
const FeatureRow = ({
  feature,
  rowIndex,
  cardInView,
}: {
  feature: { text: string; icon: React.ElementType };
  rowIndex: number;
  cardInView: boolean;
}) => {
  const Icon = feature.icon;
  return (
    <motion.li
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -10 }}
      animate={cardInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        delay: rowIndex * 0.07 + 0.28,
      }}
    >
      {/* Icon — spring-stamp, lands slightly after its row text */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={cardInView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 20,
          delay: rowIndex * 0.07 + 0.38,
        }}
      >
        <Icon color="#D97706" size={15} className="flex-shrink-0" />
      </motion.span>
      {feature.text}
    </motion.li>
  );
};

// ─── Room Card ─────────────────────────────────────────────────────────────────
function RoomCard({
  title,
  price,
  features,
  image,
  cardIndex,
}: {
  title: string;
  price: number;
  features: Array<{ text: string; icon: React.ElementType }>;
  image: string;
  cardIndex: number;
}) {
  const ref = useRef(null);
  // Each card has its own scroll trigger — no batch-firing from a parent wrapper
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col rounded-lg shadow-lg font-sans bg-white"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        // Cards stagger left-to-right, each 80ms apart
        delay: cardIndex * 0.08,
      }}
    >
      {/* Image — subtle scale reveal so photography "opens up" */}
      <div className="h-64 lg:h-40 rounded-t-lg overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ scale: 1.06 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            delay: cardIndex * 0.08,
          }}
        />
      </div>

      <div className="p-8">
        {/* Title — fades in as card arrives */}
        <motion.h3
          className="text-2xl lg:text-xl font-semibold text-gray-800 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: cardIndex * 0.08 + 0.15 }}
        >
          {title}
        </motion.h3>

        {/* Features — each row slides in with its icon popping after */}
        <ul className="flex flex-col gap-2 ml-2 mb-4 min-h-[120px]">
          {features.map((feature, i) => (
            <FeatureRow
              key={i}
              feature={feature}
              rowIndex={i}
              cardInView={inView}
            />
          ))}
        </ul>

        <div className="flex justify-between items-center">
          {/* Price — draw-in with amber accent underline */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
              delay: cardIndex * 0.08 + 0.35,
            }}
          >
            <span className="text-[#D97706] text-xl font-semibold font-sans block">
              Nrs. {price}
            </span>
            <motion.div
              className="h-px bg-amber-500"
              style={{ transformOrigin: "left" }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: cardIndex * 0.08 + 0.5,
              }}
            />
          </motion.div>

          {/* Book Now — spring-pop in, scale feedback on interact */}
          <motion.a
            href="https://wa.me/9779855088360"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-amber-600 text-white py-2 px-6 whitespace-nowrap flex items-center justify-center font-sans"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 22,
              delay: cardIndex * 0.08 + 0.4,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
function Suites() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 });

  return (
    <section id="suites" className="py-20 px-6 bg-green-50">
      <div className="container mx-auto">
        {/* Heading — thin fade+lift so it doesn't compete with card grid */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 18 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* font-mono = Marcellus (display serif) — no font-bold, Marcellus only ships weight 400 */}
          <h2 className="text-3xl text-center font-mono mb-4">
            Our Room Packages
          </h2>
          <motion.p
            className="text-xl text-center font-sans font-light mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.18,
            }}
          >
            Experience comfort and luxury with our carefully curated room
            packages, designed to make your stay memorable.
          </motion.p>
        </motion.div>

        {/* Cards — each self-triggers on scroll, staggered by cardIndex */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, index) => (
            <RoomCard key={index} cardIndex={index} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Suites;
