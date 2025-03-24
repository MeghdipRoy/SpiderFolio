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
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useMemo } from "react";

export default function Paragraph() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const paragraph = [
    "With great power",
    "comes great responsibility.",
    "I can never forget that."
  ];

  // 🔹 Compute transforms in a structured way using useMemo
  const transformData = useMemo(() => {
    return paragraph.map((line, lineIndex) =>
      line.split(" ").map((word, wordIndex) =>
        word.split("").map((char, charIndex) => {
          const charStart =
            (lineIndex +
              wordIndex / line.length +
              charIndex / (line.length * word.length)) /
            paragraph.length;
          const charEnd = charStart + 0.15;

          return {
            char,
            opacity: useTransform(scrollYProgress, [charStart, charEnd], [0, 1]),
            color: useTransform(
              scrollYProgress,
              [charStart, charEnd],
              ["rgba(255,255,255,0.2)", "rgb(185,28,28)"]
            ),
          };
        })
      )
    );
  }, [scrollYProgress, paragraph]);

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
                {word.split("").map((char, charIndex) => {
                  // 🔹 Access the precomputed transform values correctly
                  const { opacity, color } = transformData[lineIndex][wordIndex][charIndex];

                  return (
                    <span key={charIndex} className="relative">
                      <motion.span
                        style={{ opacity, color }}
                        transition={{ ease: "easeInOut", duration: 0.7 }}
                        className="text-white"
                      >
                        {char}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

