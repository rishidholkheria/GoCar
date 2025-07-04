import React from "react";
import TaxiCarousel from "../components/TaxiCarousel";
import SplitText from "../../components/ui/SplitText.js";

const OurFleet = () => {
  return (
    <div className="px-5 py-10 w-full">
      <SplitText
        text="Find your ride"
        className="text-4xl mt-15 md:mt-10 font-bold text-center md:text-start"
      />
      <TaxiCarousel />
    </div>
  );
};

export default OurFleet;
