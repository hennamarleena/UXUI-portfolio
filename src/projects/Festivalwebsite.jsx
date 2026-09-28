import { Title, List } from "@mantine/core";
import { ZoomableImage } from "../components/ZoomableImage";
import CaseStudyIntro from "../components/case-studies/CaseStudyIntro";
import CaseStudySection from "../components/case-studies/CaseStudySection";
import CaseStudyFinalResult from "../components/case-studies/CaseStudyFinalResult";
import CaseStudyGallery from "../components/case-studies/CaseStudyGallery";

export default function Festivalwebsite() {
  return (
    <div className="case-study-page">

{/* 01 INTRO */}
      <CaseStudyIntro variant="accent">
        <p>
          A conceptual website project for a fictional electronic music and
          culture festival. The aim was to design a website concept that
          embodies the festival's atmosphere, engages visitors, and inspires
          them to explore the event, ultimately leading to ticket purchases.
        </p>
      </CaseStudyIntro>

{/* 02 RESEARCH */}
      <CaseStudySection
        number={"02"}
        title="Research"
        variant="white"
      >
        <p>
          I analysed several festival websites and identified trends and
          effective solutions that I could apply to the project. The following
          features were implemented to support the project goal:
        </p>

        <List spacing="sm" mb="md">
          <List.Item>
            Persistent ticket purchase links in the header and footer for easy access
          </List.Item>
          <List.Item>
            Collapsible info sections for a cleaner layout
          </List.Item>
          <List.Item>
            Festival program filtering by date or event type
          </List.Item>
          <List.Item>
            Minimalist mobile navigation with a hamburger menu
          </List.Item>
        </List>

        <Title order={5} mt="lg">
          Wireframes
        </Title>

        <ZoomableImage
          src="/img/neonwaves-wireframes.png"
          alt="Festival website wireframes"
        />
      </CaseStudySection>

{/* 03 STYLES */}
      <CaseStudySection
        number={"03"}
        title="Styles"
        variant="light"
      >
        <p>
          The design was inspired by futuristic and urban aesthetics, using
          neon colors against dark backgrounds to create a "rave" feeling.
          I wanted to evoke the essence of electronic music through vibrant
          neon hues and smooth, flowing graphic elements. Rounded corners
          and circular shapes were used to create a fluid and dynamic visual
          style reinforcing a sense of movement.
        </p>

        <List spacing="sm" mb="md">
          <List.Item>
            Artist images and photographs were generated with Adobe Firefly AI
          </List.Item>
          <List.Item>
            Graphics were designed using Adobe Illustrator
          </List.Item>
        </List>

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

{/* 04 FINAL RESULT */}
      <CaseStudyFinalResult
        number={"04"}
        title="Final result"
        variant="white"
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

    </div>
  );
}