const projects = [
  {
    id: "art-portfolio",
    title: "Art Portfolio Website",
    image: "/img/artportfolio_thumbnail.png",
    description:
      "A personal art portfolio showcasing collage artwork with a responsive gallery, a category filter, and a contact form. Built with React.js.",
    techStack: [
      "React",
      "HTML/CSS",
      "Illustrator",
      "Zustand",
      "Material UI",
      "Web3Forms",
      "Yet Another React Lightbox",
      "Netlify",
    ],
    research: [],
    styles: [],
    overview: `
      <p>This web project showcases my collage artwork. The goal was to create a minimalist design where a clean layout keeps the focus on the artwork.</p>
      
      <br>

      <ul>
        <li>Dynamic grid layout that adapts to different screen sizes</li>
        <li>Category-based filtering for collage types</li>
        <li>Full-screen lightbox mode with smooth navigation</li>
        <li>Frontend hosted on Netlify, built with React.js and styled using Material UI</li>
        <li>Zustand for state management, React Router for navigation</li>
      </ul>

      <br>

      <p>The digital collages were created with Adobe Photoshop and Adobe Illustrator.</p>
    `,
    links: [
      { type: "website", url: "https://hennamarleena.netlify.app/", label: "View website" },
      {
        type: "github",
        url: "https://github.com/hennamarleena/ArtPortfolio",
        label: "GitHub",
      },
    ],
    extraSections: [],
  },
  {
    
    id: "festival-website",
    title: "Festival Website Concept",
    image: "/img/neonwaves-thumbnail.jpg",
    description:
      "A conceptual website layout and prototypes for a music and culture festival.",
    overview: `
      <p>
        A conceptual website project for a fictional electronic music and culture festival. 
        The aim was to design a website concept that embodies the festival's atmosphere, 
        engages visitors, and inspires them to explore the event — ultimately leading to ticket purchases. 
        The main goal of the website is to sell tickets.
      </p>
    `,
    techStack: [
      "Figma", 
      "Adobe Illustrator",
      "Adobe Firefly AI"],
    research: `
      <p>
      I analysed several festival websites and identified trends and effective solutions that I could apply to the project. 
      The following features were implemented to support the project goal:
      </p>
      <br>
      <ul>
        <li>Persistent ticket purchase links in the header and footer for easy access.</li>
        <li>Collapsible info sections for a cleaner layout</li>
        <li>Festival program filtering by date or event type</li>
        <li>Minimalist mobile navigation with a hamburger menu</li>
      </ul>
    `,
    styles: `
    <p>
      The design was inspired by futuristic and urban aesthetics, using neon colors against dark backgrounds to create a "rave" feeling. 
      I wanted to evoke the essence of electronic music through vibrant neon hues and smooth, flowing graphic elements. 
      I used rounded corners and circular shapes to create more fluid and dynamic visual style reinforcing a sense of movement.
      </p>
      <br>
      <ul>
        <li>Artist images and photographs generated with Adobe Firefly AI</li>
        <li>Graphics were designed using Adobe Illustrator</li>
      </ul>
    `,
    links: [
      {
        type: "prototype",
        url: "https://www.figma.com/proto/lRk8TzGPxnD2tZiBrRXVWL/Neonwaves-mobile?...",
        label: "View mobile prototype",
      },
      {
        type: "prototype",
        url: "https://www.figma.com/proto/SgYV3k6ymvQhQrs2T9xP1E/Neonwaves-desktop?...",
        label: "View desktop prototype",
      },
    ],
  extraSections: [
  {
    title: "Wireframes",
    images: [
      "/img/neonwaves-wireframes.png"
    ]
  },
  {
    title: "Layouts",
    images: [
      "/img/neonwaves-home-view.png",
      "/img/neonwaves-program-view.png",
      "/img/neonwaves-tickets-view.png",
      "/img/neonwaves-info-view.png",
      "/img/neonwaves-styles-colorpalette.png",
      "/img/neonwaves-styles-typography.png"
    ]
  }
],

  },
  {
    id: "notetaker",
    title: "NoteTaker 2.0",
    image: "/img/notetaker_thumbnail.png",
    description:
      "A React-based lecture note management app that allows users to save and retrieve courses and notes.",
    techStack: [
      "React",
      "HTML/CSS",
      "Zustand",
      "Mantine Component Library",
      "React Router",
      "Netlify",
      "ChatGPT"
    ],
    overview: `
      <p>
        This note management app is a React project that was originally developed as a coursework assignment for a frontend course. 
        After completing the original version, I wanted to further develop the project with a more polished user interface and improved functionality. 
        NoteTaker 2.0 is an updated version of the app. 
        Throughout the development of this project, I learned a lot about state management and component usage in React. I used ChatGPT with technical problem solving.</p>

      <br>

      <p>The app is primarily designed for desktop use.</p>

      <br>

      <h4>The original requirements</h4>
      <ul>
        <li>Save courses and class notes locally</li>
        <li>Fetch courses and notes from a REST API</li>
        <li>Add and delete courses and notes</li>
        <li>Create session-based notes tied to courses</li>
        <li>Restrict access to note creation if no courses exist</li>
        <li>Filter notes by course using a dropdown menu</li>
      </ul>

      <br>

      <h4>What's new in version 2.0</h4>
      <ul>
        <li>New UI with sidebar navigation and active page highlights</li>
        <li>Improved usability with clearer instructions for users</li>
        <li>Harmonized color palette and modern design</li>
        <li>Fixed course creation ID issue: in the previous version, users had to provide the course ID when adding a new course.</li>
      </ul>

      <br>
      
      <p>
        The frontend is built with React.js, Mantine component library, and Zustand for state management. 
        React Router handles navigation, and the demo app is deployed on Netlify.
      </p>
    `,
    research: [],
    styles: [],
    links: [
      { type: "demo", url: "https://notetaker2-demo.netlify.app", label: "View demo website" },
      { type: "github", url: "https://github.com/hennamarleena/Notetaker-2.0", label: "GitHub" },
    ],
    extraSections: [
      {
        title: "Version 2.0",
        images: [
          "/img/notetaker2-demo.netlify.app_home.png",
          "/img/notetaker2-demo.netlify.app_addnotes.png",
          "/img/notetaker2-demo.netlify.app_viewnotes.png",
          "/img/notetaker2-demo.netlify.app_newcourse.png",
          "/img/notetaker-styles-colorpalette.png",
          "/img/notetaker-styles-typography.png",
        ]
      },
      {
        title: "Original Version",
        images: [
          "/img/notetakerdemo.netlify.app_home.png",
          "/img/notetakerdemo.netlify.app_createnotes.png",
          "/img/notetakerdemo.netlify.app_listnotes.png",
          "/img/notetakerdemo.netlify.app_addcourse.png",
        ]
      }
    ],
  },
];

export default projects;
