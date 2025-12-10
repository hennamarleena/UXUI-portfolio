import { Title, List, Image, SimpleGrid } from "@mantine/core";
import { ZoomableImage } from "../components/ZoomableImage";

export default function Festivalwebsite() {
  const wireframeImages = [
    { src: "/img/neonwaves-wireframes.png", fullWidth: true, title: "Wireframes" },
  ];

  const layoutImages = [
    { src: "/img/neonwaves-home-view.png", title: "Home view" },
    { src: "/img/neonwaves-program-view.png", title: "Program" },
    { src: "/img/neonwaves-tickets-view.png", title: "Tickets" },
    { src: "/img/neonwaves-info-view.png", title: "Info" },
    { src: "/img/neonwaves-styles-colorpalette.png", title: "Color palette" },
    { src: "/img/neonwaves-styles-typography.png", title: "Typography" },
  ];

  return (
    <div className="project-section">
      <Title order={3} mb="sm">Overview</Title>
      <p>
        A conceptual website project for a fictional electronic music and culture festival. 
        The aim was to design a website concept that embodies the festival's atmosphere, 
        engages visitors, and inspires them to explore the event, ultimately leading to ticket purchases.
      </p>

      <Title order={4} mb="xs">Research</Title>
      <p>
        I analysed several festival websites and identified trends and effective solutions that I could apply to the project. 
        The following features were implemented to support the project goal:
      </p>
      <List spacing="sm" mb="md">
        <List.Item>Persistent ticket purchase links in the header and footer for easy access</List.Item>
        <List.Item>Collapsible info sections for a cleaner layout</List.Item>
        <List.Item>Festival program filtering by date or event type</List.Item>
        <List.Item>Minimalist mobile navigation with a hamburger menu</List.Item>
      </List>

      <Title order={4} mb="xs">Styles</Title>
      <p>
        The design was inspired by futuristic and urban aesthetics, using neon colors against dark backgrounds to create a "rave" feeling. 
        I wanted to evoke the essence of electronic music through vibrant neon hues and smooth, flowing graphic elements. 
        Rounded corners and circular shapes were used to create a fluid and dynamic visual style reinforcing a sense of movement.
      </p>
      <List spacing="sm" mb="md">
        <List.Item>Artist images and photographs generated with Adobe Firefly AI</List.Item>
        <List.Item>Graphics were designed using Adobe Illustrator</List.Item>
      </List>
      <br />
      <Title order={4} mt="lg">Wireframes</Title>
      {wireframeImages.map((img, i) => (
        <ZoomableImage  key={i} src={img.src} alt={img.title} style={{ width: '100%' }}></ZoomableImage>
      ))}

      <Title order={4} mt="lg">Layouts</Title>
      <SimpleGrid cols={2} spacing="1rem" breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mt="sm" mb="md">
        {layoutImages.map((img, i) => (
          <ZoomableImage  key={i} src={img.src} alt={img.title} style={{ width: '100%' }}></ZoomableImage>

        ))}
      </SimpleGrid>
    </div>
  );
}
