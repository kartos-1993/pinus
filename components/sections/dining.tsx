import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "../animated-section";

// ─── Data ────────────────────────────────────────────────────────────────────
const features = [
  { title: "Gourmet Cuisine", desc: "International and local specialties" },
  { title: "Panoramic Views", desc: "Dine with mountain vistas" },
  { title: "Expert Staff", desc: "Professional service team" },
  { title: "Fresh Ingredients", desc: "Local and organic produce" },
];

const slides = [
  { src: "/assets/dining/slide1.jpg", alt: "dining 1" },
  { src: "/assets/dining/slide2.jpg", alt: "dining 2" },
  { src: "/assets/dining/slide3.jpg", alt: "dining 3" },
  { src: "/assets/dining/slide4.jpeg", alt: "dining 4" },
  { src: "/assets/dining/slide5.jpg", alt: "dining 5" },
  { src: "/assets/dining/slide6.jpeg", alt: "dining 6" },
];

// ─── Feature item with per-item scroll trigger ────────────────────────────────
const FeatureItem = ({
  feature,
  index,
}: {
  feature: { title: string; desc: string };
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 items-start"
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.09,
      }}
    >
      {/* Check icon — spring pop on enter */}
      <motion.span
        className="mt-1.5 flex-shrink-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 20,
          delay: index * 0.09 + 0.18,
        }}
      >
        <Check size={20} strokeWidth={3} color="#D97706" />
      </motion.span>

      <div className="font-sans text-lg">
        <h3 className="font-medium mb-1">{feature.title}</h3>
        <p>{feature.desc}</p>
      </div>
    </motion.div>
  );
};

// ─── Award Badge ──────────────────────────────────────────────────────────────
const AwardBadge = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  return (
    <div ref={ref} className="flex justify-center items-center gap-3 mb-6">
      {/* Icon with single radial pulse */}
      <motion.div
        className="relative flex items-center justify-center w-10 h-10"
        initial={{ scale: 0.55, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
          delay: 0.15,
        }}
      >
        {/* One-shot expanding ring — evokes a "stamp reveal" */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, #F59E0B55 0%, transparent 70%)",
          }}
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={inView ? { scale: 2.8, opacity: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.38 }}
        />
        <Image
          alt="2-star cleanliness award"
          src="/assets/dining/award.gif"
          width={36}
          height={36}
          className="relative z-10"
          unoptimized
        />
      </motion.div>

      {/* Text + underline draw */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <span className="text-xl font-medium font-sans tracking-wide">
          2-Star Cleanliness Award
        </span>
        {/* Thin amber line draws left-to-right after text fades in */}
        <motion.div
          className="h-px bg-amber-500 mt-0.5"
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.58 }}
        />
      </motion.div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Dining = () => {
  return (
    <section id="dining" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-10 mb-6">
          {/* ── Left column ── */}
          <div className="lg:w-1/2">
            {/* Heading — slides up */}
            <AnimatedSection direction="up" duration={0.65} delay={0}>
              <h2 className="text-3xl font-bold font-mono mb-4 text-center">
                Fine Dining Excellence
              </h2>
            </AnimatedSection>

            {/* Award badge */}
            <AwardBadge />

            {/* Body copy — subtle fade up, slightly after heading */}
            <AnimatedSection direction="up" duration={0.6} delay={0.05}>
              <p className="text-xl font-sans mb-8">
                Experience culinary excellence in our award-winning restaurant,
                where every dish is crafted with passion and served in an
                immaculate environment.
              </p>
            </AnimatedSection>

            {/* Feature grid — each item self-triggers on scroll */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, i) => (
                <FeatureItem key={feature.title} feature={feature} index={i} />
              ))}
            </div>
          </div>

          {/* ── Right column — image carousel ── */}
          <div className="w-full lg:w-1/2 h-[450px]">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              className="mySwiper mySwiper--dining"
            >
              {slides.map(({ src, alt }) => (
                <SwiperSlide key={src}>
                  <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={500}
                    className="w-full h-[420px] rounded-xl object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
