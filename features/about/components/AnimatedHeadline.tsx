"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.018,
      delayChildren: 0.15,
    },
  },
};

const char: Variants = {
  hidden: {
    opacity: 0,
    y: "0.4em",
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <motion.h1
      aria-label={text}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, wi) => (
        <span
          key={`w-${wi}`}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {word.split("").map((c, ci) => (
            <motion.span
              key={`c-${wi}-${ci}`}
              variants={char}
              className="inline-block"
              style={{ willChange: "transform, opacity, filter" }}
            >
              {c}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <motion.span variants={char} className="inline-block">
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </motion.h1>
  );
}
