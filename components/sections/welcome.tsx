import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { TextReveal } from "../ui/text-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { MessageCircleMore } from "lucide-react";

// ─── Slides data ──────────────────────────────────────────────────────────────
const slides = [
  { src: "/assets/welcome/slide1.webp", alt: "Pinus Hotel view 1" },
  { src: "/assets/welcome/slide2.jpeg", alt: "Pinus Hotel view 2" },
  { src: "/assets/welcome/slide3.jpeg", alt: "Pinus Hotel view 3" },
  { src: "/assets/welcome/slide5.webp", alt: "Pinus Hotel view 4" },
];

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────
const FloatingWhatsAppButton = () => {
  const phone = "9779855088360";
  const message = encodeURIComponent(
    "Hello, I would like to inquire about Pinus Hotel.",
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.a
      ref={ref}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <MessageCircleMore size={32} color="#fff" />
    </motion.a>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Welcome = () => {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const carouselRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.6 });
  const subtitleInView = useInView(subtitleRef, { once: true, amount: 0.6 });
  const carouselInView = useInView(carouselRef, { once: true, amount: 0.2 });

  return (
    <section id="welcome" className="py-16 px-6">
      <div className="container mx-auto">
        {/* ── Heading ──
            Thin fade + micro-lift so the TextReveal word-by-word animation
            is the star — the container just "arrives", it doesn't compete. */}
        <motion.div
          ref={headingRef}
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* font-mono = Marcellus (display serif) — correctly mapped in tailwind.config.js */}
          <h2 className="text-4xl lg:text-5xl font-mono text-center inline-block">
            <TextReveal type="word" stagger={0.06} delay={0.25}>
              Welcome to Pinus Hotel
            </TextReveal>
          </h2>
        </motion.div>

        {/* ── Subtitle — delayed so it trails the heading settle */}
        <motion.div
          ref={subtitleRef}
          className="mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={subtitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          <p className="text-xl text-center font-sans font-light tracking-wide">
            <TextReveal
              type="line"
              stagger={0.1}
              delay={0.55}
              className="justify-center"
            >
              Your Nature Retreat Awaits!
            </TextReveal>
          </p>
        </motion.div>

        {/* ── Carousel — cinematic "materialise": opacity + gentle scale up.
            Photography should reveal, not slide-bounce into frame. */}
        <motion.div
          ref={carouselRef}
          className="w-full h-[450px] lg:h-[600px] lg:w-3/4 mx-auto"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={carouselInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            className="mySwiper"
          >
            {slides.map(({ src, alt }) => (
              <SwiperSlide key={src}>
                <Image
                  src={src}
                  alt={alt}
                  width={900}
                  height={600}
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      <FloatingWhatsAppButton />
    </section>
  );
};

export default Welcome;
