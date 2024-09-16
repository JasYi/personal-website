import "../right_page.css";
import Project from "./project";
import { React, useEffect, useState } from "react";

export default function WebAppDevPage() {
  const projects = [
    {
      name: "Formulate",
      tech: ["React", "Convex", "GPT-4o", "Polaris"],
      description:
        "Instantly turn form images into live web forms | Hack the North '24",
      link: "https://www.formulate.live",
      img: "/Formulate_mockup.jpg",
    },
    {
      name: "Splitify",
      tech: ["React", "Flask", "OAuth2.0", "Spotify API"],
      description: "Splitting your large Spotify playlists into subplaylists",
      link: "https://splitify-jasyi.vercel.app/",
      img: "/splitify.png",
    },
    {
      name: "Filed.ai",
      tech: ["OCR", "GPT-4", "Flask", "NextJS"],
      description:
        "Filling out medical forms using computer vision and LLMs. | Winner @ H2AI Hackathon",
      link: "https://www.georgetown-h2ai.com/",
      img: "/filedai.png",
    },
    {
      name: "Infrared Image Translation",
      tech: ["GANs", "PyTorch"],
      description:
        "Translating visible light images to infrared images using GANs to detect pedestrians | Final Project for Graduate Level Class",
      link: "https://github.com/JasYi/CycleGAN-llvip",
      img: "/llvip.png",
    },
    {
      name: "XLR8",
      tech: ["React", "ElectronJS", "AWS", "FPGAs"],
      description:
        "Creating better developer tools for hardware engineers working with FPGAs | Stanford Hackathon '24",
      link: "https://devpost.com/software/xlr8",
      img: "/xlr8.jpg",
    },
    {
      name: "Oyster",
      tech: ["React", "FastAPI", "MongoDB"],
      description:
        "Connecting small businesses to investors | Winner @ Georgetown Hackathon '24",
      link: "https://devpost.com/software/project-yay-bpqg7y",
      img: "/oystergif.gif",
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
            interesting. Click the card to learn more!
          </h3>
          <div className="project-container">
            <Project data={projects} />
          </div>
        </>
      )}
    </>
  );
}
