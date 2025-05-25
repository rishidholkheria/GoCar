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

  const isActive = (index: number) => {
    return index === active;
  };

useEffect(() => {
  if (autoplay) {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }
}, [autoplay, testimonials.length]);


  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center md:px-12 py-8 bg-black rounded-2xl">
      <div className="relative w-full md:w-1/2 h-[800px] md:h-full ml-5 md:ml-0">
        <AnimatePresence>
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
                opacity: isActive(index) ? 1 : 0.7,
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
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={testimonial.imageSrc}
                alt={testimonial.tripRoute}
                className="h-full w-11/12 object-cover object-center rounded-xl"
                draggable={false}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="w-full z-10 md:w-1/2 h-full flex flex-col justify-between p-6 md:p-12 bg-zinc-900 text-white">
        <motion.div
          key={active}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <h3 className="text-4xl md:text-5xl font-bold">
            {testimonials[active].tripRoute}
          </h3>
          <motion.p className="mt-7 text-lg text-gray-300">
            {testimonials[active].details.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.02 * index,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
          <p className="text-sm bg-[#E43A19] rounded-md p-2 mt-8">
            {`Total Distance : ${testimonials[active].pricePerKm}`}
          </p>
        </motion.div>

        <div className="flex gap-6 mt-6">
          <button
            onClick={handlePrev}
            className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-white hover:scale-110 transition"
          >
            <IconArrowLeft className="h-5 w-5 text-black group-hover/button:rotate-12 transition" />
          </button>
          <button
            onClick={handleNext}
            className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-white hover:scale-110 transition"
          >
            <IconArrowRight className="h-5 w-5 text-black group-hover/button:-rotate-12 transition" />
          </button>
        </div>
      </div>
    </div>
  );
};
