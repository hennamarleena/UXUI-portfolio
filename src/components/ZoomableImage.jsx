import { useState } from "react";
import { Image, Modal } from "@mantine/core";

export function ZoomableImage({ src, alt, imagesize }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fit="contain"
        onClick={() => setOpened(true)}
        style={{ cursor: "pointer", height: "auto" }}
        
      />

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton
        size="auto"
        centered
        overflow="inside"
        padding={0}
        styles={{
          header: { padding: "5px 10px", borderBottom: "1px solid #ddd" },
          title: { fontSize: "1.1rem", fontWeight: 500, color: "#333" },
          modal: { maxWidth: "95vw", maxHeight: "95vh" },
          body: { padding: 0, display: "flex", justifyContent: "center" },
        }}
        title={alt}
      >
        <Image
          src={src}
          alt={alt}
          fit="contain"
          style={{ width: "100%", height: "auto" }}
        />
      </Modal>
    </>
  );
}
