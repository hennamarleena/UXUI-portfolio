import { Title, List } from "@mantine/core";

export default function ArtPortfolio() {
  return (
    <div className="project-section">
      <Title order={3} mb="md">Overview</Title>

      <p>
        This web project showcases my collage artwork. The goal was to create a minimalist
        design where a clean layout keeps the focus on the artwork.
      </p>

      <List spacing="xs" mt="md" mb="md">
        <List.Item>Dynamic grid layout that adapts to different screen sizes</List.Item>
        <List.Item>Category-based filtering for collage types</List.Item>
        <List.Item>Full-screen lightbox mode with smooth navigation</List.Item>
        <List.Item>Frontend hosted on Netlify, built with React.js and styled using Material UI</List.Item>
        <List.Item>Zustand for state management, React Router for navigation</List.Item>
      </List>

      <p>The digital collages were created with Adobe Photoshop and Adobe Illustrator.</p>
      <br />
    </div>
  );
}
