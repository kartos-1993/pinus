import Image from "next/image";
import React from "react";

const activities = [
  {
    name: "Hikinh To Rikeshwor Mandir",
    detail: "Guided trails for all experience levels with breathtaking views",
    imgSrc: "/assets/activities/hiking/hiking.jpg",
  },
  {
    name: "Evening BBQ",
    detail:
      "Outdoor grilling with live music under the stars cherish the moment",
    imgSrc: "/assets/activities/enjoy/enjoy-desktop.jpeg",
  },
  {
    name: "Live Fire",
    detail: "Keep you cozy and warm from the coll breeze of chill air",
    imgSrc: "/assets/activities/barbeque/fire-desktop.jpg",
  },
];
const Activites = () => {
  return (
    <div className="px-6 py-20">
      <div className="container mx-auto ">
        <h3 className="text-center text-4xl font-mono font-semibold mb-8">
          Adventure & Relaxation
        </h3>
        <p className="text-lg font-sans text-center max-w-lg mx-auto mb-10">
          Immerse yourself in nature with our curated outdoor activities and
          evening entertainment
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((ativity, index) => (
            <div
              className="flex flex-col h-64 font-sans text-xl relative rounded-xl bg-cover bg-center opacity-80 bg-gradient-to-b from-gray-400 to-green-900"
              key={index}
            >
              <Image
                className="w-full h-full mix-blend-overlay absolute inset-0 object-cover object-center rounded-xl"
                width={385}
                height={260}
                src={ativity.imgSrc}
                alt="activities"
              />
              <div className="px-8 bottom-[18%] absolute z-10 text-white flex flex-col gap-2 [text-shadow:_6px_5px_10px_rgba(131,131,131,0.43)]">
                <h4 className="text-2xl font-normal">{ativity.name}</h4>
                <p className="text-base text-white ">{ativity.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activites;
