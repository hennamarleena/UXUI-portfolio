import { Title, List, Image, SimpleGrid } from "@mantine/core";
import { ZoomableImage } from "../components/ZoomableImage";

export default function Notetaker() {
  const version2Images = [
    { src: "/img/notetaker2-demo.netlify.app_home.png", title: "Home" },
    { src: "/img/notetaker2-demo.netlify.app_addnotes.png", title: "Add notes" },
    { src: "/img/notetaker2-demo.netlify.app_viewnotes.png", title: "View notes" },
    { src: "/img/notetaker2-demo.netlify.app_newcourse.png", title: "Add a new course" },
    { src: "/img/notetaker-styles-colorpalette.png", title: "Color palette" },
    { src: "/img/notetaker-styles-typography.png", title: "Typography" },
  ];

  const originalImages = [
    { src: "/img/notetakerdemo.netlify.app_home.png", title: "Original version - Home view" },
    { src: "/img/notetakerdemo.netlify.app_createnotes.png", title: "Original version - Create notes" },
    { src: "/img/notetakerdemo.netlify.app_listnotes.png", title: "Original version - List notes" },
    { src: "/img/notetakerdemo.netlify.app_addcourse.png", title: "Original version - Add courses" },
  ];

  return (
    <div className="project-section">
      <Title order={3} mb="sm">Overview</Title>
      <p>
        This note management app is a React project that was originally developed as a coursework assignment for a frontend course. 
        After completing the original version, I wanted to further develop the project with a more polished user interface and improved functionality. 
        NoteTaker 2.0 is an updated version of the app. Throughout the development of this project, I learned a lot about state management and component usage in React. I used ChatGPT with technical problem solving.
      </p>
        <br />
      <p>The app is primarily designed for desktop use.</p>

      <Title order={4} mb="xs">The original requirements</Title>
      <List spacing="sm" mb="md">
        <List.Item>Save courses and class notes locally</List.Item>
        <List.Item>Fetch courses and notes from a REST API</List.Item>
        <List.Item>Add and delete courses and notes</List.Item>
        <List.Item>Create session-based notes tied to courses</List.Item>
        <List.Item>Restrict access to note creation if no courses exist</List.Item>
        <List.Item>Filter notes by course using a dropdown menu</List.Item>
      </List>

      <Title order={4} mb="xs">What's new in version 2.0</Title>
      <List spacing="sm" mb="md">
        <List.Item>New UI with sidebar navigation and active page highlights</List.Item>
        <List.Item>Improved usability with clearer instructions for users</List.Item>
        <List.Item>Harmonized color palette and modern design</List.Item>
        <List.Item>Fixed course creation ID issue: users no longer need to provide the course ID manually.</List.Item>
      </List>

      <p>
        The frontend is built with React.js, Mantine component library, and Zustand for state management. 
        React Router handles navigation, and the demo app is deployed on Netlify.
      </p>
    <br />

      <Title order={4} mt="lg">Version 2.0 Screenshots</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="1rem" mt="sm" mb="md">
        {version2Images.map((img, i) => (
          <ZoomableImage  key={i} src={img.src} alt={img.title}></ZoomableImage>
        ))}
      </SimpleGrid>

      <Title order={4} mt="lg">Original Version Screenshots</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="1rem" mt="sm" mb="md">
        {originalImages.map((img, i) => (
          <ZoomableImage key={i} src={img.src} alt={img.title}></ZoomableImage>
        ))}
      </SimpleGrid>
    </div>
  );
}
