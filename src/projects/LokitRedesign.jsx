import { List, Title, SimpleGrid } from "@mantine/core";
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

      <Title order={4} mb="sm">Analysis of the old website</Title>

      <p>
        Before designing the new site, I conducted an analysis of the previous Tampereen Lokit website to identify key areas for improvement. 
        I also reviewed other scout group websites and applied relevant insights to the design process.
      </p>
      <br />
      <Title order={5}>The original home page</Title>
      
      <SimpleGrid cols={{ base: 2, sm: 2, lg: 2 }} spacing="1rem" mt="md" mb="xl">
          <ZoomableImage src={"/img/vanhat-verkkosivut-etusivu.png"} alt={"Landing page of the original website" }></ZoomableImage>
          <ZoomableImage src={"/img/vanhat-verkkosivut-lokkien-toiminta.png"} alt={"'Toiminta' page of the original website"}></ZoomableImage>
          <ZoomableImage src={"/img/vanhat-verkkosivut-kokoontumisajat.png"} alt={"'Kokoontumisajat' page of the original website"}></ZoomableImage>
          <ZoomableImage src={"/img/vanhat-verkkosivut-aikuisena-mukaan.png"} alt={"'Aikuisena mukaan' page of the original website"}></ZoomableImage>
          {/* <ZoomableImage src={"/img/vanhat-verkkosivut-mukaan-toimintaan.png"} alt={"'Mukaan toimintaan' page of the original website"}></ZoomableImage> */}
      </SimpleGrid>
      

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
      <br />
      <Title order={5}>User flow and rough content hierarchy before later iterations</Title>
      <ZoomableImage src={"/img/userflow.png"} alt={"Userflow before iterations"}></ZoomableImage>

      <Title order={4}>Site hierarchy and wireframing</Title>
      <p>
        I created a rough site hierarchy outlining the main pages and their subpages. 
        Based on this structure, I developed wireframes to plan the layout and organization of content.
      </p>
      <br />
      <Title order={5}>Examples of the wireframes</Title>
      <SimpleGrid cols={{ base: 2, sm: 2, lg: 3 }} spacing="1rem" mt="md" mb="xl">
          <ZoomableImage src={"/img/Etusivu-wireframe.png"} alt={""}></ZoomableImage>
          <ZoomableImage src={"/img/Ajankohtaista-wireframe.png"} alt={""}></ZoomableImage>
          <ZoomableImage src={"/img/Toiminta-wireframe.png"} alt={""}></ZoomableImage>
      </SimpleGrid>
      <p>I originally planned a sidebar menu showing subpages for each main topic (e.g., "Toiminta" and its subpages). This was changed due to platform limits.</p>

      <Title order={4}>Visual design and implementation</Title>
      <p>
      I created a unified layout, typography, and color scheme for the site, using colors, images, and white space carefully while keeping the style and feel of the old website.
      The platform had some limits, so not all design ideas could be used. 
      I adapted the original wireframes and made changes based on feedback.
      The site was built on Tilda using ready-made blocks and Zero Block customizations. 
      I used CSS to polish the look and make it consistent.
      </p>
      <br />

      <SimpleGrid cols={{ base: 2, sm: 2, lg: 2 }} spacing="1rem" mt="md" mb="xl">
          <ZoomableImage src={"/img/lokit-etusivu.png"} alt={"Final website" }></ZoomableImage>
          <ZoomableImage src={"/img/lokit-ajankohtaista.png"} alt={"Final website" }></ZoomableImage>
          <ZoomableImage src={"/img/lokit-uudenlokinopas.png"} alt={"Final website" }></ZoomableImage>
          <ZoomableImage src={"/img/lokit-tue-yrityksena.png"} alt={"Final website" }></ZoomableImage>
      </SimpleGrid>

      <br />
      <Title order={5}>Key design elements:</Title>
        <List spacing="xs" >
        <List.Item>Clear site structure with main sections and subpages</List.Item>
        <List.Item>Internal links and CTA buttons guiding users to relevant pages.</List.Item>
        <List.Item>Banner images that change between sections to add visual interest</List.Item>
        <List.Item>Top bar above the menu with quick links</List.Item>
        <List.Item>Call-to-action buttons in the menu</List.Item>
        <List.Item>Balanced text and images to make long content easier to read</List.Item>
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
