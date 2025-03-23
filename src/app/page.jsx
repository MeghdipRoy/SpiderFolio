// const Homepage = () => {
//   return <div>Hello World Nigga</div>;
// };

// export default Homepage;


import Paragraph from "../components/Paragraph";
 import StaticScroll from '../components/StaticScroll';
import ContinuousAnim from '../components/ContinuousAnim';
import Layout from "@/components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import HireMe from "@/components/HireMe";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <main className="">
      <div className="flex items-center w-full min-h-screen bg-gradient-to-r from-red-600/50 via-blue-600/50 to-blue-600/50 relative">
      {/* Absolute positioned icons in the top-right corner */}
      <div className="absolute top-4 right-4 flex space-x-8 z-50">
        <a href="https://github.com/MeghdipRoy" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-white hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/meghdip-roy-046764249/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-white hover:text-blue-400 transition-colors" />
        </a>
      </div>

      <Layout className="pt-0">
        {/* Flex container to align image and text side by side */}
        <div className="flex items-center justify-between w-full">
          {/* Image container with adjusted positioning and added margin */}
          <div className="p-2 flex justify-end items-center w-1/2 mr-12">
            <Image 
              src="/SpiderMandy.jpg" 
              alt="SpiderMandy"
              width={500} 
              height={500} 
              className="rounded-full"
            />
          </div>
          {/* Text container with added margin */}
          <div className="w-1/2 flex flex-col items-center self-center ml-12">
            <AnimatedText text="Swinging Through Code, One Bug at a Time!" className="!text-6xl !text-left"/>
            <p className="my-4 text-lg sm:text-xl md:text-xl font-medium text-white">
              In a world of web developers, one coder swings above the rest—SpiderMandy! Merging the agility of Spider-Man with the precision of programming, this is where superhero instincts meet cutting-edge code. Whether scaling skyscrapers or debugging lines of JavaScript, SpiderMandy proves that great power comes with great coding skills.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link href="/MeghdipRoy___52221205.pdf" target={"_blank"}
                className="flex items-center bg-blue-300 text-red-900 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 hover:text-blue-400 
                border-2 border-solid border-transparent hover:border-gray-900"
                download={true}
              >
                Resume <HiExternalLink className="w-6 ml-1"/>
              </Link>
              <Link href="mailto:meghdiproy23234@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-red-900 underline"
              >
                Contact
              </Link>
            </div> 
          </div>
        </div>
      </Layout>
      <HireMe />
    </div>

      <Paragraph className=" text-[60px] sm:text-[40px] max-w-[1280px] px-10 py-6 leading-tight flex flex-wrap" />
      {/* <div style={{ height: "1vh" }}></div>  */}
      <StaticScroll />
    </main>
  );
}