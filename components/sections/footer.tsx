import {
  Facebook,
  Instagram,
  LocateFixed,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="  bg-green-800 py-10 px-4  text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="mb-8">
            <h3 className="text-2xl font-mono font-semibold mb-3">
              Pinus Hotel
            </h3>
            <p className="font-sans mb-2">
              Where luxury meets nature&apos;s grandeurs
            </p>
            <div className="flex gap-4 justify-start">
              <Facebook fill="white" strokeWidth={0} />
              <Instagram />
            </div>
          </div>

          <div className="font-sans mb-8 flex flex-col gap-2">
            <h3 className="text-semibold font-semibold mb-3 text-xl">
              Quick Links
            </h3>
            <Link href="#">Rooms & Suites </Link>
            <Link href="#">Dining </Link>
            <Link href="#">Activities </Link>
            <Link href="#">Location </Link>
          </div>
          <div className="font-sans">
            <h3 className="text-semibold font-semibold mb-3 text-xl">
              Contact Information
            </h3>
            <div className="flex gap-2 mb-1 items-center">
              <MapPin size={20} />
              <p className="text-lg">Pinus Hotel, Naya Gaun, Daman </p>
            </div>
            <div className="flex gap-2 mb-1 items-center">
              <Phone size={20} />
              <p className="text-lg"> +9779855088360</p>
            </div>

            <div className="flex gap-2 mb-1 items-center">
              <Mail size={20} />
              <p className="text-lg">pinushotel.nepal@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
