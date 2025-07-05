"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
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
        }, 2000);
      }
    } else if (typingPhase === "pausing") {
      timeout = setTimeout(() => {
        setTypingPhase("deleting");
      }, 1000);
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
  }, [displayedChars, typingPhase, currentWordIndex, onWordChange]);

  return (
    <div className={cn("w-full flex justify-center px-4", className)}>
      <div className="text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw]">
        <h1 className="text-white font-semibold text-[clamp(1.25rem,4vw,2.5rem)] leading-tight drop-shadow-xl">
          Own your choice.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          Start your journey to
        </h1>

        <div className="mt-2">
          <span className="font-bold text-[clamp(1.75rem,6vw,3.5rem)] drop-shadow-[0_1px_5px_rgba(255,191,0,0.8)]">
            {displayedChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className={cn(LOCATION_WORDS[currentWordIndex].className)}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className={cn(
                "inline-block w-[3px] h-[1.3em] bg-white ml-1 align-middle",
                cursorClassName
              )}
            />
          </span>
        </div>

        <p className="mt-4 text-white text-[clamp(1.25rem,4vw,2rem)] font-medium drop-shadow-lg">
          with{" "}
          <span className="bg-[#FFBF00] text-black px-3 py-1 rounded font-semibold">
            GOCCAR
          </span>
          .
        </p>
      </div>
    </div>
  );
};
  