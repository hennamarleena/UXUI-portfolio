import { Title, List } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { ZoomableImage } from "../components/ZoomableImage";
import CaseStudyIntro from "../components/case-studies/CaseStudyIntro";
import CaseStudySplitViewTextOnly from "../components/case-studies/CaseStudySplitViewTextOnly";
import CaseStudySection from "../components/case-studies/CaseStudySection";
import CaseStudySplit from "../components/case-studies/CaseStudySplit";
import CaseStudyFinalResult from "../components/case-studies/CaseStudyFinalResult";

export default function Notetaker() {
  return (
    <div>
      {/* 01 - OVERVIEW */}
      <CaseStudyIntro
        variant={"accent"}>
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
      </CaseStudyIntro>

      {/* 02 — ORIGINAL REQUIREMENTS */}
      <CaseStudySection
        number="02"
        title="Original requirements"
        variant="white"
      >
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
      </CaseStudySection>

      {/* 03 — DEVELOPMENT & IMPROVEMENTS */}
      <CaseStudySection
        number="03"
        title="Development & improvements"
        variant="light"
      >
      <CaseStudySplit variant="project-split--wide">
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
              <Carousel 
                withIndicators
                emblaOptions={{
                  loop: true,
                }}
              className="notetaker-before-carousel">
                <Carousel.Slide>
                  <ZoomableImage
                    src="/img/notetakerdemo.netlify.app_home.png"
                    alt="NoteTaker home view - Before"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <ZoomableImage
                    src="/img/notetakerdemo.netlify.app_createnotes.png"
                    alt="NoteTaker create notes view - Before"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <ZoomableImage
                    src="/img/notetakerdemo.netlify.app_listnotes.png"
                    alt="NoteTaker list notes view - Before"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <ZoomableImage
                    src="/img/notetakerdemo.netlify.app_addcourse.png"
                    alt="NoteTaker add new course view - Before"
                  />
                </Carousel.Slide>
              </Carousel>
              </div>
        </CaseStudySplit>
      </CaseStudySection>

    {/* 04 — IMPLEMENTATION */}
    <CaseStudySplitViewTextOnly 
      variant="white"
      title="Implementation"
      number="04">
      
          <p>
            The frontend is built with React.js and the Mantine component
            library. Zustand is used for state management and React Router
            handles navigation between views.
          </p>
          <br />
          <p>
            The application is deployed on Netlify.
          </p>
    </CaseStudySplitViewTextOnly>

    {/* 05 — FINAL RESULT */}
    <CaseStudyFinalResult
      number="05"
      title="Final result"
      variant="accent"
      description="NoteTaker 2.0 provides a clearer interface and more consistent visual design while retaining the functionality of the original application. The project is primarily designed for desktop use."
      link="https://notetaker2-demo.netlify.app/"
      images={[
        {
          src: "/img/notetaker2-demo.netlify.app_viewnotes.png",
          alt: "NoteTaker 2.0 - View notes",
        },
        {
          src: "/img/notetaker2-demo.netlify.app_home.png",
          alt: "NoteTaker 2.0 - Home",
        },
        {
          src: "/img/notetaker2-demo.netlify.app_addnotes.png",
          alt: "NoteTaker 2.0 - Add notes",
        },
        {
          src: "/img/notetaker2-demo.netlify.app_newcourse.png",
          alt: "NoteTaker 2.0 - Add new course",
        },
      ]}
    />
      
      <CaseStudySplitViewTextOnly
        number="06"
        title="What I learned"
        variant="white"
        >
          <p>
            <strong>React development</strong>
            <br />
            Developing reusable components and structuring a React application.
          </p>
          <br />
          <p>
            <strong>State management</strong>
            <br />
            Working with Zustand and managing application state.
          </p>
          <br />
          <p>
            <strong>User interface design</strong>
            <br />
            Improving visual hierarchy, navigation and usability.
          </p>
          <br />
          <p>
            <strong>Problem solving</strong>
            <br />
            Using technical documentation and AI-assisted problem solving when implementing new functionality.
          </p>
      </CaseStudySplitViewTextOnly>

    </div>
  );
}

