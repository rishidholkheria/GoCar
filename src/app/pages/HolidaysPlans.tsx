import React from "react";
import { AnimatedCards } from "../components/AnimatedCards";

const HolidaysPlans = () => {
  return (
    <div className="w-full h-[20vh] md:h-[60vh] md:px-5">
      <h1 className="text-4xl mt-10 font-semibold text-center md:text-start px-3 md:px-0">
        Popular Budget Friendly Trips
      </h1>
      <div className="mt-7 md:rounded-2xl">
        <AnimatedCards />
      </div>
    </div>
  );
};

export default HolidaysPlans;
