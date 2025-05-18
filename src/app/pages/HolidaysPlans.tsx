import React from "react";
import { AnimatedCards } from "../components/AnimatedCards";

const HolidaysPlans = () => {
  return (
    <div className="w-full h-[60vh] px-5">
      <h1 className="text-3xl mt-10 font-semibold">
        Popular Budget Friendly Trips
      </h1>
      <div className="bg-[#E43A19] mt-7 rounded-2xl">
        <AnimatedCards />
      </div>
    </div>
  );
};

export default HolidaysPlans;
