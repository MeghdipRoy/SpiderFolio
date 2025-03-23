'use client';
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08, // Fixed typo here
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-red-700 font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => ( // Split by spaces for words
          <motion.span
            key={word + '-' + index}
            variants={singleWord} // Fixed typo here
            style={{ display: 'inline-block' }} // Ensure each word is inline-block
          >
            {word}&nbsp; {/* Add a space after each word */}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;