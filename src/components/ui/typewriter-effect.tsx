"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

const LOCATION_WORDS = [
  { text: "Punjab", className: "text-[#FFBF00]" },
  { text: "Kashmir", className: "text-[#FFBF00]" },
  { text: "Himachal Pradesh", className: "text-[#FFBF00]" },
  { text: "Rajasthan", className: "text-[#FFBF00]" },
  { text: "Uttarakhand", className: "text-[#FFBF00]" },
];

export const TypewriterEffect = ({
  className,
  cursorClassName,
  onWordChange,
}: {
  className?: string;
  cursorClassName?: string;
  onWordChange?: (index: number) => void;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedChars, setDisplayedChars] = useState<string[]>([]);
  const [typingPhase, setTypingPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  const fullText = LOCATION_WORDS[currentWordIndex].text.split("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typingPhase === "typing") {
      if (displayedChars.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedChars(fullText.slice(0, displayedChars.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setTypingPhase("pausing");
        }, 2000); // Show full text for 2s
      }
    } else if (typingPhase === "pausing") {
      timeout = setTimeout(() => {
        setTypingPhase("deleting");
      }, 1000); // Pause before deleting
    } else if (typingPhase === "deleting") {
      if (displayedChars.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedChars(fullText.slice(0, displayedChars.length - 1));
        }, 50);
      } else {
        const nextIndex = (currentWordIndex + 1) % LOCATION_WORDS.length;
        setCurrentWordIndex(nextIndex);
        setTypingPhase("typing");
        if (onWordChange) onWordChange(nextIndex);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedChars, typingPhase, currentWordIndex]);

  return (
    <div
      className={cn(
        "font-bold text-center flex items-center justify-center",
        className
      )}
    >
      <div
        className="inline-block max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] text-wrap text-balance"
        style={{ wordBreak: "break-word" }}
      >
        {displayedChars.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className={cn(
              "text-[#FFBF00] md:text-white text-2xl sm:text-3xl md:text-5xl whitespace-pre-wrap break-words",
              LOCATION_WORDS[currentWordIndex].className
            )}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 sm:h-6 md:h-10 bg-blue-500 ml-1",
          cursorClassName
        )}
      />
    </div>
  );
};
