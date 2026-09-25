import { List, Title, SimpleGrid } from "@mantine/core";
import { ZoomableImage } from "../components/ZoomableImage";


export default function LokitRedesign() {
  return (
    <div>
    
    <section className="project-section project-section--accent">
      <div className="project-content">
        <div className="project-intro">
          <Title order={4} mb="sm">01 — Project overview</Title>
            <p>
              Tampereen Lokit Ry wanted to modernize its website and make it easier to navigate, more informative and easier to maintain.
            </p>
            <p>
              I was responsible for the project from initial analysis and concept development to implementation and documentation.
            </p>
            <p>
              The project focused on improving the site's structure, usability and visual consistency while preserving the association's existing identity.
            </p>
        </div>
      </div>
    </section>
  
  <section className="project-section project-section--white">
  <div className="project-content">
    <Title order={4}>02 — Understanding the existing site</Title>
      <p>
        Before designing the new website, I analyzed the existing site
        to identify usability and content issues. I also reviewed other
        scouting websites to understand common patterns and opportunities
        for improvement.
      </p>
      <br />
    <div className="project-split project-split--wide">
      <div>
        <Title order={5}>Key findings</Title>
        <List spacing="xs">
          <List.Item>Inconsistent visual identity and limited use of imagery</List.Item>
          <List.Item>Accessibility and navigation had usability issues</List.Item>
          <List.Item>Important content for new visitors was missing, such as information about activities, trips, equipment, and getting started with scouting</List.Item>
          <List.Item>The association's own logo was missing</List.Item>
          <List.Item>Limited visibility for news and current content</List.Item>
          <List.Item>Long text sections were difficult to read</List.Item>
          <List.Item>No FAQ section</List.Item>
          <List.Item>There was a need for a dedicated section for members and a reservation system for the association's cabin</List.Item>
          <List.Item>There was a desire to highlight the association's outdoor focus more clearly</List.Item>
        </List>
      </div>

      <div>
        <Title order={5}>Before</Title>
        <br />
        <ZoomableImage
          src="/img/lokit-before.png"
          alt="Original website"
        />
      </div>

    </div>
  </div>
</section>

<section className="project-section project-section--light">
  <div className="project-content">

    <Title order={4}>
      03 — User flows & information architecture
    </Title>

    <div className="project-split project-split--flow">
      
      {/* USER FLOW */}
      <div className="project-image-large">
        <ZoomableImage
          src="/img/lokit-userflow.png"
          alt="Website user flow"
        />
      </div>

      <div className="project-text">
        <Title order={5}>User flows</Title>
        <p>
          I identified the main target groups and considered what information
          each group would need from the website.
        </p>
        <p>
          I then created user flows and a content hierarchy to define how
          visitors could move through the site.
        </p>
      </div>

      {/* WIREFRAMES */}
      <div className="project-text">
        <Title order={5}>Wireframes</Title>
        <p>
          Based on the initial information architecture, I created wireframes
          to explore the structure and layout of the new site.
        </p>
        <p>
          The original concept included a sidebar navigation for subpages.
          Due to platform limitations, the navigation was simplified during
          implementation.
        </p>
      </div>

      <div className="project-image-large">
        <ZoomableImage
          src="/img/lokit-wireframes.png"
          alt="Examples of wireframes"
        />
      </div>

    </div>
  </div>
</section>

<section className="project-section">
  <div className="project-content">

    <Title order={4}>04 — Visual design</Title>

    <p className="project-intro">
      I created a visual direction for the new website based on the
      association's existing identity and outdoor-focused character.
    </p>
    <br />
    <br />
<SimpleGrid cols={{ sm: 2, lg: 2 }} spacing="xl">
      <div>
        <Title order={5}>Design principles</Title>
        <List spacing="xs">
          <List.Item>Clear typography and hierarchy</List.Item>
          <List.Item>Consistent colours</List.Item>
          <List.Item>Photography and visual storytelling</List.Item>
          <List.Item>Banner images that change between sections to add visual interest</List.Item>
        </List>
      </div>
      <div>
        <Title order={5}>Interface & content solutions</Title>
        <List spacing="xs">
          <List.Item>Clear site structure with main sections and subpages</List.Item>
          <List.Item>Internal links and call-to-action buttons guiding users to relevant pages.</List.Item>
          <List.Item>Top bar above the menu with quick links & call-to-action</List.Item>
          <List.Item>Balanced text and images to make long content easier to read</List.Item>
        </List>
      </div>
</SimpleGrid>
  </div>
</section>

<section className="project-section project-section--light">
  <div className="project-content">

    <div className="project-split project-split--implementation">

      <div>
        <Title order={4}>05 — Implementation</Title>
      </div>

      <div>
        <List spacing="xs">
          <List.Item>The website was built with Tilda platform, using its existing content
          blocks and Zero Block for more customized layouts.</List.Item>
          <List.Item>I used CSS to refine the visual appearance and maintain
          consistency across the site.</List.Item>
          <List.Item>The original designs were also adapted during implementation
          based on platform limitations and feedback.</List.Item>
        </List>
      </div>

    </div>

  </div>
</section>

<section className="project-section project-section--white">
  <div className="project-content">

    <Title order={4}>06 — Practical solutions</Title>
    
    <br />
        <div>
          <Title order={5}>Reservation system</Title>
          <p>
            Implemented a cabin reservation solution using
            Microsoft 365 Bookings.
          </p>

          <br />

          <Title order={5}>Embedded content</Title>
          <p>
            Solved practical implementation issues such as
            embedding PDF documents into the website.
          </p>

          <br />

          <Title order={5}>Mobile & accessibility</Title>
          <p>
            Reviewed the website across different screen sizes
            and paid attention to readability and mobile usability.
          </p>

          <br />

          <Title order={5}>SEO</Title>
          <p>
            Reviewed basic SEO elements to improve the site's
            discoverability.
          </p>
        </div>

  </div>
</section>

<section className="project-section project-section--accent">
  <div className="project-content">

    <div className="project-highlight">
      <Title order={4}>07 — Final result</Title>
      
      <p>
        The redesigned website provides clearer navigation,
        more structured content and a more consistent visual identity
        while making key information easier to find.
      </p>
      <br />
      <a href="https://tampereenlokit.fi/">View the live website →</a>
  
    </div>

    <br />

    <ZoomableImage
      src="/img/lokit-landing.png"
      alt="Redesigned website"
    />
    <SimpleGrid cols={{ sm: 1, lg: 2 }} spacing="xl">
      <ZoomableImage
        src="/img/lokit-final-2.png"
        alt="Redesigned website"
      />
          <ZoomableImage
        src="/img/lokit-final-3.png"
        alt="Redesigned website"
      />
    </SimpleGrid>

  </div>
</section>

<section className="project-section project-section--white">
  <div className="project-content">

    <div className="project-split">
      <div>
        <Title order={4}>08 — Documentation & handover</Title>
      </div>

      <div>
        <p>
          One of my responsibilities was documenting the project and
          creating maintenance instructions for the client.
        </p>
        <br />
        <p>
          The documentation covered the site's structure and provided
          guidance for future content updates.
        </p>
      </div>
    </div>

  </div>
</section>

<section className="project-section project-section--light">
  <div className="project-content">

    <div className="project-split project-split--learning">

      <div>
        <Title order={4}>09 — What I learned</Title>
      </div>

      <div className="project-learning">

          <p>
            <strong>UX & information architecture</strong><br />
            Planning user flows and organizing complex content.
          </p>
           
          <p>
            <strong>Problem solving</strong><br />
            Finding practical solutions within platform limitations.
          </p>
       
          <p>
            <strong>Client communication</strong><br />
            Adapting the design based on client needs and feedback.
          </p>
      
          <p>
            <strong>Independent work</strong><br />
            Managing a website project from concept to implementation.
          </p>
        
          <p>
            <strong>Documentation</strong><br />
            Creating clear maintenance instructions for the client.
          </p>
      </div>

    </div>

  </div>
</section>


    </div>
  );
}
