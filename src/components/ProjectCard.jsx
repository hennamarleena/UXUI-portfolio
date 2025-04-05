import { Card, Button, Image } from '@mantine/core';

export default function ProjectCard({ projectData, onView }) {
  return (
    <Card shadow="md" radius="0" style={{ width: '400px', maxWidth: '100%' }}>

      <Card.Section>
        <Image src={projectData.image} alt={projectData.title} height={250} style={{ objectFit: 'cover' }} />
      </Card.Section>

      <Card.Section style={{ padding: '20px' }}>
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
      </Card.Section>

      <Card.Section style={{ padding: '10px 20px 20px', textAlign: 'center' }}>
        <Button 
          variant="filled" 
          radius={0} 
          color="#39C0D6" 
          onClick={() => onView(projectData)}
        >
          View
        </Button>
      </Card.Section>
      
    </Card>
  );
}
