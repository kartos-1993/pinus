import React from "react";
import { Check, IndianRupee } from "lucide-react";

const Suites = () => {
  return (
    <section className="py-20 px-6 bg-green-50 ">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-mono font-bold mb-4">
          Luxurious Suites
        </h2>
        <p className="text-xl text-center font-sans font-light mb-12 max-w-2xl mx-auto">
          {/* Escape to our tranquil hotel surrounded by pine forests for a
            memorable nature retreat. Perfect for romantic getaways or family
            vacations. Unwind and immerse yourself in serene beauty. We cannot
            wait to welcome you! */}
          Experience ultimate comfort in our meticulously maintained suites,
          where luxury meets hygiene excellence
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg shadow-lg font-sans bg-white">
            <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/1.jpg')]"></div>
            <div className="p-8">
              <h3 className="font-extrabold font-mono text-2xl mb-2">
                Deluxe Mountain View Suite
              </h3>
              <ul className="flex flex-col gap-2 text-lg mb-4">
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Panoramic Mountain Views
                </li>
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Ultra-Clean Bathroom
                </li>
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Bathroom King Size Bed
                </li>
              </ul>
              <div className="flex justify-between">
                <span className="flex items-center gap-1 text-2xl o">
                  <IndianRupee size={15} />
                  250 per night
                </span>
                <button
                  type="button"
                  className="rounded-lg bg-amber-600 text-white py-2 px-6 whitespace-nowrap"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg font-sans bg-white">
            <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/2.jpg')]"></div>
            <div className="p-8">
              <h3 className="font-extrabold font-mono text-2xl mb-2">
                Deluxe Mountain View Suite
              </h3>
              <ul className="flex flex-col gap-2 text-lg mb-4">
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Panoramic Mountain Views
                </li>
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Ultra-Clean Bathroom
                </li>
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Bathroom King Size Bed
                </li>
              </ul>
              <div className="flex justify-between">
                <span className="flex items-center gap-1 text-2xl o">
                  <IndianRupee size={15} />
                  250 per night
                </span>
                <button
                  type="button"
                  className="rounded-lg bg-amber-600 text-white py-2 px-6"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg font-sans bg-white">
            <div className="h-64 rounded-t-lg bg-cover bg-center bg-[url('/3.jpg')]"></div>
            <div className="p-8">
              <h3 className="font-extrabold font-mono text-2xl mb-2">
                Deluxe Mountain View Suite
              </h3>
              <ul className="flex flex-col gap-2 text-lg mb-4">
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Panoramic Mountain Views
                </li>
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Ultra-Clean Bathroom
                </li>
                <li className="flex items-center gap-1">
                  <Check size={15} color="#D97706" /> Bathroom King Size Bed
                </li>
              </ul>
              <div className="flex justify-between">
                <span className="flex items-center gap-1 text-2xl o">
                  <IndianRupee size={15} />
                  250 per night
                </span>
                <button
                  type="button"
                  className="rounded-lg bg-amber-600 text-white py-2 px-6"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suites;
