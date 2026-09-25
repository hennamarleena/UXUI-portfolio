import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Image, Group, Badge, Button, Title, Paper } from '@mantine/core';
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
    <div>
      {/* Back button */}
      <Group>
        <Button
          variant="transparent"
          onClick={handleBack}
          radius='xl'
          className='backButton'
          style={{
            marginBottom: '20px',
            color: '#228BE6',
            backgroundColor: 'transparent',
            fontWeight: 500,
            fontSize: '1rem',
          }}
        >
        ← Back
        </Button>
      </Group>

      {/* Hero Section */}
      <Title
        order={2}
        ta="center"
        mt='1.5em'
        mb="xl"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          fontSize: '2.4rem',
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
            style={{ backgroundColor: '#39C0D6', color: 'white' }}
          >
            {link.label}
          </Button>
        ))}
      </Group>

      {/* Project main image */}
      <section className="project-hero-image">
        <div className="project-content">
          <Paper className="project-main-image" style={{ overflow: 'hidden' }}>
            <Image
              src={project.image}
              alt={project.title}
              fit="contain"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </div>
      </section>

      {/* Technologies */}
      <section className="project-technologies-section">
      <div className="project-content">
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
        </div>
      </section>


    <ProjectComponent/>

    
    </div>
  );
}