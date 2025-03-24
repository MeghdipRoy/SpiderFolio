"use client";
import { motion, useTransform } from "framer-motion";

export default function AnimatedChar({
  char,
  charIndex,
  totalChars,
  scrollYProgress,
}) {
  // ✅ Correct animation timing per character
  const charStart = charIndex / totalChars;
  const charEnd = charStart + 0.1; // Adjusted so each character animates smoothly

  // ✅ Synchronizing animation with scroll
  const opacity = useTransform(scrollYProgress, [charStart, charEnd], [0, 1]);
  const color = useTransform(
    scrollYProgress,
    [charStart, charEnd],
    ["rgba(255,255,255,0.2)", "rgb(185,28,28)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      transition={{ ease: "easeInOut", duration: 0.7 }}
      className="text-white"
    >
      {char}
    </motion.span>
  );
}
