import React from "react";
import EmblaCarousel from "../components/EmblaCarousel";

const AboutUs = () => {
  return (
    <div className="px-5 py-10 w-full">
      <h1 className="text-4xl mt-10 font-bold">
        We Bring 10+ Years of Reliable Taxi Services
      </h1>
      <div className="flex w-full mt-2">
        <div className="w-1/2">
          <div className="px-5 py-9">
            <h2 className="text-gray-950 text-lg">100% Satisfaction</h2>
            <p className="text-gray-700 text-md">
              Our taxi services are designed to meet all your travel needs with
              the highest standards of safety and comfort.
            </p>
          </div>
          <div className="px-5 py-6">
            <h2 className="text-gray-950 text-lg">100% Satisfaction</h2>
            <p className="text-gray-700 text-md">
              Our taxi services are designed to meet all your travel needs with
              the highest standards of safety and comfort.
            </p>
          </div>
          <div className="px-5 py-6">
            <h2 className="text-gray-950 text-lg">100% Satisfaction</h2>
            <p className="text-gray-700 text-md">
              Our taxi services are designed to meet all your travel needs with
              the highest standards of safety and comfort.
            </p>
          </div>
        </div>

        <div className="w-1/2 ">
          <EmblaCarousel/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
