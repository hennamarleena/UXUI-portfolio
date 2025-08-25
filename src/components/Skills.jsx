import { Paper } from '@mantine/core';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="skills-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-content">
        <div className="skills-paper">
          <Paper shadow="md" radius="0" p="xl" style={{ backgroundColor: '#fff', height: '100%' }}>
            <h3>Technical skills</h3>
            <ul className='skills-list'>
              <li>Figma</li>
              <li>React</li>
              <li>Javascript</li>
              <li>Adobe Illustrator</li>
              <li>CSS</li>
            </ul>
          </Paper>
        </div>

        <div className="skills-paper">
          <Paper shadow="md" radius="0" p="xl" style={{ backgroundColor: '#fff', height: '100%' }}>
            <h3>Core Strengths</h3>
            <ul>
              <li>Layout & visual design</li>
              <li>Solution-driven</li>
              <li>Empathetic & user-centered</li>
              <li>Attention to detail</li>
              <li>Goal setting</li>
            </ul>
          </Paper>
        </div>
      </div>
    </section>
  );
}
