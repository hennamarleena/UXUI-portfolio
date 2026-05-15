import ProjectCard from './ProjectCard';
import projects from './projectsData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export default function Projects() {

  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2>Projects</h2>

    <Carousel
      withIndicators
      align="start"
      slideSize={{ base: '100%', sm: '100%', md: '33%', lg: '33.339%' }}
      slideGap="xl"
      controlSize={35}
      emblaOptions={{ loop: true, align: 'start' }}
      styles={{
        root: { maxWidth: '90%', 
                margin: '0 auto', 
                padding: '0 80px 50px' },
        control: { backgroundColor: '#39C0D6',
                   color: '#fff', 
                   border: 'none' },
        indicator: { backgroundColor: '#39C0D6' },
      }}
    >
        {projects.map((project) => (
          <Carousel.Slide key={project.id}>
            <ProjectCard projectData={project} />
          </Carousel.Slide>
        ))}

      </Carousel>


    </section>
  );
}
