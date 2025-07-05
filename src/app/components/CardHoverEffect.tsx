import { HoverEffect } from "../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="w-full px-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Ananya R.",
    description:
      "We recently booked a cab with GOCAR for our journey, and I have to say, it exceeded our expectations! Our driver, Pulkit Bhaiya, was not just professional but incredibly sweet and made us feel so comfortable. The ride itself was incredibly smooth – truly 'uncovering the road to seamless travel with reliability,' just like GOCAR promises! For anyone looking for a hassle-free and pleasant travel experience, look no further than GOCAR. We had a great time!",
  },
  {
    title: "Rohan M.",
    description:
      "For all my Chandigarh to Delhi travels, GOCAR has become my go-to! The peace of mind is invaluable. Our driver goes above and beyond, managing every detail from my luggage to ensuring I'm comfortable with breaks and refreshments. It's a genuinely stress-free and wonderful experience every single time. GOCAR truly delivers on its promise of reliable and seamless journeys. Thank you, GOCAR!",
  },
  {
    title: "Simran K.",
    description:
      "Delhi trip with GOCAR? Fantastic! ✨ Time flew by with Pulkit Bhai – such a smooth ride, we barely noticed! Big thanks to GOCAR for an amazing journey. Highly recommend!",
  },
   {
    title: "Vikram S.",
    description:
      "Traveling from Bangladesh, we chose GOCAR for our Delhi adventures, and we couldn't be happier! The service we received was truly exceptional – a first for us in terms of quality. GOCAR Cabs, especially with professional drivers, provide a remarkably smooth and reliable experience. For stress-free travel, GOCAR is the perfect choice. Highly recommended!",
  },
];
