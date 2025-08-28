import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Image, Group, Badge, Button, Title, Text, Container, Paper, Modal } from '@mantine/core';
import projects from './projectsData';

// Zoomattava kuva-komponentti
function ZoomableImage({ src, alt }) {
  const [opened, setOpened] = useState(false);

  return (
     <>
      <Image
        src={src}
        alt={alt}
        fit="cover"
        radius="sm"
        onClick={() => setOpened(true)}
        style={{ cursor: 'pointer' }}
      />

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={alt}
        size="auto"
        centered
        overflow="inside"
        padding={0}
        styles={{
          modal: { maxWidth: '90vw', maxHeight: '90vh' },
          body: { padding: 0, display: 'flex', justifyContent: 'center' }
        }}
      >
        <Image
          src={src}
          alt={alt}
          fit="contain"
          style={{ maxHeight: '90vh', width: 'auto' }}
        />
      </Modal>
    </>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) return <p>Project not found</p>;

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container size="xl" px="md" py="xl">
      {/* Back button */}
      <Button
        variant="light"
        onClick={handleBack}
        style={{
          border: "1px solid #228BE6",
          marginBottom: '20px',
          color: '#228BE6',
          backgroundColor: "transparent",
        }}
      >
        ← Back
      </Button>

      {/* Hero Section */}
      <Title order={2} ta="center" mb="xl">{project.title}</Title>

      {/* Links */}
      <Group spacing="md" mt="md" mb="xl" justify='center'>
        {project.links.map((link, index) => (
          <Button
            key={index}
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            radius="xl"
            style={{ backgroundColor: '#3e9ff3ff', color: 'white' }}
          >
            {link.label}
          </Button>
        ))}
      </Group>

      <Paper mb="xl" style={{ overflow: 'hidden' }}>
        <Image src={project.image} alt={project.title} fit="cover" />
      </Paper>

      {/* Technologies */}
      <section style={{ marginBottom: '3rem' }}>
        <Title order={3} mb="sm">Technologies</Title>
        <Group spacing="xs" mt="md">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="outline" size='lg'>{tech}</Badge>
          ))}
        </Group>
      </section>

      {/* Overview */}
      <section style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <Title order={3} mb="sm">Overview</Title>
        <div dangerouslySetInnerHTML={{ __html: project.overview }} />
      </section>

      {/* Research */}
      {project.research?.length > 0 && (
        <section style={{ borderRadius: "1rem", marginBottom: '3rem' }}>
          <Title order={3} mb="sm">Research</Title>
          <div dangerouslySetInnerHTML={{ __html: project.research }} />
        </section>
      )}

      {/* Styles */}
      {project.styles?.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <Title order={3} mb="sm">Styles</Title>
          <div dangerouslySetInnerHTML={{ __html: project.styles }} />
        </section>
      )}

      {/* Extra Sections */}
      {project.extraSections?.map((section, i) => (
        <section key={i} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          {section.title && (
            <Title order={3} mb="lg">{section.title}</Title>
          )}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))',
              gap: '20px'
            }}
          >
            {section.images.map((img, index) => (
              <ZoomableImage
                key={index}
                src={img}
                alt={``}
              />
            ))}
          </div>
        </section>
      ))}
    </Container>
  );
}
