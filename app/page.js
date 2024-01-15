"use client";

import Image from "next/image";
import "./home.css";
import { useState } from "react";
import RightDisplay from "@/components/right_page";

// const Conditional = (showWhen, children) => {
//   if (showWhen) return <>{children}</>;
//   return <></>;
// };

export default function Home() {
  const [section, setSection] = useState(0);

  function handleOnClick(selector) {
    setSection(selector);
  }

  return (
    <main className="wrapper">
      <div className="left-container">
        <h1 className="main-title">Hello,</h1>
        <h2 className="sub-title">
          I'm Jason Yi, a Sophomore at Georgetown and a...
        </h2>
        <button onClick={() => handleOnClick(1)} className="section-name">
          Web/App Developer
        </button>
        <button onClick={() => handleOnClick(2)} className="section-name">
          Civic Tech Enthusiast
        </button>
        <button onClick={() => handleOnClick(3)} className="section-name">
          Data Scientist
        </button>
        <button onClick={() => handleOnClick(4)} className="section-name">
          Foodie
        </button>
      </div>

      <div className="right-container">
        <RightDisplay toggle={section} />
      </div>
    </main>
  );
}
