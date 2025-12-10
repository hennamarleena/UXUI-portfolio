import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Image, Group, Badge, Button, Title, Container, Paper, Modal } from '@mantine/core';
import projects from './projectsData';

// Pääsivu yksittäiselle projektille
export default function ProjectPage() {
  const { id } = useParams(); // Haetaan URL:stä projekti-id
  const project = projects.find((p) => p.id === id); // Etsitään projekti datasta
  const navigate = useNavigate(); // React Routerin navigointi

  if (!project) return <p>Project not found</p>;

    const ProjectComponent = project.component;

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
        <Group spacing="xs" mt="md" mb="xl">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="outline" size="lg">
              {tech}
            </Badge>
          ))}
        </Group>
      </section>


    <ProjectComponent/>

    
    </Container>
  );
}