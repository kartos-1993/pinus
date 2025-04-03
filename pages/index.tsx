import Head from "next/head";
import { useState } from "react";
import { CormorantGaramond, source_sans_3 } from "./_app";
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

export default function Home() {
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
      <Head>
        {/* Primary Meta Tags */}
        <title>Pinus Hotel | Luxury Stay in Daman</title>
        <meta
          name="description"
          content="Premium hospitality with scenic views."
        />

        {/* OpenGraph / Facebook */}
        <meta
          property="og:title"
          content="Pinus Hotel | Luxury Stay in Daman"
        />
        <meta
          property="og:description"
          content="Premium hospitality with scenic views."
        />
        <meta property="og:url" content="https://www.pinushotel.com.np" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.pinushotel.com.np/og-image.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Pinus Hotel" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pinus Hotel" />
        <meta
          name="twitter:description"
          content="Luxury resort with breathtaking views."
        />
        <meta
          name="twitter:image"
          content="https://www.pinushotel.com.np/twitter-image.webp"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <main
        className={`relative ${
          isOpen ? "overflow-hidden" : ""
        } w-full h-screen ${source_sans_3.variable} ${
          CormorantGaramond.variable
        }`}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero />
        <Welcome />
        <Dining />
        <Suites />
        <Conference />
        <Activites />
        <Testimonials />
        <Location />
        <Footer />
      </main>
    </>
  );
}
