import { Paper, Badge, SimpleGrid} from '@mantine/core';

const skillGroups = [
  {
    title: 'Development',
    skills: ['React', 'JavaScript', 'HTML5 & CSS', 'PHP fundamentals', 'WordPress'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'UX/UI design', 'Graphic design'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'WooCommerce', 'Adobe Illustrator', 'Adobe Photoshop'],
  },
  {
    title: 'Workflow',
    skills: ['AI-assisted development', 'Digital accessibility'],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="skills-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-content">
      <SimpleGrid
        cols={{ xs: 1, sm: 2, md: 2, lg: 2}}
        spacing="xs"
      >
          {skillGroups.map((group) => (
            <Paper
            key={group.title}
            radius="md"
            p="lg"
            style={{
              backgroundColor: '#fff',
              border: '0px solid #eee',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
              <h3 style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.2ch',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                {group.title}
              </h3>
              <ul style={{ padding: 0, margin: 0, listStyle: '', listStylePosition: 'inside' }}>
          {group.skills.map((skill) => (
            <li key={skill} style={{ paddingBottom: '8px' }}>
              {skill}
            </li>
          ))}
        </ul>
            </Paper>
          ))}
        </SimpleGrid>
      </div>
    </section>
  );
}