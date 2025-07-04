"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  tripRoute: string;
  details: string;
  pricePerKm: number;
  imageSrc: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="w-full px-4 py-10 md:px-8 lg:px-20 flex flex-col-reverse md:flex-row gap-8 items-center bg-black rounded-2xl overflow-hidden">
      {/* Text Section */}
      

      {/* Image Section with Motion Effects */}
      <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.imageSrc}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.5,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom flex items-center justify-center"
            >
              <img
                src={testimonial.imageSrc}
                alt={testimonial.tripRoute}
                className="h-full w-4/5 object-cover rounded-xl shadow-2xl"
                draggable={false}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

<div className="w-full md:w-1/2 space-y-6 text-white text-center md:text-left">
        <motion.div
          key={active}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <p className="text-sm font-semibold bg-[#E43A19] inline-block px-3 py-1 rounded-md">
            Uttarakhand Chaar Dham Yatra
          </p>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4">
            {testimonials[active].tripRoute}
          </h3>
          <p className="text-base md:text-lg text-gray-300 mt-4">
            {testimonials[active].details}
          </p>
        </motion.div>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-110 transition"
          >
            <IconArrowLeft className="h-5 w-5 text-black" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-110 transition"
          >
            <IconArrowRight className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>F

    </div>
  );
};
