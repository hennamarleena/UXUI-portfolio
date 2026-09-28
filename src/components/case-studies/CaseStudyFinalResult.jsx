import { Title, SimpleGrid } from "@mantine/core";
import { ZoomableImage } from "../ZoomableImage";

export default function CaseStudyFinalResult({
  number,
  title,
  description,
  secondaryDescription,
  link,
  linkText = "View the live demo →",
  images = [],
  variant = "accent",
}) {
  return (
    <section className={`project-section project-section--${variant}`}>
      <div className="project-content">

        <div className="project-highlight">
          <Title order={4}>
            {number} — {title}
          </Title>

          <p>{description}</p>

        </div>

        {link && (
          <>
            <br />
            <a href={link} target="_blank" rel="noreferrer">
              {linkText}
            </a>
          </>
        )}

        {images.length > 0 && (
          <>
            <br />
            <br />

            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: 2 }}
              spacing="xl"
            >
              {images.map((image) => (
                <ZoomableImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </SimpleGrid>
          </>
        )}

      </div>
    </section>
  );
}