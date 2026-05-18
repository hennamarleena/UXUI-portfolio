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
        flexDirection: 'column',
        cursor: 'default',
      }}
    >
      <Card.Section>
        <Image
          src={projectData.image}
          alt={projectData.title}
          onClick={handleView}
          height={250}
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
      </Card.Section>

      <Card.Section
        style={{
          padding: '20px',
          flexGrow: 1,
          textAlign: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '16px',
            alignItems: 'center',
          }}
        >
          <Badge
            size="md"
            radius="xl"
            variant="filled"
            color="cyan"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontWeight: 700,
            }}
          >
            {projectData.type}
          </Badge>

          {projectData.essentialTechStack.map((tech) => (
            <Badge
              key={tech}
              size="md"
              radius="xl"
              variant="light"
              color="gray"
              style={{
                fontWeight: 500,
              }}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <h3
          onClick={handleView}
          style={{
            cursor: 'pointer',
            margin: '0 0 5px 0',
            fontSize: '1.5rem',
            fontWeight: 700,
          }}
        >
          {projectData.title}
        </h3>

        <p
          style={{
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {projectData.description}
        </p>
      </Card.Section>

      <Card.Section
        style={{
          padding: '0 20px 30px',
          textAlign: 'center',
        }}
      >
        <Button
          variant="filled"
          radius={25}
          color="cyan"
          size="md"
          onClick={handleView}
        >
          Explore
        </Button>
      </Card.Section>
    </Card>
  );
}