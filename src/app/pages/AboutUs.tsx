import React from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import SplitText from "../../components/ui/SplitText.js";
import AnimatedBlock from "../../components/ui/AnimatedBlock.js"

const AboutUs = () => {
  return (
    <div className="px-1 md:px-6 py-10 w-full">
      <SplitText
        text="We Bring 10+ Years of Reliable Taxi Services"
        className="text-4xl mt-15 md:mt-10 font-bold text-center md:text-start"
      />  
      <div className="flex flex-col md:flex-row w-full justify-center items-center text-center md:text-start mt-2">
        <div className="w-full md:w-1/2">
          <AnimatedBlock delay={0.1}>
            <h2 className="text-gray-950 text-lg">100% Satisfaction</h2>
            <p className="text-gray-700 text-md">
              Our taxi services are designed to meet all your travel needs with
              the highest standards of safety and comfort.
            </p>
          </AnimatedBlock>

          <AnimatedBlock delay={0.2}>
            <h2 className="text-gray-950 text-lg">100% Satisfaction</h2>
            <p className="text-gray-700 text-md">
              Our taxi services are designed to meet all your travel needs with
              the highest standards of safety and comfort.
            </p>
          </AnimatedBlock>

          <AnimatedBlock delay={0.3}>
            <h2 className="text-gray-950 text-lg">100% Satisfaction</h2>
            <p className="text-gray-700 text-md">
              Our taxi services are designed to meet all your travel needs with
              the highest standards of safety and comfort.
            </p>
          </AnimatedBlock>
        </div>

        <div className="w-full md:w-1/2">
          <EmblaCarousel />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
