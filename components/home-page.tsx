"use client";

import { useState } from "react";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Dining from "@/components/sections/dining";
import Suites from "@/components/sections/suites";
import Conference from "@/components/sections/conference";
import Activites from "@/components/sections/activites";
import Testimonials from "@/components/sections/testimonials";
import Location from "@/components/sections/location";
import Footer from "@/components/sections/footer";
import Welcome from "@/components/sections/welcome";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Pinus Hotel",
    description:
      "Luxury hotel in Daman with scenic views and premium amenities.",
    image: "https://www.pinushotel.com.np/og-image.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Coastal Road",
      addressLocality: "Daman",
      addressRegion: "Daman and Diu",
      postalCode: "396210",
      addressCountry: "IN",
    },
    telephone: "+91-1234567890",
    priceRange: "$$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.5",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main
        className={`relative ${isOpen ? "overflow-hidden" : ""} w-full h-screen`}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero />
        <Welcome />
        <Suites />
        <Dining />
        <Conference />
        <Activites />
        <Testimonials />
        <Location />
        <Footer />
      </main>
    </>
  );
}
