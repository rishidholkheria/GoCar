"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "Budget",
    },
    {
      text: "Ride,",
    },
    {
      text: "Done",
    },
    {
      text: "Right",
    },
    {
      text: "with",
    },
    {
      text: "GOCCAR.",
      className: "text-[#111F4D] dark:text-[#ffffff] bg-[#E43A19]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-[#111F4D] border border-transparent text-white text-sm">
            Call Us
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Book a Cab
        </button>
      </div>
    </div>
  );
}
