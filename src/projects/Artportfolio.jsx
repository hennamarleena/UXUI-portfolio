import { List, SimpleGrid } from "@mantine/core";
import CaseStudyIntro from "../components/case-studies/CaseStudyIntro";
import CaseStudySection from "../components/case-studies/CaseStudySection";
import CaseStudyFinalResult from "../components/case-studies/CaseStudyFinalResult";
import CaseStudySplitViewTextOnly from "../components/case-studies/CaseStudySplitViewTextOnly";
import CaseStudyFeatureCard from "../components/case-studies/CaseStudyFeatureCard";

export default function ArtPortfolio() {
  return (
    <div>
{/* OVERVIEW */}
      <CaseStudyIntro
        variant={"light"}>
        <p>
            This web project was created to showcase my collage artwork.
            The digital collages were created with Adobe Photoshop and
            Adobe Illustrator.
        </p>
      </CaseStudyIntro>

{/* VISUAL CONSEPT AND LAYOUT */}
      <CaseStudySection
        number="02"
        title="Visual concept & layout"
        variant="accent"
      >
        <p>
          The project was designed around a minimalist visual style
          where the interface stays in the background and keeps the
          focus on the artwork.
        </p>
        <p>
          The layout was designed to give the collages enough space
          while adapting to different screen sizes. 
          The overall design was kept simple to create a calm and gallery-like browsing experience.
        </p>
      </CaseStudySection>


{/* TECHNOLOGIES AND FEATURES */}
<CaseStudySection
  title="Technologies, features & implementation"
  variant="white"
  number={"03"}
>
  <List spacing="sm">
    <List.Item>
      React.js & Material UI component library
    </List.Item>
    <List.Item>
      Responsive grid layout for different screen sizes
    </List.Item>
    <List.Item>
      Zustand for state management
    </List.Item>
    <List.Item>
      React Router for navigation
    </List.Item>
    <List.Item>
      Web3Forms for contact form submissions
    </List.Item>
    <List.Item>
      Netlify for deployment
    </List.Item>
  </List>

  <br />

  <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
    <CaseStudyFeatureCard
      image="/img/artportfolio-filtering.png"
      alt="Category filtering"
      title="Category filtering"
    >
      <p>
        A category-based filtering system allows visitors to browse
        different types of collage artwork.
      </p>
    </CaseStudyFeatureCard>

    <CaseStudyFeatureCard
      image="/img/artportfolio-lightbox.png"
      alt="Artwork lightbox"
      title="Lightbox"
    >
      <p>
        A full-screen lightbox provides a larger view of the artworks
        and allows visitors to navigate between them.
      </p>
    </CaseStudyFeatureCard>

    <CaseStudyFeatureCard
      image="/img/artportfolio-messagebox.png"
      alt="Contact form"
      title="Contact form"
    >
      <p>
        The contact form was implemented with Web3Forms, allowing
        visitors to send messages directly through the portfolio.
      </p>
    </CaseStudyFeatureCard>
  </SimpleGrid>
</CaseStudySection>


{/* FINAL RESULT */}
    <CaseStudyFinalResult
      number="04"
      title="Final result"
      variant="accent"
      description="The final portfolio combines a minimalist interface with
              interactive features that make browsing and viewing the
              artwork straightforward."
      link="https://hennamarleena.netlify.app/"
      images={[
        {
          src: "/img/artportfolio_final.png",
          alt: "Final Art Portfolio",
        }
      ]}
    />
            
{/* WHAT I LEARNED */}
      <CaseStudySplitViewTextOnly
        number="05"
        title="What I learned"
        variant="light"
        >
              <p>
                <strong>React development</strong>
                <br />
                Building an interactive frontend using reusable React
                components.
              </p>
              <br />  
              <p>
                <strong>State management</strong>
                <br />
                Using Zustand to manage application state and filtering.
              </p>
              <br />  
              <p>
                <strong>Responsive design</strong>
                <br />
                Creating a grid layout that adapts to different screen
                sizes.
              </p>
              <br />  
              <p>
                <strong>Interactive interfaces</strong>
                <br />
                Implementing category filtering and a lightbox experience
                for browsing artwork.
              </p>
              <br />  
              <p>
                <strong>Third-party integration</strong>
                <br />
                Integrating Web3Forms to handle contact form submissions.
              </p>
      </CaseStudySplitViewTextOnly>

    </div>
  );
}