"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import RightDisplay from "@/components/right_page";
import { Poppins } from "next/font/google";
import { isMobile } from "../utils/deviceDetect";

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

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
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
      <div className="w-1/2 flex flex-col">
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
            Civic Tech Enthusiast
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </button>
          <button
            onClick={() => handleOnClick(3)}
            className="text-left text-4xl py-1 w-fit group transition duration-300">
            Data Scientist
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </button>
          <button
            onClick={() => handleOnClick(4)}
            className="text-left text-4xl py-1 w-fit group transition duration-300">
            Foodie
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <RightDisplay toggle={section} />
      </div>
    </main>
  );
}
