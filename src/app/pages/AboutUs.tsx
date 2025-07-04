import React from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import SplitText from "../../components/ui/SplitText.js";
import AnimatedBlock from "../../components/ui/AnimatedBlock.js";

const AboutUs = () => {
  return (
    <div className="px-1 md:px-6 pt-10 w-full ">
      <SplitText
        text="Goccar — Driven by Trust, Since 2019"
        className="w-full border-2 border-red-400 text-4xl mt-15 md:mt-10 font-bold text-center md:text-start"
      />
      <div className="mt-3">
        <p className="text-gray-700 text-md">
          Experience the difference with Goccar — your reliable ride partner
          since 2019. We blend modern convenience with consistent service to
          deliver comfort, safety, and satisfaction on every journey.
        </p>
      </div>

      <SplitText
        text=" Why Choose Goccar?"
        className="text-4xl mt-15 md:mt-10 font-bold text-center md:text-start"
      />
      <div className="flex flex-col md:flex-row w-full justify-center text-center md:text-start mt-2">
        <div className="w-full md:w-1/2 pt-10">
          <AnimatedBlock delay={0.1}>
            <h2 className="text-gray-950 text-lg">Smart, Safe & On-Time</h2>
            <p className="text-gray-700 text-md">
              We prioritize punctuality with real-time tracking and verified
              drivers for a worry-free experience.
            </p>
          </AnimatedBlock>

          <AnimatedBlock delay={0.2}>
            <h2 className="text-gray-950 text-lg">
              Comfort That Moves With You
            </h2>
            <p className="text-gray-700 text-md">
              Our fleet is well-maintained, spacious, and climate-controlled to
              make every ride feel premium.
            </p>
          </AnimatedBlock>

          <AnimatedBlock delay={0.3}>
            <h2 className="text-gray-950 text-lg">Ride Easy, Book Easier</h2>
            <p className="text-gray-700 text-md">
              Seamless booking, book the ride of your choice, instant
              Confirmations, contact us for more information.
            </p>
          </AnimatedBlock>
        </div>

        <div className="w-full h-1/2 md:w-1/2">
          <EmblaCarousel />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
