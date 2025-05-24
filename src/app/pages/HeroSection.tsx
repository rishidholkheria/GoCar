"use client";

import React, { useState } from "react";
import ResizableNavbar from "../components/ResizableNavbar";
import { TypewriterEffectDemo } from "../components/TypewriterEffect";
import { useRouter } from "next/navigation";
import { CabStore } from "@/store";

const HeroSection = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const changeState = CabStore((state) => state.changeState);
  const setLocations = CabStore((state) => state.setLocations);

  const router = useRouter();

  const getGeoCodes = async (place: String) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          place
        )}`
      );
      const resp = await response.json();
      console.log("response : ", resp);

      if (resp && resp[0]) {
        return [parseFloat(resp[0].lat), parseFloat(resp[0].lon)];
      }
    } catch (e) {
      console.log("Error :", e);
    }
  };

  const handleSearch = async () => {
    const geoCode1 = await getGeoCodes(source);
    const geoCode2 = await getGeoCodes(destination);
    console.log("G1 --- ", geoCode1);
    console.log("G2 ---", geoCode2);
    setLocations({ source, destination });
    changeState({ sourceGeocode: geoCode1, destinationGeocode: geoCode2 });
    router.push("/select-cab");
  };

  return (
    <div className="w-full h-screen px-4 flex flex-col items-center">
      <ResizableNavbar />
      <div className="absolute">
        <TypewriterEffectDemo />
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-10 mx-2 text-black backdrop-opacity-75 w-[98vw] h-[90vh] rounded-b-2xl object-cover z-[-1]"
      >
        <source src="/assets/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mx-auto absolute bottom-[-1] bg-white w-3/4 min-h-[115px] flex justify-center items-center rounded-2xl shadow-[#D9D9D9]">
        <div className="px-4 my-auto border-r-1 border-gray-500 w-1/4">
          <p className="text-gray-900 font-bold text-sm">From</p>
          <input
            onChange={(e) => setSource(e.target.value)}
            type="text"
            placeholder="Pickup Point"
            className="text-2xl outline-none py-2 capitalize"
          />
        </div>
        <div className="px-4 my-auto border-r-1 border-gray-500 w-1/4">
          <p className="text-gray-900 font-bold text-sm">To</p>
          <input
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Select Drop"
            className="text-2xl outline-none py-2 capitalize"
          />
        </div>
        <div className="px-4 my-auto w-1/4">
          <p className="text-gray-900 font-bold text-sm">Pick-Up Date & Time</p>
          <input
            type="text"
            placeholder="18 May 2025, 1:00 PM"
            className="text-2xl outline-none py-2 capitalize"
          />
        </div>
        <div className="w-1/4 flex justify-center">
          <button
            onClick={handleSearch}
            className="rounded-[300px] bg-[#E43A19] w-1/3 p-3 text-white cursor-pointer"
          >
            %
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
