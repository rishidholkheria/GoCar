"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const SplitText = ({ text, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.h1
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="flex flex-wrap justify-center md:justify-start"
        variants={container}
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={child}
            className="mr-2 inline-block whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.h1>
  );
};

export default SplitText;
    