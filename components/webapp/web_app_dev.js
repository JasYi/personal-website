import "../right_page.css";
import Project from "./project";
import { React, useEffect, useState } from "react";

export default function WebAppDevPage() {
  const projects = [
    {
      name: "Splitify",
      tech: ["React", "Flask", "OAuth2.0", "Spotify API"],
      description: "Splitting your large Spotify playlists into subplaylists",
      link: "https://splitify-jasyi.vercel.app/",
      img: "/splitify.png",
    },
    {
      name: "Oyster",
      tech: ["React", "FastAPI", "MongoDB"],
      description:
        "Connecting small businesses to investors | Winner @ Georgetown Hackathon '24",
      link: "https://devpost.com/software/project-yay-bpqg7y",
      img: "/oystergif.gif",
    },
    {
      name: "XLR8",
      tech: ["React", "ElectronJS", "AWS", "FPGAs"],
      description:
        "Creating better developer tools for hardware engineers working with FPGAs | Stanford Hackathon '24",
      link: "https://devpost.com/software/xlr8",
      img: "/xlr8.jpg",
    },
  ];
  return (
    <>
      {projects == [] ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h3 className="text-3xl">
            I love making small projects on random things that I find
            interesting.
          </h3>
          <div className="project-container">
            <Project data={projects} />
          </div>
        </>
      )}
    </>
  );
}
