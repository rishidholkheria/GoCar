import AboutUs from "./pages/AboutUs";
import Advantages from "./pages/Advantages";
import HeroSection from "./pages/HeroSection";
import HolidaysPlans from "./pages/HolidaysPlans";
import OurFleet from "./pages/OurFleet";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroSection/>
      <AboutUs/>
      <OurFleet/>
      <HolidaysPlans/>
      <Advantages/>
    </div>
  );
}
