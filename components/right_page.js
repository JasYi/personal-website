"use client";

import "./right_page.css";
import { useState } from "react";

export default function RightDisplay({ toggle }) {
  // keeps track of the state in this component, have to seperate from toggle to give animations time to animate
  const [display, setDisplay] = useState(toggle);

  const inAnimation = {
    animation: "1s ease-out 0s 1 forwards slideInFromRight",
  };
  const outAnimation = {
    animation: "1s ease-out 0s 1 forwards slideOutToRight",
  };

  switch (display) {
    case 1:
      return (
        <h1
          className="right-content"
          style={toggle == 1 ? inAnimation : outAnimation}
          onAnimationEnd={() => {
            setDisplay(toggle);
          }}
        >
          Web/App Developer
        </h1>
      );
      break;
    case 2:
      return (
        <h1
          className="right-content"
          style={toggle == 2 ? inAnimation : outAnimation}
          onAnimationEnd={() => setDisplay(toggle)}
        >
          Civic Tech Enthusiast
        </h1>
      );
      break;
    case 3:
      return (
        <h1
          className="right-content"
          style={toggle == 3 ? inAnimation : outAnimation}
          onAnimationEnd={() => setDisplay(toggle)}
        >
          Data Scientist
        </h1>
      );
      break;
    case 4:
      return (
        <h1
          className="right-content"
          style={toggle == 4 ? inAnimation : outAnimation}
          onAnimationEnd={() => setDisplay(toggle)}
        >
          Foodie
        </h1>
      );
      break;
    default:
      return (
        <h1
          className="right-content"
          style={toggle < 1 ? inAnimation : outAnimation}
          onAnimationEnd={() => setDisplay(toggle)}
        >
          Case0
        </h1>
      );
  }
}
