import { List, Title, SimpleGrid, Text } from "@mantine/core";
import { ZoomableImage } from "../components/ZoomableImage";


export default function LokitRedesign() {
  return (
    <div className="project-section">

      <Title order={4} mb="sm">Project background & goal</Title>
      <p>
        Tampereen Lokit Ry wanted to modernize their website to make it more user-friendly and easier to maintain. 
        I was responsible for designing and implementing a completely new site that serves multiple target groups 
        and provides a more comprehensive content experience than the previous version. 
        The goal was to create a visually pleasing and informative solution. 
        My responsibilities covered the full website project lifecycle, from concept and design to implementation and documentation.
      </p>

      {/* Old website screenshots */}

      <Title order={4} mb="sm">Analysis of the old website</Title>

      <p>
        Before designing the new site, I conducted an analysis of the previous Tampereen Lokit website to identify key areas for improvement. 
        I also reviewed other scout group websites and applied relevant insights to the design process.
      </p>
      <br />
      <Title order={5}>Key findings:</Title>

      <List spacing="xs" >
        <List.Item>The brand and visual identity were inconsistent, and there were only few images.</List.Item>
        <List.Item>Accessibility and navigation had usability issues.</List.Item>
        <List.Item>Important content for new visitors was missing, such as information about activities, trips, equipment, and getting started with scouting.</List.Item>
        <List.Item>The association's own logo was missing.</List.Item>
        <List.Item>Current and news content was limited and lacked a clear placement.</List.Item>
        <List.Item>Long text sections were difficult to read.</List.Item>
        <List.Item>There was no FAQ section.</List.Item>
        <List.Item>There was a need for a dedicated section for members and a reservation system for the association's cabin.</List.Item>
        <List.Item>There was a desire to highlight the association's outdoors/adventure focus more clearly.</List.Item>
      </List>

      <Title order={4}>User flows</Title>
      <p>
      I defined the website's target groups and their goals on the site, identifying what information each group was looking for.
      </p>

      {/* Image of the user flow diagram before later iterations */}

      <Title order={4}>Site hierarchy and wireframing</Title>
      <p>
        I created a rough site hierarchy outlining the main pages and their subpages. 
        Based on this structure, I developed wireframes to plan the layout and organization of content.
      </p>
      {/* Images of wireframes and site hierarchy */}

      <Title order={4}>Visual design and implementation</Title>
      <p>
      I created a unified layout, typography, and color scheme for the site, using colors, images, and white space carefully while keeping the style and feel of the old website.
      Challenges: The platform had some limits, so not all design ideas could be used. 
      I adapted the original wireframe and made changes based on feedback.
      The site was built on Tilda using ready-made blocks and Zero Block customizations. 
      I used CSS to polish the look and make it consistent.
      </p>
      <br />
      <Title order={5}>Key design elements:</Title>
        <List spacing="xs" >
        <List.Item>Banner images that change in different sections</List.Item>
        <List.Item>Top bar above the menu with quick links</List.Item>
        <List.Item>Call-to-action buttons in the menu</List.Item>
        <List.Item>Balanced text and images to make long content easier to read</List.Item>
        <List.Item>Originally planned a sidebar menu showing subpages for each main topic (e.g., “Activities” and its subpages). This was changed to a top menu due to platform limits.</List.Item>
      {/* Image of the original wireframe showing the sidebar navigation idea */}
      </List>

      <Title order={4}>Practical solutions and optimization</Title>
      <p>
      I checked the site for SEO and accessibility, making sure it was clear, easy to read, and worked well on mobile devices.
      I solved practical challenges, such as embedding PDFs and setting up a reservation system for the cabin using Microsoft 365 Bookings.
      I also used AI tools to support idea generation.
      I documented all project steps and created instructions for maintaining the site.
      </p>

      <Title order={4}>Learning outcomes</Title>
      <p>
      I learned how to plan user flows and content hierarchy, develop a visual style, solve problems creatively, be flexible, 
      and understand the importance of documentation. The internship strengthened my ability to work independently and manage a project from start to finish.
      </p>

    </div>
  );
}
