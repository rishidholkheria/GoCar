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
      text: "GoCAR.",
      className: "text-[#111F4D] dark:text-[#ffffff] bg-[#FFBF00] md:bg-[#FFBF00]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-[90vw] md:w-[75vw] h-[40rem]">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-12 md:mt-10">
        <button className="w-70 md:w-40 h-10 rounded-xl bg-[#151001] cursor-pointer border border-transparent text-white text-sm">
            Call Us
        </button>
        <button className="w-70 md:w-40 h-10 rounded-xl bg-[#D9D9D9] cursor-pointer text-black border border-black text-sm">
          Book a Cab
        </button>
      </div>
    </div>
  );
}
