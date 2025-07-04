import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedCards() {
  const testimonials = [
  {
    tripRoute: "Gangotri",
    imageSrc: "/assets/tourplan1.png",
    pricePerKm: 12.5,
    details: "A scenic road trip from the bustling capital to the serene mountains of Himachal Pradesh. Ideal for weekend getaways and adventure lovers."
  },
  {
    tripRoute: "Yamunotri",
    imageSrc: "/assets/tourplan2.png",
    pricePerKm: 11.0,
    details: "Popular coastal drive offering a mix of sea views, vibrant culture, and thrilling experiences. Perfect for both road trip enthusiasts and party-goers."
  },
  {
    tripRoute: "Kedarnath",
    imageSrc: "/assets/tourplan3.jpg",
    pricePerKm: 13.2,
    details: "A refreshing drive through the Western Ghats to the charming hill station of Ooty. Known for its lush landscapes and cool climate."
  },
  {
    tripRoute: "Badrinath",
    imageSrc: "/assets/tourplan4.jpg",
    pricePerKm: 10.5,
    details: "A short yet delightful drive along the East Coast Road offering beautiful sea views and the rich heritage of French colonial architecture."
  },
  // {
  //   tripRoute: "Kolkata to Darjeeling",
  //   imageSrc: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   pricePerKm: 14.0,
  //   details: "From the cultural capital of India to the queen of the hills, this trip promises panoramic views, tea gardens, and a cool Himalayan breeze."
  // }
];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
