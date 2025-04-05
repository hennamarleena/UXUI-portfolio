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
            <h3>Hard Skills</h3>
            <ul className='skills-list'>
              <li>Visual composition & storytelling</li>
              <li>Figma</li>
              <li>React & Javascript</li>
              <li>Adobe Illustrator</li>
            </ul>
          </Paper>
        </div>

        <div className="skills-paper">
          <Paper shadow="md" radius="0" p="xl" style={{ backgroundColor: '#fff', height: '100%' }}>
            <h3>Soft Skills</h3>
            <ul>
              <li>Solution-driven</li>
              <li>Empathetic & user-focused</li>
              <li>Detail-oriented</li>
              <li>Goal setting</li>
            </ul>
          </Paper>
        </div>
      </div>
    </section>
  );
}
