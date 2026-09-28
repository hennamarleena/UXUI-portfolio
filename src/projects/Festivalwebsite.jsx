import { Title, List } from "@mantine/core";
import { ZoomableImage } from "../components/ZoomableImage";
import CaseStudyIntro from "../components/case-studies/CaseStudyIntro";
import CaseStudySection from "../components/case-studies/CaseStudySection";
import CaseStudyFinalResult from "../components/case-studies/CaseStudyFinalResult";
import CaseStudyGallery from "../components/case-studies/CaseStudyGallery";
import CaseStudySplitViewTextOnly from "../components/case-studies/CaseStudySplitViewTextOnly";

export default function Festivalwebsite() {
  return (
    <div className="case-study-page">

{/* 01 - INTRO */}
      <CaseStudyIntro variant="accent">
        <p>
          A conceptual website project for a fictional electronic music and
          culture festival. The goal was to create a website concept that
          reflects the atmosphere of the festival, encourages 
          visitors to explore the event, and guides them towards ticket purchases.
        </p>
        <br />
        <p>The website concept and interactive prototype were built in Figma.</p>
      </CaseStudyIntro>

{/* 02 - RESEARCH & STRUCTURE */}
      <CaseStudySection
        number={"02"}
        title="Research & structure"
        variant="white"
      >
        <p>
        I analysed several festival websites to identify common patterns, effective solutions, and opportunities for improving the user experience.
        </p>

        <br />

        <p>
        Based on the research, I defined key features and interactions for the concept:
        </p>

        <List spacing="sm" mb="md">
          <List.Item>
            Persistent ticket purchase links in the header and footer for easy access
          </List.Item>
          <List.Item>
            Collapsible information sections to keep the interface clean and focused
          </List.Item>
          <List.Item>
            Festival program filtering by date and event type
          </List.Item>
          <List.Item>
            A minimalist mobile navigation with a hamburger menu
          </List.Item>
        </List>

        <p>
          I first created wireframes in Figma to explore the page structure, content hierarchy, and user flow before moving on to the visual design.
        </p>

        <br />

        <Title order={5} mt="lg">
          Wireframes
        </Title>

        <ZoomableImage
          src="/img/neonwaves-wireframes.png"
          alt="Festival website wireframes"
        />
      </CaseStudySection>

{/* 03 VISUAL DESIGN */}
      <CaseStudySection
        number={"03"}
        title="Visual design"
        variant="light"
      >
        <p>
          The visual direction was inspired by futuristic and urban aesthetics commonly associated with electronic music and rave culture.
        </p>
        <br />
        <p>
          Neon colours against dark backgrounds create a strong contrast and help establish an energetic atmosphere. 
          Rounded corners, circular shapes, and flowing graphic elements add a sense of movement and make the interface feel more fluid and dynamic.
        </p>

        <List spacing="sm" mb="md">
          <List.Item>
            The visual design was created in Figma, including the colour palette, typography, layouts and UI components.
          </List.Item>
          <List.Item>
             Artist imagery and photographs were generated with Adobe Firefly AI. 
          </List.Item>
          <List.Item>
             Supporting graphic elements were created using Adobe Illustrator.
          </List.Item>
        </List>
        <br />
        <CaseStudyGallery
          images={[
            {
              src: "/img/neonwaves-styles-colorpalette.png",
              alt: "Color palette",
            },
            {
              src: "/img/neonwaves-styles-typography.png",
              alt: "Typography",
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection
        number={"04"}
        title="Interactive prototype"
        variant="accent"
      >
        <List spacing="sm" mb="md">
          <List.Item>
            The final website concept was brought to life as an interactive prototype in Figma.
          </List.Item>
          <List.Item>
             I created interactions for navigation, filtering the festival program, opening information sections, 
            and moving between key pages such as the program, tickets, and information sections.
          </List.Item>
          <List.Item>
             The prototype allowed me to test the overall user flow and demonstrate how the final 
          website experience would work.
          </List.Item>
        </List>
        <a href="https://www.figma.com/proto/lRk8TzGPxnD2tZiBrRXVWL/Neonwaves-mobile?...">View mobile prototype →</a>
        <br />
        <a href="https://www.figma.com/proto/SgYV3k6ymvQhQrs2T9xP1E/Neonwaves-desktop?...">View desktop prototype →</a>
      </CaseStudySection>

{/* 05 FINAL RESULT */}
      <CaseStudyFinalResult
        number={"05"}
        title="Final result"
        variant="white"
        description={"The final design combines the visual direction with the functional requirements identified during the research phase. The result is a dark, immersive festival website where the program, event information, and ticket purchasing remain easy to access."}
        images={[
          {
            src: "/img/neonwaves-home-view.png",
            alt: "Home view",
          },
          {
            src: "/img/neonwaves-program-view.png",
            alt: "Program view",
          },
          {
            src: "/img/neonwaves-tickets-view.png",
            alt: "Tickets view",
          },
          {
            src: "/img/neonwaves-info-view.png",
            alt: "Info",
          },
        ]}
      />
{/* WHAT I LEARNED */}
        <CaseStudySplitViewTextOnly
          number="06"
          title="What I learned"
          variant="light"
          >
            <p>
              This project gave me an opportunity to explore how visual design can
              support the atmosphere and identity of an event while keeping
              navigation and important actions clear.
            </p>
            <br />
            <p> 
              I also gained experience in designing and prototyping in Figma.
            </p>
                    
        </CaseStudySplitViewTextOnly>

    </div>
  );
}