"use client";

import { useRef } from "react";
import AboutUs from "./pages/AboutUs";
import HeroSection from "./pages/HeroSection";
import HolidaysPlans from "./pages/HolidaysPlans";
import OurFleet from "./pages/OurFleet";
import ContactUs from "./pages/ContactUs";

export default function Home() {
  const aboutRef = useRef(null);
  const fleetRef = useRef(null);
  const holidaysRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden box-border">
      <HeroSection
        onScrollTo={(section) => {
          if (section === "about")
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          if (section === "fleet")
            fleetRef.current?.scrollIntoView({ behavior: "smooth" });
          if (section === "holidays")
            holidaysRef.current?.scrollIntoView({ behavior: "smooth" });
          if (section === "contact")
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
}
