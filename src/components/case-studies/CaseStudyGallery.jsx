import { SimpleGrid } from "@mantine/core";
import { ZoomableImage } from "../ZoomableImage";

export default function CaseStudyGallery({
  images,
  cols = { base: 1, sm: 2, lg: 2 },
}) {
  return (
    <SimpleGrid cols={cols} spacing="xl">
      {images.map((image) => (
        <ZoomableImage
          key={image.src}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </SimpleGrid>
  );
}