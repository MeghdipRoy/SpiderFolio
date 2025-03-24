// "use client";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";

// export default function Paragraph() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start center", "end center"] // Trigger opacity change when text is in the center
//   });

//   // Hardcoded paragraph with each line in a <div>
//   const paragraph = [
//     "I am Spider-Man",
//     "I can climb through the city.",
//     "And I fight the bad guys"
//   ];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-600/50 via-blue-600/50 to-blue-600/50">
//       <div 
//         ref={container} 
//         className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] max-w-[1280px] px-10 py-6 text-white leading-tight flex flex-col"
//       >
//         {paragraph.map((line, lineIndex) => (
//           <div key={lineIndex} className="flex flex-wrap justify-center">
//             {line.split(" ").map((word, wordIndex) => (
//               <span key={wordIndex} className="relative mr-3">
//                 {word.split("").map((char, charIndex) => {
//                   // Calculate opacity based on character position (right to left)
//                   const charStart = (lineIndex + wordIndex / line.length + charIndex / (line.length * word.length)) / paragraph.length;
//                   const charEnd = charStart + (1 / (line.length * word.length * paragraph.length));

//                   // Add delay to the opacity transition
//                   const opacity = useTransform(scrollYProgress, [charStart, charEnd], [0, 1]);

//                   return (
//                     <span key={charIndex} className="relative">
//                       <span className="absolute opacity-20 text-white">{char}</span>
//                       <motion.span style={{ opacity }} className="text-white">{char}</motion.span>
//                     </span>
//                   );
//                 })}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedChar from "./AnimatedChar"; // Import child component

export default function Paragraph() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const paragraph = [
    "With great power",
    "comes great responsibility.",
    "I can never forget that.",
  ];

  // ✅ Count total characters in the paragraph for better animation timing
  const totalChars = paragraph.join(" ").length;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-600/50 via-blue-600/50 to-blue-600/50">
      <div
        ref={container}
        className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] max-w-[1280px] px-10 py-6 text-white leading-tight flex flex-col"
      >
        {paragraph.map((line, lineIndex) => (
          <div key={lineIndex} className="flex flex-wrap justify-center">
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="relative mr-3">
                {word.split("").map((char, charIndex) => (
                  <AnimatedChar
                    key={`${lineIndex}-${wordIndex}-${charIndex}`}
                    char={char}
                    charIndex={
                      paragraph
                        .slice(0, lineIndex)
                        .join(" ").length + // Count previous lines
                      paragraph[lineIndex].slice(0, wordIndex).length + // Count previous words
                      charIndex
                    }
                    totalChars={totalChars}
                    scrollYProgress={scrollYProgress} // Pass progress
                  />
                ))}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
