import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [opened, setOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle opening project details
  const handleViewProject = (projectData) => {
    setSelectedProject(projectData);
    setOpened(true);
  };

  const projects = [
    {
      title: "Art Portfolio Website",
      image: "/img/artportfolio-thumbnail.png",
      description: "A personal art portfolio showcasing collage artwork with a responsive gallery, a category filter, and a contact form. Built with React.js.",
      techStack: ["React", "HTML/CSS", "Illustrator", "Zustand", "Material UI", "Web3Forms", "Yet Another React Lightbox", "Netlify"],
      research: [],
      styles: [],
      overview: `
      This web project is showcasing my collage artwork.
      The goal was to create a minimalist design where a clean layout keeps the focus on the artwork.
      <br>
      <br>
      <ul>
        <li>Dynamic grid layout that adapts to different screen sizes</li>
        <li>Category-based filtering for collage types</li>
        <li>View individual pieces in a full-screen lightbox mode with smooth navigation</li>
        <li>The frontend, hosted on Netlify, is built with React.js and styled using Material UI</li>
        <li>Zustand handles state management, while React Router ensures navigation</li>
      </ul>
      <br>
      The digital collages were created with Adobe Photoshop and Adobe Illustrator.  
      `,
      links: [
        { type: "github", url: "https://github.com/hennamarleena/ArtPortfolio", label: "GitHub" },
        { type: "website", url: "https://hennamarleena.netlify.app/", label: "View website" }
      ],
      extraImages: []
    },
    {
      title: "Festival Website Concept",
      image: "/img/neonwaves-thumbnail.jpg",
      description: "A conceptual website layout and prototypes for a music and culture festival.",
      overview: `
        A conceptual website project for a fictional electronic music and culture festival that offers live performances, cultural and artistic workshops, panel discussions, and light art installations. 
        The aim was to design a website concept that embodies the festival's atmosphere, engages visitors, 
        and inspires them to explore the event — ultimately leading to ticket purchases.
        The main goal of the website is to sell tickets.
      `,
      techStack: ["Figma", "Adobe Illustrator"],
      research: `
        I analysed several festival websites and identified trends and effective solutions that I could apply to the project. 
        The following features were implemented to support the project goal:
        <br><br>
        <ul>
          <li><strong>Persistent ticket purchase links </strong> in the header and footer for easy access.</li>
          <li><strong>Collapsible info sections</strong> for a cleaner layout and better navigation.</li>
          <li><strong>Festival program filtering </strong> by date or event type.</li>
          <li><strong>Minimalist mobile navigation </strong> with a hamburger menu.</li>
        </ul>
      `,
      styles: `
        The design was inspired by futuristic and urban aesthetics, using neon colors against dark backgrounds to create a "rave" feeling. 
        I wanted to evoke the essence of electronic music through vibrant neon hues and smooth, flowing graphic elements.

        I used rounded corners and circular shapes to create more fluid and dynamic visual style reinforcing a sense of movement.

        <br><br>
        <ul>
          <li>Artist images and photographs</strong> were generated with Adobe Firefly AI.</li>
          <li>Graphics</strong> were designed using Adobe Illustrator.</li>
        </ul>
      `,
      links: [
        { type: "prototype", url: "https://www.figma.com/proto/lRk8TzGPxnD2tZiBrRXVWL/Neonwaves-mobile?node-id=1-2&p=f&t=g0oeUoMuAMxeBsL2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2", label: "Figma mobile prototype" },
        { type: "prototype", url: "https://www.figma.com/proto/SgYV3k6ymvQhQrs2T9xP1E/Neonwaves-desktop?t=apBmPUK2bVo8kPyt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=136-2&starting-point-node-id=136%3A2", label: "Figma desktop prototype" }
      ],
      extraImages: ["/img/neonwaves-wireframes.jpg", "/img/neonwaves-layouts.jpg", "/img/neonwaves-styles.jpg",]
    },


    {
      title: "NoteTaker 2.0",
      image: "/img/notetaker-thumbnail.png",
      description: "A React-based lecture note management app that allows users to save and retrieve courses and notes.",
      research: [],
      techStack: ["React", "HTML/CSS", "Zustand", "Mantine Component Library", "React Router", "Netlify"],
      "overview": `

    This note management app is a React project that was originally developed as a coursework assignment for a frontend course.
    After completing the original version, I wanted to further develop the project with a more polished user interface and improved functionality.
    NoteTaker 2.0 is an updated version of the app. Throughout the development of this project, I learned a lot about state management and component usage in React. 
    <br>
    <br>
    The app is primarily designed for desktop use.
    <br>
    <br>

    <h3>The original task</h3>
    <ul>
      <li>Save courses and class notes locally</li>
      <li>Fetch courses and notes from a REST API</li>
      <li>Add new courses and notes</li>
      <li>Delete notes</li>
      <li>Create notes within sessions, where each session is tied to a specific course</li>
      <li>Prevent access to the note creation view if there are no courses in the system</li>
      <li>Allow users to filter and view notes for a specific course using a dropdown menu</li>
    </ul>
    <br>
    <h3>What's new in version 2.0</h3>
    <ul>
      <li>New UI with sidebar navigation and active page highlights</li>
      <li>Improved usability with clearer instructions for user</li>
      <li>Harmonized color palette and modern design</li>
      <li>Fixed course creation ID issue: in the previous version, users had to provide the course ID when adding a new course</li>
    </ul>
    <br>
    The frontend is built with React.js, Mantine component library, and Zustand for state management. React Router handles navigation, and the demo app is deployed on Netlify.
  `,
      styles: [],
      links: [
        { type: "github", url: "https://github.com/hennamarleena/Notetaker-2.0", label: "GitHub" },
        { type: "demo", url: "https://notetaker2-demo.netlify.app/home", label: "Demo" }
      ],
      extraImages: ["/img/notetaker-layouts.png", "/img/notetaker-old.png", "/img/notetaker-styles.png"]
    }
  ];

  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2>Projects</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} projectData={project} onView={handleViewProject} />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal opened={opened} onClose={() => setOpened(false)} project={selectedProject} />
      )}
    </section>
  );
}
