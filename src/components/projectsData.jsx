import LokitRedesign from "../projects/LokitRedesign";
import Artportfolio from "../projects/Artportfolio";
import Notetaker from "../projects/Notetaker";
import Festivalwebsite from "../projects/Festivalwebsite";

const projects = [
  {
    id: "lokit-redesign",
    title: "Website Redesign for Tampereen Lokit Ry",
    image: "/img/lokit_thumbnail.png",
    component: LokitRedesign,
    links: [
      { label: "View website", url: "https://tampereenlokit.fi/" },
    ],
    techStack: ["Figma", "CSS", "Tilda.cc"],
    description: "A complete redesign of the Tampereen Lokit scouts group website, covering user flows, content structure, visual identity, and the final implementation on Tilda.cc."

  },

  {
    id: "art-portfolio",
    title: "Art Portfolio Website",
    image: "/img/artportfolio_thumbnail.png",
    component: Artportfolio,
    links: [
      { label: "View website", url: "https://hennamarleena.netlify.app/" },
      { label: "GitHub", url: "https://github.com/hennamarleena/ArtPortfolio" }
    ],
    techStack: ["React",
      "HTML/CSS", "Illustrator", "Zustand", "Material UI", "Web3Forms", "Yet Another React Lightbox", "Netlify"],
    description: "Personal art portfolio showcasing collage artwork with a responsive gallery, a category filter, and a contact form. Built with React.js."

  },


  {
    id: "Notetaker",
    title: "NoteTaker 2.0",
    image: "/img/notetaker_thumbnail.png",
    component: Notetaker,
    links: [
      { label: "View demo website", url: "https://notetaker2-demo.netlify.app/" },
      { label: "GitHub", url: "https://github.com/hennamarleena/Notetaker-2.0" }
    ],
    techStack: ["React", "HTML/CSS", "Zustand", "Mantine Component Library", "React Router", "Netlify", "ChatGPT"],
    description: "A React-based lecture note management app that allows users to save and retrieve courses and notes."
  },

  
  {
    id: "Festivalwebsite",
    title: "Festival Website Concept",
    image: "/img/neonwaves-thumbnail.jpg",
    component: Festivalwebsite,
    links: [
      { label: "View mobile prototype", url: "https://www.figma.com/proto/lRk8TzGPxnD2tZiBrRXVWL/Neonwaves-mobile?..." },
      { label: "View desktop prototype", url: "https://www.figma.com/proto/SgYV3k6ymvQhQrs2T9xP1E/Neonwaves-desktop?..." },
    ],
    techStack: ["Figma", "Adobe Illustrator", "Adobe Firefly AI"],
    description: "Figma-based website concept for a fictional electronic music festival. Designed to capture the rave atmosphere and streamline ticket purchases."

  }
];

export default projects;

