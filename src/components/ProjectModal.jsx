import { Modal, Image, Group, Anchor, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Divider } from '@mantine/core';
import { Badge } from '@mantine/core';

export default function ProjectModal({ opened, onClose, project }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Modal 
    removeScrollProps={{
        allowPinchZoom: true,
      }}
      opened={opened} 
      onClose={onClose} 
      title={project.title} 
      centered 
      size="80%" 
      fullScreen={isMobile ? true : false}
      padding="xl"
      overlayProps={{ blur: 3 }}
    >
      {/* Pääkuva */}
      <Image 
        src={project.image} 
        alt={project.title} 
        height={"100%"} 
        style={{ objectFit: 'cover', marginBottom: '20px' }} 
      />

      {/* Käytetyt teknologiat */}
      <Title order={3} mt="md">Technologies used</Title>
      <Group spacing="xs" mt="md">
        {project.techStack.map((tech, index) => (
          <Badge key={index} variant="outline" size='lg'>{tech}</Badge>
        ))}
      </Group>
      <Divider my="sm" />

      {/* Linkit */}
      <Title order={3} mt="md">Project links</Title>
      <Group spacing="sm" mt="xs" mb="md">
        {project.links.map((link, index) => (
          <Anchor 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            c="blue"
          >
            {link.label}
          </Anchor>
        ))}
      </Group>

      <Divider my="sm" />

      {/* Overview */}
      <Title order={3} mt="md">Overview</Title>
      <Group spacing="sm" mt="xs" mb="md">
      <div
          dangerouslySetInnerHTML={{ __html: project.overview }}
        />
      </Group>
      
      {project.research.length > 0 && (
        <>
          <Divider my="sm" />
          <Title order={3} mt="md">Research</Title>
          <Group spacing="sm" mt="xs" mb="md">
          <div
            dangerouslySetInnerHTML={{ __html: project.research }}
          />
          </Group>
          <Divider my="sm" />
        </>
      )}

      {/* styles */}
      {project.styles.length > 0 && (
        <>
          <Title order={3} mt="md">Styles</Title>
          <Group spacing="sm" mt="xs" mb="md">
          <div
            dangerouslySetInnerHTML={{ __html: project.styles }}
          />
          </Group>
        </>
      )}
  
      {/* kuvat */}
      {project.extraImages.length > 0 && (
        <>
          <div style={{ display: 'flex', gap: '10px', flexDirection:"column", flexWrap: 'wrap', marginTop: '10px' }}>
            {project.extraImages.map((img, index) => (
              <Image 
                key={index} 
                src={img} 
                alt={`Extra ${index + 1}`} 
                width={"100%"} 
                style={{ objectFit: 'cover' }} 
              />
            ))}
          </div>
        </>
      )}
    </Modal>
  );
}
