"use client";

import "./right_page.css";
import { useState } from "react";
import WebAppDevPage from "./webapp/web_app_dev";
import CivicTechPage from "./civictech/civic_tech_page";
import DataSciPage from "./datasci/data_sci_page";
import FoodiePage from "./foodie/foodie_page";

export default function RightDisplay({ toggle }) {
  // keeps track of the state in this component, have to seperate from toggle to give animations time to animate
  const [display, setDisplay] = useState(toggle);

  const inAnimation = {
    animation: "0.8s ease-out 0s 1 forwards slideInFromRight",
  };
  const outAnimation = {
    animation: "0.8s ease-out 0s 1 forwards slideOutToRight",
  };

  switch (display) {
    case 1:
      return (
        <div
          className="right-content pt-32 w-11/12 float-right"
          style={toggle == 1 ? inAnimation : outAnimation}
          onAnimationEnd={() => {
            setDisplay(toggle);
          }}>
          <WebAppDevPage />
        </div>
      );
      break;
    case 2:
      return (
        <div
          className="right-content pt-32 w-11/12 float-right"
          style={toggle == 2 ? inAnimation : outAnimation}
          onAnimationEnd={() => setDisplay(toggle)}>
          <CivicTechPage />
        </div>
      );
      break;
    case 3:
      return (
        <div
          className="right-content pt-32 w-11/12 float-right"
          style={toggle == 3 ? inAnimation : outAnimation}
          onAnimationEnd={() => setDisplay(toggle)}>
          <DataSciPage />
        </div>
      );
      break;
    case 4:
      return (
        <div
          className="right-content pt-32 w-11/12 float-right"
          style={toggle == 4 ? inAnimation : outAnimation}
          onAnimationEnd={() => setDisplay(toggle)}>
          <FoodiePage />
        </div>
      );
      break;
    default:
      return (
        <h1
          className="right-content pt-32 w-11/12 mr-4 float-right"
          style={toggle < 1 ? inAnimation : outAnimation}
          onAnimationEnd={() => setDisplay(toggle)}></h1>
      );
  }
}
