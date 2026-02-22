import type { Metadata, Viewport } from "next";
import { Marcellus, Jost } from "next/font/google";
import GoogleAnalytics from "@/components/google-analytics";

import "../styles/Home.scss";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sourceSans3 = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-source_sans_3",
});

const cormorantGaramond = Marcellus({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
  variable: "--font-comorant_garamond",
});

export const metadata: Metadata = {
  title: "Pinus Hotel | Luxury Stay in Daman",
  description:
    "Luxury hotel in Daman with scenic views and premium amenities. Book your stay for a memorable experience.",
  alternates: {
    canonical: "https://www.pinushotel.com.np/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pinus Hotel | Luxury Stay in Daman",
    description: "Premium hospitality with scenic views.",
    url: "https://www.pinushotel.com.np",
    siteName: "Pinus Hotel",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.pinushotel.com.np/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinus Hotel",
    description: "Luxury resort with breathtaking views.",
    images: ["https://www.pinushotel.com.np/twitter-image.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#14532d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${sourceSans3.variable} ${cormorantGaramond.variable}`}>
      <body>{children}</body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
