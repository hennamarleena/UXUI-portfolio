import { Card, Title } from "@mantine/core";
import { ZoomableImage } from "../ZoomableImage";

export default function CaseStudyFeatureCard({
  image,
  alt,
  title,
  children,
}) {
  return (
    <Card
      className="project-card"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Section
        style={{
          height: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <ZoomableImage
          src={image}
          alt={alt}
        />
      </Card.Section>

      <Card.Section
        style={{
          padding: "20px",
          flexGrow: 1,
        }}
      >
        <Title order={5}>
          {title}
        </Title>

        {children}
      </Card.Section>
    </Card>
  );
}