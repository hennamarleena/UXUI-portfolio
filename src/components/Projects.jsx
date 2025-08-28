import ProjectCard from './ProjectCard';
import projects from './projectsData';
import { useNavigate } from 'react-router-dom';

export default function Projects() {

  const navigate = useNavigate();

 const handleViewProject = (index) => {
    navigate(`/project/${index}`);
  };  

  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectData={project}
            onView={() => handleViewProject(index)}
          />
        ))}
      </div>
    </section>
  );
}
