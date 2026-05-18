import { SimpleGrid } from '@mantine/core';

const skillGroups = [
  {
    title: 'Frontend Development',
    skills: [
      'React',
      'Javascript', 
      'HTML5',
      'CSS',
    ],
  },
  {
    title: 'Design',
    skills: [
      'Figma', 
      'UX/UI design',
      'Graphic design', 
      'Adobe Illustrator',
    ],
  },
  {
    title: 'CMS & E-commerce',
    skills: [
      'WordPress',
      'WooCommerce',
      'PHP fundamentals']
  },
  {
    title: 'Tools & Workflow',
    skills: [
      'Git', 
      'Accessibility',
      'AI-assisted workflow',
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="skills-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-content">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3 className="skill-card-title">{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </SimpleGrid>
      </div>
    </section>
  );
}