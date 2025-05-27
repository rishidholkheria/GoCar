import { HoverEffect } from "../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Ananya R.",
    description:
      "Super easy to use and very reliable! I booked a cab from Delhi airport to my hotel in under 2 minutes. The driver was on time, polite, and the car was clean. Loved the real-time tracking feature too!",
  },
  {
    title: "Rohan M.",
    description:
      "The booking experience was smooth and the fare was reasonable. Overall a solid service. Will definitely use again for outstation trips",
  },
  {
    title: "Simran K.",
    description:
      "The driver was friendly and the ride was comfortable. Much better than most local services!",
  },
];
