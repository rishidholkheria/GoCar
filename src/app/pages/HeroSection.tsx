import React from "react";
import ResizableNavbar from "../components/ResizableNavbar";

const HeroSection = () => {
  return (
    <div className="w-full h-screen px-4 flex flex-col items-center">
      <ResizableNavbar />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-10 mx-2 text-black backdrop-opacity-75 w-[98vw] h-4/5 rounded-2xl object-cover z-[-1]"
      >
        <source src="/assets/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mx-auto absolute bottom-10 bg-white w-3/4 min-h-[115px] flex rounded-2xl shadow-[#D9D9D9]">
            <div className="px-4 my-auto border-r-1 border-gray-500 w-1/3">
                <p className="text-gray-900 font-bold text-sm">From</p>
                <input type="text" placeholder="Pickup Point" className="text-2xl outline-none py-2 capitalize"/>
            </div>
            <div className="px-4 my-auto border-r-1 border-gray-500 w-1/3">
                <p className="text-gray-900 font-bold text-sm">To</p>
                <input type="text" placeholder="Select Drop" className="text-2xl outline-none py-2 capitalize"/>
            </div>
            <div className="px-4 my-auto w-1/3">
                <p className="text-gray-900 font-bold text-sm">Pick-Up Date & Time</p>
                <input type="text" placeholder="18 May 2025, 1:00 PM" className="text-2xl outline-none py-2 capitalize"/>
            </div>
      </div>
    </div>
  );
};

export default HeroSection;
