import React from "react";
import { AnimatedCards } from "../components/AnimatedCards";
import SplitText from "../../components/ui/SplitText.js";

const HolidaysPlans = () => {
  return (
    <div className="w-full min-h-[60vh] px-4 md:px-5 py-10">
      <SplitText
        text="Popular Budget Travels"
        className="text-4xl mt-15 md:mt-10 font-bold text-center md:text-start"
      />
      <div className="mt-7 md:rounded-2xl">
        <AnimatedCards />
      </div>
    </div>
  );
};

export default HolidaysPlans;
