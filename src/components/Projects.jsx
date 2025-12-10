import ProjectCard from './ProjectCard';
import projects from './projectsData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mantine/core';

export default function Projects() {

  const navigate = useNavigate();
  const [visible, setVisible] = useState(3);

  const handleViewProject = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px'}}>
        {projects.slice(0, visible).map((project) => (
          <ProjectCard
            key={project.id}
            projectData={project}
            onView={() => handleViewProject(project.id)}
          />
        ))}
      </div>

      {visible < projects.length && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Button
            variant="transparent"
            radius={25}
            color="#444"
            size="md"
            shadow="md"
            onClick={() => setVisible((prev) => prev + 3)}
          >
            Show more projects →
          </Button>
        </div>
      )}
    </section>
  );
}
