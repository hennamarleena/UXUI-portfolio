import { Card, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ projectData }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/project/${projectData.id}`);
  };

  return (
    <Card shadow="md" radius="0" style={{ width: '420px', maxWidth: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card.Section>
        <Image src={projectData.image} alt={projectData.title} height={250} style={{ objectFit: 'cover' }} />
      </Card.Section>

      <Card.Section style={{ padding: '20px', flexGrow: 1 }}>
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
      </Card.Section>

      <Card.Section style={{ padding: '10px 20px 35px', textAlign: 'center' }}>
        <Button variant="filled" radius={25} color="#39C0D6" size="md" onClick={handleView}>
          Read more
        </Button>
      </Card.Section>
    </Card>
  );
}
