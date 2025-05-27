"use client";

import { useRef } from "react";
import AboutUs from "./pages/AboutUs";
import Advantages from "./pages/Advantages";
import HeroSection from "./pages/HeroSection";
import HolidaysPlans from "./pages/HolidaysPlans";
import OurFleet from "./pages/OurFleet";

export default function Home() {
  const aboutRef = useRef(null);
  const fleetRef = useRef(null);
  const holidaysRef = useRef(null);

  return (
    <div className="min-h-screen w-[100vw] box-border">
      <HeroSection
        onScrollTo={(section) => {
          if (section === "about")
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          if (section === "fleet")
            fleetRef.current?.scrollIntoView({ behavior: "smooth" });
          if (section === "holidays")
            holidaysRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={fleetRef}>
        <OurFleet />
      </div>
      <div ref={holidaysRef}>
        <HolidaysPlans />
      </div>
      <Advantages />
    </div>
  );
}
