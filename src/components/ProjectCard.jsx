import { Card, Button, Image, Badge } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ projectData }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/project/${projectData.id}`);
  };

  return (
    <Card 
    radius="lg" 
    style={{ 
      width: '100%',
      height: '100%',
      display: 'flex', 
      flexDirection: 'column' 
      }}
    >
      <Card.Section>
        <Image src={projectData.image} alt={projectData.title} onClick={handleView} height={250} style={{ objectFit: 'cover', padding: '0px', paddingBottom: '10px', borderRadius: '0px', cursor:'pointer' }} />
      </Card.Section>

      <Card.Section style={{ padding: '20px', flexGrow: 1, textAlign: 'left'  }}>

      <div>

        {/* tulee myöhemmin:
        <h4>
          {projectData.type}
        </h4>
        {projectData.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="light"
              color="gray"
            >
              {tech}
            </Badge>
          ))} */}
        
        </div>

        <h3 onClick={handleView} style={{ cursor:'pointer' }}>{projectData.title}</h3>
        <p>{projectData.description}</p>
      </Card.Section>

      <Card.Section style={{ padding: '0px 20px 30px', textAlign: 'center' }}>
        <Button variant="filled" radius={25} color="#39C0D6" size="md" onClick={handleView}>
          Explore
        </Button>
      </Card.Section>
    </Card>
  );
}
