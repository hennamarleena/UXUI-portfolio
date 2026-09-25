// import { Title, List, Image, SimpleGrid } from "@mantine/core";
// import { ZoomableImage } from "../components/ZoomableImage";

// export default function Notetaker() {
//   const version2Images = [
//     { src: "/img/notetaker2-demo.netlify.app_home.png", title: "Home" },
//     { src: "/img/notetaker2-demo.netlify.app_addnotes.png", title: "Add notes" },
//     { src: "/img/notetaker2-demo.netlify.app_viewnotes.png", title: "View notes" },
//     { src: "/img/notetaker2-demo.netlify.app_newcourse.png", title: "Add a new course" },
//     { src: "/img/notetaker-styles-colorpalette.png", title: "Color palette" },
//     { src: "/img/notetaker-styles-typography.png", title: "Typography" },
//   ];

//   const originalImages = [
//     { src: "/img/notetakerdemo.netlify.app_home.png", title: "Original version - Home view" },
//     { src: "/img/notetakerdemo.netlify.app_createnotes.png", title: "Original version - Create notes" },
//     { src: "/img/notetakerdemo.netlify.app_listnotes.png", title: "Original version - List notes" },
//     { src: "/img/notetakerdemo.netlify.app_addcourse.png", title: "Original version - Add courses" },
//   ];

//   return (
//     <div>

//       <section className="project-section project-section--accent">
//         <div className="project-content">
//           <div className="project-intro">
//             <Title order={3} mb="sm">Overview</Title>
//               <p>
//                 This note management app is a React project that was originally developed as a coursework assignment for a frontend course. 
//                 After completing the original version, I wanted to further develop the project with a more polished user interface and improved functionality. 
//                 NoteTaker 2.0 is an updated version of the app. Throughout the development of this project, I learned a lot about state management and component usage in React. I used ChatGPT with technical problem solving.
//               </p>
//             <p>The app is primarily designed for desktop use.</p>
//           </div>
//         </div>
//       </section>

//       <section className="project-section project-section--white">
//         <div className="project-content">
//           <Title order={4} mb="xs">The original requirements</Title>
//             <List spacing="sm" mb="md">
//               <List.Item>Save courses and class notes locally</List.Item>
//               <List.Item>Fetch courses and notes from a REST API</List.Item>
//               <List.Item>Add and delete courses and notes</List.Item>
//               <List.Item>Create session-based notes tied to courses</List.Item>
//               <List.Item>Restrict access to note creation if no courses exist</List.Item>
//               <List.Item>Filter notes by course using a dropdown menu</List.Item>
//             </List>
//         </div>
//       </section>

//       <section className="project-section project-section--light">
//          <div className="project-content">
//         <Title order={4} mb="xs">What's new in version 2.0</Title>
//         <List spacing="sm" mb="md">
//           <List.Item>New UI with sidebar navigation and active page highlights</List.Item>
//           <List.Item>Improved usability with clearer instructions for users</List.Item>
//           <List.Item>Harmonized color palette and modern design</List.Item>
//           <List.Item>Fixed course creation ID issue: users no longer need to provide the course ID manually.</List.Item>
//         </List>

//         <p>
//           The frontend is built with React.js, Mantine component library, and Zustand for state management. 
//           React Router handles navigation, and the demo app is deployed on Netlify.
//         </p>
//       <br />

//         <Title order={4} mt="lg">Version 2.0 Screenshots</Title>
//         <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="1rem" mt="sm" mb="md">
//           {version2Images.map((img, i) => (
//             <ZoomableImage  key={i} src={img.src} alt={img.title}></ZoomableImage>
//           ))}
//         </SimpleGrid>

//         <Title order={4} mt="lg">Original Version Screenshots</Title>
//         <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="1rem" mt="sm" mb="md">
//           {originalImages.map((img, i) => (
//             <ZoomableImage key={i} src={img.src} alt={img.title}></ZoomableImage>
//           ))}
//         </SimpleGrid>
//         </div>
//       </section>
      
//     </div>
//   );
// }

import { Title, List, SimpleGrid } from "@mantine/core";
import { ZoomableImage } from "../components/ZoomableImage";

export default function Notetaker() {
  return (
    <div>

      {/* 01 — PROJECT OVERVIEW */}
      <section className="project-section project-section--accent">
        <div className="project-content">
          <div className="project-intro">

            <Title order={4} mb="sm">
              01 — Project overview
            </Title>

            <p>
              NoteTaker is a React-based note management application originally
              developed as a coursework assignment for a frontend course.
            </p>

            <p>
              After completing the original version, I continued developing
              the project to create a more polished user interface and improve
              the overall usability and functionality.
            </p>

            <p>
              The project also gave me an opportunity to deepen my understanding
              of React state management and component-based development.
            </p>

          </div>
        </div>
      </section>


      {/* 02 — ORIGINAL REQUIREMENTS */}
      <section className="project-section project-section--white">
        <div className="project-content">

          <Title order={4} mb="sm">
            02 — Original requirements
          </Title>

          <p>
            The original assignment focused on building a note management
            application with local and API-based data handling.
          </p>

          <List spacing="sm" mt="md">
            <List.Item>Save courses and class notes locally</List.Item>
            <List.Item>Fetch courses and notes from a REST API</List.Item>
            <List.Item>Add and delete courses and notes</List.Item>
            <List.Item>Create session-based notes tied to courses</List.Item>
            <List.Item>Restrict note creation if no courses exist</List.Item>
            <List.Item>Filter notes by course</List.Item>
          </List>

        </div>
      </section>


      {/* 03 — DEVELOPMENT & IMPROVEMENTS */}
      <section className="project-section project-section--light">
        <div className="project-content">

          <Title order={4}>
            03 — Development & improvements
          </Title>

          <div className="project-split project-split--wide">

            <div>
              <Title order={5}>What changed in version 2.0</Title>

              <List spacing="sm" mt="md">
                <List.Item>
                  New sidebar navigation with active page highlights
                </List.Item>

                <List.Item>
                  Clearer instructions and improved usability
                </List.Item>

                <List.Item>
                  Harmonized color palette and updated visual design
                </List.Item>

                <List.Item>
                  Simplified course creation by removing the need to
                  enter the course ID manually
                </List.Item>
              </List>
              <br />
              <p>
                The second version focused particularly on improving the
                user interface and making the application easier to understand
                and use.
              </p>
            </div>

            <div className="project-image-large">
              <Title order={5}>Before</Title>
              <ZoomableImage
                src="/img/notetakerdemo-before.png"
                alt="NoteTaker before"
              />
            </div>

          </div>

        </div>
      </section>


      {/* 04 — IMPLEMENTATION */}
      <section className="project-section project-section--white">
        <div className="project-content">

          <div className="project-split">

            <div>
              <Title order={4}>
                04 — Implementation
              </Title>
            </div>

            <div>
              <p>
                The frontend is built with React.js and the Mantine component
                library. Zustand is used for state management and React Router
                handles navigation between views.
              </p>
              <br />
              <p>
                The application is deployed on Netlify.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* 05 — FINAL RESULT */}
      <section className="project-section project-section--accent">
        <div className="project-content">

          <div className="project-highlight">

            <Title order={4}>
              05 — Final result
            </Title>

            <p>
              NoteTaker 2.0 provides a clearer interface and more consistent
              visual design while retaining the functionality of the original
              application.
            </p>

            <p>
              The project is primarily designed for desktop use.
            </p>

          </div>

          <br />
          <ZoomableImage
            src="/img/notetaker2-demo.netlify.app_viewnotes.png"
            alt="NoteTaker 2.0"
          />
          <br />
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="xl">
            <ZoomableImage
            src="/img/notetaker2-demo.netlify.app_home.png"
            alt="NoteTaker 2.0"
          />
          <ZoomableImage
            src="/img/notetaker2-demo.netlify.app_addnotes.png"
            alt="NoteTaker 2.0"
          />
          </SimpleGrid>
          <br />
          <ZoomableImage
            src="/img/notetaker2-demo.netlify.app_newcourse.png"
            alt="NoteTaker 2.0"
          />
        
        </div>
      </section>


      {/* 06 — WHAT I LEARNED */}
      <section className="project-section project-section--light">
        <div className="project-content">

          <div className="project-split project-split--learning">

            <div>
              <Title order={4}>
                06 — What I learned
              </Title>
            </div>

            <div className="project-learning">

              <p>
                <strong>React development</strong><br />
                Developing reusable components and structuring a React
                application.
              </p>

              <p>
                <strong>State management</strong><br />
                Working with Zustand and managing application state.
              </p>

              <p>
                <strong>User interface design</strong><br />
                Improving visual hierarchy, navigation and usability.
              </p>

              <p>
                <strong>Problem solving</strong><br />
                Using technical documentation and AI-assisted problem solving
                when implementing new functionality.
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

