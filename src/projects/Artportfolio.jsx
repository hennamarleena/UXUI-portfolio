import { Title, List, SimpleGrid, Card } from "@mantine/core";
import { ZoomableImage } from "../components/ZoomableImage";

export default function ArtPortfolio() {
  return (
    <div>
      {/* 01 — OVERVIEW */}
      <section className="project-section project-section--light">
        <div className="project-content">
          <Title order={4}>01 — Overview</Title>

          <p>
            This web project was created to showcase my collage artwork.
            The digital collages were created with Adobe Photoshop and
            Adobe Illustrator.
          </p>
        </div>
      </section>

      {/* 02 — VISUAL CONCEPT & LAYOUT */}
      <section className="project-section project-section--accent">
        <div className="project-content">
          <Title order={4}>02 — Visual concept & layout</Title>

          <div>
            <div>
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
            </div>
          </div>
        </div>
      </section>

      <section className="project-section project-section--white">
  <div className="project-content">
    <Title order={4}>
      03 — Technologies, features & implementation
    </Title>

    <div>
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
    </div>
<br />
<br />

<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
  <Card
    className="project-card"
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Card.Section
      style={{
        height: '260px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <ZoomableImage
        src="/img/artportfolio-filtering.png"
        alt="Category filtering"
      />
    </Card.Section>

    <Card.Section
      style={{
        padding: '20px',
        flexGrow: 1,
      }}
    >
      <Title order={5}>Category filtering</Title>

      <p>
        A category-based filtering system allows visitors to browse
        different types of collage artwork.
      </p>
    </Card.Section>
  </Card>

  <Card
    className="project-card"
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Card.Section
      style={{
        height: '260px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <ZoomableImage
        src="/img/artportfolio-lightbox.png"
        alt="Artwork lightbox"
      />
    </Card.Section>

    <Card.Section
      style={{
        padding: '20px',
        flexGrow: 1,
      }}
    >
      <Title order={5}>Lightbox</Title>

      <p>
        A full-screen lightbox provides a larger view of the artworks
        and allows visitors to navigate between them.
      </p>
    </Card.Section>
  </Card>

  <Card
    className="project-card"
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Card.Section
  style={{
    height: '260px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }}
>
      <ZoomableImage
        src="/img/artportfolio-messagebox.png"
        alt="Contact form"
      />
    </Card.Section>

    <Card.Section
      style={{
        padding: '20px',
        flexGrow: 1,
      }}
    >
      <Title order={5}>Contact form</Title>

      <p>
        The contact form was implemented with Web3Forms, allowing
        visitors to send messages directly through the portfolio.
      </p>
    </Card.Section>
  </Card>
</SimpleGrid>

  </div>
</section>

      

      {/* 04 — FINAL RESULT */}
      <section className="project-section project-section--accent">
        <div className="project-content">
          <div className="project-highlight">
            <Title order={4}>04 — Final result</Title>

            <p>
              The final portfolio combines a minimalist interface with
              interactive features that make browsing and viewing the
              artwork straightforward.
            </p>
            <br />
            <a href="https://hennamarleena.netlify.app/">
              View the live project →
            </a>
          </div>

          <br />

          <ZoomableImage
            src="/img/artportfolio_final.png"
            alt="Final Art Portfolio"
          />
        </div>
      </section>

      {/* 05 — WHAT I LEARNED */}
      <section className="project-section project-section--light">
        <div className="project-content">
          <div className="project-split project-split--learning">
            <div>
              <Title order={4}>05 — What I learned</Title>
            </div>

            <div className="project-learning">
              <p>
                <strong>React development</strong>
                <br />
                Building an interactive frontend using reusable React
                components.
              </p>

              <p>
                <strong>State management</strong>
                <br />
                Using Zustand to manage application state and filtering.
              </p>

              <p>
                <strong>Responsive design</strong>
                <br />
                Creating a grid layout that adapts to different screen
                sizes.
              </p>

              <p>
                <strong>Interactive interfaces</strong>
                <br />
                Implementing category filtering and a lightbox experience
                for browsing artwork.
              </p>

              <p>
                <strong>Third-party integration</strong>
                <br />
                Integrating Web3Forms to handle contact form submissions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}