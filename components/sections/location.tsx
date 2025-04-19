import { Briefcase, ImagePlay, MapPinIcon } from "lucide-react";
import React from "react";

const Location = () => {
  return (
    <section className="py-20 px-6 bg-white ">
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
            <div className="mb-10 bg-green-50 px-6 py-8  rounded-xl shadow-md">
              <h3 className="font-regular font-sans mb-6 text-xl">
                Quick Distance Guide
              </h3>
              <div className="flex gap-4 font-sans mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPinIcon size={24} color="grey" className=" shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">
                    40 km from Capital City through Chitlang
                  </h4>
                  <p className="text-sm">1 Hour 45 Minutes Drive</p>
                </div>
              </div>
              <div className="flex gap-4 font-sans mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPinIcon size={24} color="grey" className=" shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">
                    40 km from Capital City through Chitlang
                  </h4>
                  <p className="text-sm">1 Hour 45 Minutes Drive</p>
                </div>
              </div>

              <div className="flex gap-4 font-sans mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <ImagePlay size={24} color="grey" className=" shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg font-[500]">Scenic Journey</h4>
                  <p className="text-sm">Enjoy stunning views along the way</p>
                </div>
              </div>

              <div className="flex gap-4 font-sans mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Briefcase size={24} color="grey" className=" shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Shuttle Service</h4>
                  <p className="text-sm">
                    Vehicles available for your convenience
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 px-6 py-8 rounded-xl">
              <h3 className="font-normal font-sans mb-6 text-xl">
                Contact Information
              </h3>
              <div className="flex gap-2 font-sans items-center mb-2">
                📍
                <p className="text-lg">Pinus Hotel, Naya Gaun, Daman </p>
              </div>
              <div className="flex gap-4 items-center font-sans mb-2">
                📞
                <p className="text-lg"> +9779855088360 </p>
              </div>
              <div className="flex gap-4 items-center font-sans mb-2">
                📧
                <p className="text-lg">pinushotel.nepal@gmail.com </p>
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
