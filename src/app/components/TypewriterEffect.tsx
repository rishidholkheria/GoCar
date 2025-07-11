"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useState } from "react";

export function TypewriterEffectDemo({ onVideoChange, onBookNow }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <TypewriterEffect
        onWordChange={(index) => {
          setCurrentImageIndex(index);
          // Pass the index to parent component for video sync
          if (onVideoChange) onVideoChange(index);
        }}
      />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <a href="tel:+918800049696">
          <button className="w-70 md:w-40 h-10 rounded-xl bg-[#151001] text-white">
            Call Us
          </button>
        </a>
        <button
          className="w-70 md:w-40 h-10 rounded-xl bg-[#D9D9D9] text-black border border-black"
          onClick={onBookNow}
        >
          Book a Cab
        </button>
      </div>
    </div>
  );
}
