import { Briefcase, ImagePlay, MapPinIcon } from "lucide-react";
import React from "react";

const Location = () => {
  return (
    <section className="py-20 px-6 bg-green-50 ">
      <div className="mx-auto container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-mono font-semibold mb-6">
            Our Location
          </h2>
          <p className="text-lg font-sans">
            Just 40 kilometers from the capital, nestled in nature&apos;s
            embrace
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className=" ">
            <div className="mb-10 bg-white px-6 py-8  rounded-xl shadow-md">
              <h3 className="text-semibold font-semibold font-sans mb-6 text-xl">
                Quick Distance Guide
              </h3>
              <div className="flex gap-4 font-sans mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPinIcon size={24} color="grey" className=" shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    40 km from Capital City
                  </h4>
                  <p className="text-base">45 Minutes Drive</p>
                </div>
              </div>

              <div className="flex gap-4 font-sans mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <ImagePlay size={24} color="grey" className=" shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg  font-semibold">Scenic Journey</h4>
                  <p className="text-base">
                    Enjoy stunning views along the way
                  </p>
                </div>
              </div>

              <div className="flex gap-4 font-sans mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Briefcase size={24} color="grey" className=" shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg  font-semibold">Shuttle Service</h4>
                  <p className="text-base">
                    Vehicles available for your convenience
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 px-6 py-8 rounded-xl">
              <h3 className="text-semibold font-semibold font-sans mb-6 text-xl">
                Contact Information
              </h3>
              <div className="flex gap-2 font-sans items-center mb-2">
                📍
                <p className="text-lg">Pinus Hotel, Naya Gaun, Daman </p>
              </div>
              <div className="flex gap-4 items-center font-sans mb-2">
                📞
                <p className="text-lg"> +9779843165309 </p>
              </div>
              <div className="flex gap-4 items-center font-sans mb-2">
                📧
                <p className="text-lg">abishek.asim@gmail.com </p>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden w-full h-full rounded-xl "
            id="google-maps-display"
          >
            <iframe
              title="map"
              className="h-[400px] lg:h-full w-full border-0"
              src="https://www.google.com/maps/embed/v1/directions?origin=kathmandu&destination=daman+pinus+hotel&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
