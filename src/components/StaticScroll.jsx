// 'use client';
// import {motion} from "framer-motion"



// export default function StaticScroll() {

//   return (
//  <motion.div 
//  className="h-full"
//  initial={{y: "-200vh"}}
//  animate={{y:"0%"}}
//  transition={{duration : 1}}
//  >
//     <div className="h-full overflow-scroll-hidden lg-flex">
//         <div className="">
           
//             <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
//                  {/* // Spiderman biography */}
//                 <div className="flex flex-col gap-12 justify-center "> 
//                    <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
//                    <p className="text-lg">
//   Spider-Man, also known as Peter Parker,
//    is a Marvel Comics superhero created by writer Stan Lee and artist Steve Ditko.
//     First appearing in *Amazing Fantasy #15* (1962), Peter Parker gains spider-like abilities after being bitten by a radioactive spider. 
//     Balancing his personal life and superhero duties, he fights crime in New York City using his agility, web-shooters, and intellect. 
//     Guided by his uncle Ben’s words, “With great power comes great responsibility,” Spider-Man remains one of the most beloved and relatable superheroes of all time.
//                    </p>
//                    <span className="italic ">
//                    With great power comes great responsibility.
//                    </span>
//                    <div className="self-end">
//                   <svg
//   width="400"
//   height="223"
//   viewBox="0 0 400 223"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     d="m106 141-2 2h-1l-4 4h-1l-6 6h-1l-1-1-1 1h-1l-2 2v1l-1 1v2l-1 1v2l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v2l-1 1v2l-1 1v3l-1 1v2l-1 1v5l-1 1v13l1 1v2l1 1h3v-1l2-2v-3l1-1v-2l1-1v-3l1-1v-3l1-1v-4l1-1v-2l1-1v-3l1-1v-3l1-1v-3l1-1v-1l1-1 1 1h1l1 1 1-1h1l2-2v-1l2-2v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l-1-1v-1ZM119 139l-1 1v7l-1 1v9l-1 1v11l-1 1 1 1-1 1 1 1v1l1 1h1l2-2v-5l1-1v-8l1-1v-9l1-1v-8l-1-1ZM181 100l-1 1h-2l-4 4v1l-2 2v1l-1 1v1l-1 1v1l-1 1v2l-1 1v2l-1 1v3l-1 1v5l-1 1v5l-1 1v19l1 1v2l1 1v1h1l1 1h3l1-1h2l7-7v-1l2-2v-1l1-1v-1l2-2v-2l1-1v-1l1-1v-1l1-1v-3l1-1v-3l1-1v-1h-1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-5 5h-1l-1 1-2-2v-9l-1-1v-2l1-1v-2l1-1h2l1-1h1l4-4v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-2l2-2v-2l1-1v-1l1-1v-2l1-1v-3l-2-2v-1h-1l-1-1ZM137 100l-2 2h-1l-1 1h-1l-4 4h-1l-4 4v1l-3 3v1l-2 2v1l-1 1v1l-1 1v1l-1 1v4l1 1h3l1-1v-2l1-1v-2l1-1v-1l1-1v-1l1-1v-1l3-3v-1l5-5h1v-1l6-6h1v-1ZM259 88l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-3 3h-1l-4 4h-1l-17 17v2l2 2h1l1-1h1l2-2v-1l13-13h1l4-4h1l3-3h1l2-2h1l2-2h1l1-1v-1l1-1-1-1ZM80 72l-1 1h-6l-1 1h-3l-1 1h-2l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-2 2h-1l-2 2h-1l-2 2h-1l-4 4h-1l-4 4h-1l-6 6h-1l-9 9v1l-4 4v1l-2 2v1l-3 3v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-1 1v3l-1 1v7l1 1-1 1 1 1v1l3 3h1l1 1h1l1 1h1l1 1h2l1 1h16l1 1 1-1h19l1-1h15l2 2v1l-1 1v2l-1 1v1l-3 3v1l-4 4v1l-1 1h-1v1l-12 12h-1l-2 2h-1l-2 2h-1l-1 1h-1l-1 1h-2l-1 1h-4l-1 1H18l-1-1-1 1v2l1 1h1l1 1h3l1 1h1l1-1h10l1-1h2l1-1h1l1-1h1l1-1h1l1-1h1l5-5h1l4-4v-1l1-1h1l5-5v-1l4-4v-1l2-2v-1l3-3v-1l1-1v-1l1-1v-5l-1-1v-1h-1l-1-1h-4l-1-1h-6l-1 1H51l-1 1H18l-1-1h-2l-1-1h-3l-2-2H8l-1-1v-1l-1-1v-1l-1-1v-3l1-1v-3l1-1v-1l1-1v-2l1-1v-1l1-1v-1l1-1v-1l2-2v-1l3-3v-1l4-4v-1l8-8v-1l1-1h1l10-10h1l5-5h1l2-2h1l3-3h1l1-1h1l2-2h1l1-1h1l1-1h1l1-1h1l1-1h2l1-1h4l1-1h9l1 1h4l1 1h2l1 1h1l1 1h1l1 1h1l4 4v2l-1 1v1l-2 2v1l-12 12h-1l-4 4h-1l-1 1h-1l-2 2h-1l-2 2h-1l-1 1h-2l-1 1h-1l-1 1h-7l-1 1v2l1 1h1l1 1h4l1-1h3l1-1h1l1-1h1l1-1h1l1-1h1l1-1h1l2-2h1l2-2h1l3-3h1l5-5h1l2-2v-1l1-1h1v-1l4-4v-1l2-2v-1l1-1v-2l1-1v-2l-1-1v-1l-3-3h-1l-2-2h-1l-1-1h-1l-1-1h-1l-1-1h-2l-1-1h-4l-1-1ZM238 68l-1 1h-1l-4 4h-1l-4 4h-1l-10 10v1l-3 3v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-1 1v1l-1 1h-1l-1-1v-3l-1-1v-1l-1-1h-3l-1 1v2l1 1v29l-1 1v10l-1 1v2l1 1v5h1l1 1 1-1h1l1-1v-14l1-1v-11l1-1v-4l1-1v-2l1-1v-2l1-1v-2l1-1v-2l1-1v-1l1-1v-2l1-1v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l2-2v-1l2-2v-1l16-16h1l3-3h2l1 1v3l3-3v-1l1-1v-1l-1-1v-2ZM171 40l-1 1h-1l-2 2v2l-1 1v1l-1 1v2l-1 1v1l-1 1v1l-1 1v3l-1 1v1l-1 1v3l-1 1v2l-1 1v3l-1 1v2l-1 1v2l-1 1v4l-1 1v4l-1 1v2l-1 1v5l-1 1v7l-1 1v8l-1 1v1l1 1v1l-1 1v1l-4 4v1l-2 2v1l-1 1v1l-1 1v1l-1 1v2l-1 1v2l-1 1v2l-1 1v2l-1 1v1l-1 1v4l-1 1v3l-1 1v5l-1 1v7l-1 1v1l1 1v7l1 1v1h1l1 1h5l5-5v-1l1-1v-2l1-1v-2l1-1v-3l1-1v-3l1-1v-2l1-1h1l1 1h5l2-2v-1l1-1v-6h-2v1l-1 1v2l-1 1h-1l-1-1v-3l-1-1v-7l1-1v-2l1-1v-3l1-1v-2l1-1v-5l1-1v-3l1-1v-5l1-1v-3l1-1v-6l1-1v-3l1-1v-4l1-1v-4l1-1v-7l1-1v-5l1-1v-7l1-1v-5l1-1v-5l1-1v-3l1-1v-3l1-1v-1l1-1v-4l-1-1Z"
//     stroke="blue-300"
//     strokeWidth="5"
//   />
// </svg>
//                    </div>
                  
//                 </div>
//                 <motion.svg
//               initial={{ opacity: 0.2, y: 0 }}
//               animate={{ opacity: 1, y: "10px" }}
//               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               width={50}
//               height={50}
//             >
//               <path
//                 d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
//                 stroke="#000000"
//                 strokeWidth="1"
//               ></path>
//               <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
//               <path
//                 d="M15 11L12 14L9 11"
//                 stroke="#000000"
//                 strokeWidth="1"
//               ></path>
//             </motion.svg>
          
//             <div className="flex flex-col gap-12 justify-center "> 
//                    <h1 className="font-bold text-2xl">SKILLS</h1>
//                  {/* // Spiderman skills */}
//                  <div className="flex gap-4 flex-wrap">
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Wall-Crawling</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Spider-Sense</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Enhanced Speed</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Wall-Crawling</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Enhanced Durability</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Web-Shooting</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Hand-to-Hand Combat</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Genius Intellect</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Superhuman Strength</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Master Acrobat</div>
//   <div className="rounded p-2 text-sm cursor-pointer bg-blue-300-400 text-red-200 hover:bg-red-500 hover:text-blue-300">Superhuman Agility</div>
// </div>

// <motion.svg
//               initial={{ opacity: 0.2, y: 0 }}
//               animate={{ opacity: 1, y: "10px" }}
//               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               width={50}
//               height={50}
//             >
//               <path
//                 d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
//                 stroke="#000000"
//                 strokeWidth="1"
//               ></path>
//               <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
//               <path
//                 d="M15 11L12 14L9 11"
//                 stroke="#000000"
//                 strokeWidth="1"
//               ></path>
//             </motion.svg>
//             </div>
//                  {/* // Spiderman experience */}
//             <div className="flex flex-col gap-12 justify-center pb-48 "> 
//                    <h1 className="font-bold text-2xl">EXPERIENCE</h1>
//                   {/*Experience List*/}
//                   <div className="">
//                     <div className="flex justify-between h-48">
//                         {/*left*/}
//                         <div className="w-1/3 ">
//                             <div className="bg-red-text-red-700 p-3 font-semibold rounded-b-lg rounded-s-lg">Heroic Vigilante & Defender of Justice</div>
//                             <div className="p-3 text-sm italic">Spider-Man has years of experience battling street-level crime and world-threatening villains. </div>
//                             <div className="text-red-400 text-sm font-semibold">2025- Present</div>
//                             <div className="p-1 rounded bg-red-text-red-700 text-sm font font-semibold w-fit">New-York</div>
//                         </div>
//                         {/*center*/}
//                         <div className="w-1/6 flex justify-center">
//                           {/*Line*/}
//                           <div className="w-1 h-full bg-gray-600 rounded relative">
//                             {/*circle*/}
//                             <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-text-red-700 -left-2"></div>
//                           </div>
//                         </div>
//                         {/*right*/}
//                         <div className="w-1/3"> <div className="bg-red-text-red-700 p-3 font-semibold rounded-b-lg rounded-s-lg">Heroic Vigilante & Defender of Justice</div>
//                             <div className="p-3 text-sm italic">Spider-Man has years of experience battling street-level crime and world-threatening villains. </div>
//                             <div className="text-r ed-400 text-sm font-semibold">2025- Present</div>
//                             <div className="p-1 rounded bg-red-text-red-700 text-sm font font-semibold w-fit">New-York</div></div>
//                     </div>
//                     <div className="flex justify-between h-48">
//                         {/*left*/}
//                         <div className="w-1/3 ">
//                             <div className="bg-red-text-red-700 p-3 font-semibold rounded-b-lg rounded-s-lg">Heroic Vigilante & Defender of Justice</div>
//                             <div className="p-3 text-sm italic">Spider-Man has years of experience battling street-level crime and world-threatening villains. </div>
//                             <div className="text-red-400 text-sm font-semibold">2025- Present</div>
//                             <div className="p-1 rounded bg-red-text-red-700 text-sm font font-semibold w-fit">New-York</div>
//                         </div>
//                         {/*center*/}
//                         <div className="w-1/6 flex justify-center">
//                           {/*Line*/}
//                           <div className="w-1 h-full bg-gray-600 rounded relative">
//                             {/*circle*/}
//                             <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-text-red-700 -left-2"></div>
//                           </div>
//                         </div>
//                         {/*right*/}
//                         <div className="w-1/3 "></div>
//                     </div>
                   
//                     </div> 
//             </div>
//         </div>
//         </div>
//         {/*svg container*/}
//         <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2 ">
        
//         </div>
//     </div>
//   </motion.div>
         
//   );
// }



// 'use client';
// import { motion } from "framer-motion";
// import Image from "next/image"; // Import the Image component

// export default function StaticScroll() {
//   return (
//     <motion.div
//       className="h-full bg-slate-900" // Changed background color to slate
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       {/* Main Container */}
//       <div className="h-full lg:flex">
//         {/* Sticky Background Image Container (Left Side) */}
//         <div className="hidden lg:block w-2/3 sticky top-0 h-screen z-30">
//           <div className="h-full w-full relative">
//             <Image
//               src="/spiderman_web.webp" // Image from the public folder
//               alt="Spider-Man Web"
//               fill
//               className="object-cover opacity-70" // Added opacity to blend the image
//               style={{ position: "absolute" }}
//             />
//           </div>
//         </div>

//         {/* Text Container (Biography, Skills, Experience) - Right Side */}
//         <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pl-0 xl:w-2/3">
//           {/* Biography Section */}
//           <div className="flex flex-col gap-12 justify-center">
//             <h1 className="font-bold text-2xl text-red-700">BIOGRAPHY</h1>
//             <p className="text-lg text-slate-300">
//               Spider-Man, also known as Peter Parker, is a Marvel Comics superhero created by writer Stan Lee and artist Steve Ditko. First appearing in *Amazing Fantasy #15* (1962), Peter Parker gains spider-like abilities after being bitten by a radioactive spider. Balancing his personal life and superhero duties, he fights crime in New York City using his agility, web-shooters, and intellect. Guided by his uncle Ben’s words, “With great power comes great responsibility,” Spider-Man remains one of the most beloved and relatable superheroes of all time.
//             </p>
//             <span className="italic text-slate-300">
//               With great power comes great responsibility.
//             </span>
//           </div>

//           {/* Skills Section */}
//           <div className="flex flex-col gap-12 justify-center">
//             <h1 className="font-bold text-2xl text-red-700">SKILLS</h1>
//             <div className="flex gap-4 flex-wrap">
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Wall-Crawling</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Spider-Sense</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Enhanced Speed</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Enhanced Durability</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Web-Shooting</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Hand-to-Hand Combat</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Genius Intellect</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Superhuman Strength</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Master Acrobat</div>
//               <div className="rounded p-2 text-sm cursor-pointer bg-blue-300 text-red-700 hover:bg-red-text-red-700 hover:text-blue-300">Superhuman Agility</div>
//             </div>
//           </div>

//           {/* Experience Section */}
//           <div className="flex flex-col gap-12 justify-center pb-48">
//             <h1 className="font-bold text-2xl text-red-700">EXPERIENCE</h1>
//             <div className="">
//               {/* Experience List Item 1 */}
//               <div className="flex justify-between h-48">
//                 {/* Left */}
//                 <div className="w-1/3">
//                   <div className="bg-red-text-red-700 p-3 font-semibold rounded-b-lg rounded-s-lg">Heroic Vigilante & Defender of Justice</div>
//                   <div className="p-3 text-sm italic text-slate-300">Spider-Man has years of experience battling street-level crime and world-threatening villains.</div>
//                   <div className="text-red-400 text-sm font-semibold">2025 - Present</div>
//                   <div className="p-1 rounded bg-red-text-red-700 text-sm font-semibold w-fit">New York</div>
//                 </div>
//                 {/* Center */}
//                 <div className="w-1/6 flex justify-center">
//                   {/* Line */}
//                   <div className="w-1 h-full bg-gray-600 rounded relative">
//                     {/* Circle */}
//                     <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-text-red-700 -left-2"></div>
//                   </div>
//                 </div>
//                 {/* Right */}
//                 <div className="w-1/3"></div>
//               </div>

//               {/* Experience List Item 2 */}
//               <div className="flex justify-between h-48">
//                 {/* Left */}
//                 <div className="w-1/3">
//                   <div className="bg-red-text-red-700 p-3 font-semibold rounded-b-lg rounded-s-lg">Web-Slinger</div>
//                   <div className="p-3 text-sm italic text-slate-300">Spider-Man has mastered the art of web-slinging, using it to traverse the city and combat villains.</div>
//                   <div className="text-red-400 text-sm font-semibold">2005 - 2010</div>
//                 </div>
//                 {/* Center */}
//                 <div className="w-1/6 flex justify-center">
//                   {/* Line */}
//                   <div className="w-1 h-full bg-gray-600 rounded relative">
//                     {/* Circle */}
//                     <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-text-red-700 -left-2"></div>
//                   </div>
//                 </div>
//                 {/* Right */}
//                 <div className="w-1/3"></div>
//               </div>

//               {/* Experience List Item 3 */}
//               <div className="flex justify-between h-48">
//                 {/* Left */}
//                 <div className="w-1/3">
//                   <div className="bg-red-text-red-700 p-3 font-semibold rounded-b-lg rounded-s-lg">Photographer</div>
//                   <div className="p-3 text-sm italic text-slate-300">Peter Parker worked as a photographer for the Daily Bugle, capturing iconic images of Spider-Man.</div>
//                   <div className="text-red-400 text-sm font-semibold">2002 - 2005</div>
//                 </div>
//                 {/* Center */}
//                 <div className="w-1/6 flex justify-center">
//                   {/* Line */}
//                   <div className="w-1 h-full bg-gray-600 rounded relative">
//                     {/* Circle */}
//                     <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-text-red-700 -left-2"></div>
//                   </div>
//                 </div>
//                 {/* Right */}
//                 <div className="w-1/3"></div>
//               </div>

//               {/* Experience List Item 4 */}
//               <div className="flex justify-between h-48">
//                 {/* Left */}
//                 <div className="w-1/3"></div>
//                 {/* Center */}
//                 <div className="w-1/6 flex justify-center">
//                   {/* Line */}
//                   <div className="w-1 h-full bg-gray-600 rounded relative">
//                     {/* Circle */}
//                     <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-text-red-700 -left-2"></div>
//                   </div>
//                 </div>
//                 {/* Right */}
//                 <div className="w-1/3">
//                   <div className="bg-red-text-red-700 p-3 font-semibold rounded-b-lg rounded-s-lg">Freelance Hero</div>
//                   <div className="p-3 text-sm italic text-slate-300">Spider-Man has worked independently, protecting New York City from various threats.</div>
//                   <div className="text-red-400 text-sm font-semibold">2010 - 2025</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }



'use client';
import { motion, useScroll } from "framer-motion";
import { useRef } from 'react';
import Image from "next/image";

export default function StaticScroll() {
  const experienceRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: experienceRef, 
    offset: ['start end', 'end end'], 
  });

  return (
    <motion.div
      className="h-full bg-gradient-to-r from-red-600/50 via-blue-600/50 to-blue-600/50" // Red and blue gradient
      animate={{ y: "0%" }} // Ensure it stays in its correct position
    >
      {/* Main Container */}
      <div className="h-full lg:flex">
        {/* Sticky Background Image Container (Left Side) */}
        <div className="hidden lg:block w-2/3 sticky top-0 h-screen z-30">
          <div className="h-full w-full relative">
            <Image
              src="./spiderman_web.webp" // Image from the public folder
              alt="Spider-Man Web"
              fill
              className="object-cover opacity-70" // Added opacity to blend the image
              style={{ position: "absolute" }}
            />
          </div>
        </div>

        {/* Text Container (Biography, Skills, Experience) - Right Side */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-4 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pl-0 xl:w-2/3">
          <div className="flex flex-col gap-10 justify-center">
            {/* Biography Section */}
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="font-bold text-2xl text-red-500">BIOGRAPHY</h1>
              <p className="text-lg text-blue-900"> {/* Adjusted text color for better contrast */}
                Spider-Man, also known as Peter Parker, is a Marvel Comics superhero created by writer Stan Lee and artist Steve Ditko. First appearing in *Amazing Fantasy #15* (1962), Peter Parker gains spider-like abilities after being bitten by a radioactive spider. Balancing his personal life and superhero duties, he fights crime in New York City using his agility, web-shooters, and intellect. Guided by his uncle Ben’s words, “With great power comes great responsibility,” Spider-Man remains one of the most beloved and relatable superheroes of all time.
              </p>
              <span className="italic text-red-700 underline"> {/* Adjusted text color for better contrast */}
                I only shoot web
              </span>
            </div>

            {/* SVG Container with No Gap */}
            <div>
              <motion.svg
                initial={{ opacity: 10, y: 0 }}
                animate={{ opacity: 10, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={70}
                height={70}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#FFFFFF" 
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#FFFFFF" strokeWidth="1"></path> 
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#FFFFFF" 
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-center">
            {/* Skills Section */}
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="font-bold text-2xl text-red-500">SKILLS</h1>
              <div className="flex gap-4 flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Wall-Crawling</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Spider-Sense</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Enhanced Speed</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Enhanced Durability</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Web-Shooting</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Hand-to-Hand Combat</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Genius Intellect</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Superhuman Strength</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Master Acrobat</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-blue-200 text-red-700 hover:bg-red-700 hover:text-blue-300">Superhuman Agility</div>
              </div>
            </div>

            {/* SVG Container with Reduced Gap */}
            <div className="mt-4">
              <motion.svg
                initial={{ opacity: 10, y: 0 }}
                animate={{ opacity: 10, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={70}
                height={70}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#FFFFFF" 
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#FFFFFF" strokeWidth="1"></path> 
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#FFFFFF" 
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>

          {/* Experience Section */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <h1 className="font-bold text-2xl text-red-500">EXPERIENCE</h1>
            <div className="relative">
              {/* Animated Line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-600 rounded origin-top"
                style={{ scaleY: scrollYProgress }} // Animate the line based on scroll progress
              />

              {/* Experience List Item 1 */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  <div className="bg-red-500 p-3 font-semibold rounded-b-lg rounded-s-lg">Heroic Vigilante</div>
                  <div className="p-3 text-sm italic text-blue-900">
                    Spider-Man has years of experience battling street-level crime and world-threatening villains.
                  </div>
                  <div className="text-red-400 text-sm font-semibold pb-2">2025 - Present</div>
                </div>
                {/* Center - Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-700"></div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>

              {/* Experience List Item 2 */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  <div className="bg-red-500 p-3 font-semibold rounded-b-lg rounded-s-lg">Web-Slinger</div>
                  <div className="p-3 text-sm italic text-blue-900">
                    Spider-Man has mastered the art of web-slinging, using it to traverse the city and combat villains.
                  </div>
                  <div className="text-red-400 text-sm font-semibold">2005 - 2010</div>
                </div>
                {/* Center - Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-700"></div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>

              {/* Experience List Item 3 */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  <div className="bg-red-500 p-3 font-semibold rounded-b-lg rounded-s-lg">Photographer</div>
                  <div className="p-3 text-sm italic text-blue-900">
                    Peter Parker worked as a photographer for the Daily Bugle, capturing iconic images of Spider-Man.
                  </div>
                  <div className="text-red-400 text-sm font-semibold">2002 - 2005</div>
                </div>
                {/* Center - Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-700"></div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>

              {/* Experience List Item 4 */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3"></div>
                {/* Center - Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-red-700"></div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  <div className="bg-red-500 p-3 font-semibold rounded-b-lg rounded-s-lg">Freelance Hero</div>
                  <div className="p-3 text-sm italic text-blue-900">
                    Spider-Man has worked independently, protecting New York City from various threats.
                  </div>
                  <div className="text-red-400 text-sm font-semibold">2010 - 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Animation Section */}
          <div className="w-full h-24 relative overflow-hidden flex items-center">
            <motion.div
              className="absolute flex space-x-8"
              animate={{ x: ["0%", "-100%"] }} // Moves left infinitely
              transition={{
                repeat: Infinity, // Infinite loop
                duration: 120, // Speed of movement
                ease: "linear", // Smooth animation
              }}
            >
              {/* Using an array to map over and generate infinite text */}
              {[...Array(10)].map((_, index) => (
                <h1
                  key={index}
                  className="text-8xl font-bold text-red-700 whitespace-nowrap"
                >
                  <span className="text-blue-900/80">Here comes the</span> Spider-Man! 🕷️
                </h1>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}