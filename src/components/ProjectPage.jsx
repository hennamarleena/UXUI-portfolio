import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Image, Group, Badge, Button, Title, Container, Paper, Modal } from '@mantine/core';
import projects from './projectsData';

// Zoomattava kuva-komponentti
function ZoomableImage({ src, alt }) {
  const [opened, setOpened] = useState(false); // Modal-tila auki/kiinni
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fit="contain"
        onClick={() => setOpened(true)}
        style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
      />

    {/* Modal, jossa kuva zoomattuna */}
      <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      withCloseButton={true}
      className='zoom-modal'
      size="auto"
      centered
      overflow="inside"
      padding={0}
      styles={{
        header: { padding: '5px 10px', borderBottom: '1px solid #ddd' },
        title: { fontSize: '1.1rem', fontWeight: 500, color: '#333' },
        modal: { maxWidth: '95vw', maxHeight: '95vh' },
        body: { padding: 0, display: 'flex', justifyContent: 'center' },
      }}
      title={alt}
    >
        <Image
          src={src}
          alt={alt}
          fit="contain"
          style={{ maxHeight: '90vh', width: '100%', height: 'auto' }}
        />
      </Modal>
    </>
  );
}

// Pääsivu yksittäiselle projektille
export default function ProjectPage() {
  const { id } = useParams(); // Haetaan URL:stä projekti-id
  const project = projects.find((p) => p.id === id); // Etsitään projekti datasta
  const navigate = useNavigate(); // React Routerin navigointi

  if (!project) return <p>Project not found</p>;

  // Back-nappulan funktio, palauttaa pääsivulle ja scrollaa "projects"-osioon
  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  // Scrollaa aina sivun yläosaan kun komponentti renderöidään
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
          border: '1px solid #228BE6',
          marginBottom: '20px',
          color: '#228BE6',
          backgroundColor: 'transparent',
          fontWeight: 500,
          fontSize: '1rem',
          padding: '0.5em 1em',
        }}
      >
        ← Back
      </Button>

      {/* Hero Section */}
      <Title
        order={2}
        ta="center"
        mb="xl"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          fontSize: '2.8rem',
          lineHeight: 1.2,
          color: '#333',
        }}
      >
        {project.title}
      </Title>

      {/* Links */}
      <Group spacing="md" mt="md" mb="xl" justify="center">
        {project.links.map((link, index) => (
          <Button
            key={index}
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            radius="xl"
            style={{ backgroundColor: '#3196edff', color: 'white' }}
          >
            {link.label}
          </Button>
        ))}
      </Group>

      {/* Project main image */}
      <Paper mb="xl" style={{ overflow: 'hidden' }}>
        <Image
          src={project.image}
          alt={project.title}
          fit="contain"
          style={{ width: '100%', height: 'auto' }}
        />
      </Paper>

      {/* Technologies */}
      <section>
        <Title
          order={3}
          mb="md"
          style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: 1.3, color: '#444' }}
        >
          Technologies
        </Title>
        <Group spacing="xs" mt="md">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="outline" size="lg">
              {tech}
            </Badge>
          ))}
        </Group>
      </section>

      {/* Overview */}
      <section className="project-overview" style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>
        <Title order={3} mb="sm">
          Overview
        </Title>
        <div dangerouslySetInnerHTML={{ __html: project.overview }} />
      </section>

      {/* Research */}
      {project.research?.length > 0 && (
        <section className="project-research" style={{ marginBottom: '1.5rem' }}>
          <Title order={3} mb="sm">
            Research
          </Title>
          <div dangerouslySetInnerHTML={{ __html: project.research }} />
        </section>
      )}

      {/* Styles */}
      {project.styles?.length > 0 && (
        <section className="project-styles" style={{ marginBottom: '1.5rem' }}>
          <Title order={3} mb="sm">
            Styles
          </Title>
          <div
            dangerouslySetInnerHTML={{__html: project.styles}}/>
        </section>
      )}

      {/* Extra Sections */}
      {project.extraSections?.map((section, i) => (
  <section key={i} className="extra-section">
    {section.title && <Title order={3}>{section.title}</Title>}

    <div className="extra-grid">
      {section.images.map((img, index) => (
        <div
          className={`extra-grid-item ${img.fullWidth ? 'full-width' : ''}`}
          key={index}
        >
          <ZoomableImage
          src={img.src || img}
          alt={img.title || section.title || ''}
          title={img.title}
        />

        </div>
      ))}
    </div>
  </section>
))}

    </Container>
  );
}