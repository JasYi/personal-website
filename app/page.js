"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import RightDisplay from "@/components/right_page";
import { Poppins } from "next/font/google";
import { isMobile } from "../utils/deviceDetect";
// import githubLogo from "/github.svg";
// import linkedinLogo from "/linkedin.svg";
// import resumeLogo from "/resume.svg";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// const Conditional = (showWhen, children) => {
//   if (showWhen) return <>{children}</>;
//   return <></>;
// };

export default function Home() {
  const [section, setSection] = useState(0);

  const [width, setWidth] = useState(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  function handleOnClick(selector) {
    setSection(selector);
  }

  return isMobile ? (
    <h1>This website is not optimized for mobile, please open on desktop :)</h1>
  ) : (
    <main className="flex flex-col md:flex-row ">
      <div className="w-1/2 flex flex-col pl-4">
        <h1 className="text-[10rem] font-bold">Hello,</h1>
        <h2 className="text-5xl pb-3">
          I'm Jason Yi, a Junior at Georgetown and a...
        </h2>
        <div className="flex flex-col">
          <button
            onClick={() => handleOnClick(1)}
            className="text-left text-4xl py-1 w-fit group transition duration-300">
            Web/App Developer
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </button>
          <button
            onClick={() => handleOnClick(2)}
            className="text-left text-4xl py-1 w-fit group transition duration-300">
            User First Engineer
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </button>
          {/* <button
            onClick={() => handleOnClick(3)}
            className="text-left text-4xl py-1 w-fit group transition duration-300">
            Data Scientist
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </button> */}
          <button
            onClick={() => handleOnClick(4)}
            className="text-left text-4xl py-1 w-fit group transition duration-300">
            Foodie
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 mb-20">
        <RightDisplay toggle={section} />
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-white text-black py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/jason-yi1/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={"/linkedin.svg"}
              alt="LinkedIn"
              className="h-8 w-8 hover:opacity-75"
            />
          </a>
          <a
            href="https://github.com/JasYi"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={"/github.svg"}
              alt="GitHub"
              className="h-8 w-8 hover:opacity-75"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1dqClxbGN32x-VgyBo5znv6MQ3tGmlMXl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={"/resume.svg"}
              alt="Resume"
              className="h-8 w-8 hover:opacity-75"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
