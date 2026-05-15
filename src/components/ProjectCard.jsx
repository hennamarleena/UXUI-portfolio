import { Card, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ projectData }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/project/${projectData.id}`);
  };

  return (
    <Card shadow="md" radius="lg" style={{ width: '500px', maxWidth: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card.Section>
        <Image src={projectData.image} alt={projectData.title} height={250} style={{ objectFit: 'cover', padding: '0px', borderRadius: '0px' }} />
      </Card.Section>

      <Card.Section style={{ padding: '20px', flexGrow: 1 }}>
        <h3>{projectData.title}</h3>
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
