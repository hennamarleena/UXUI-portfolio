// import { Paper } from '@mantine/core';

// export default function Skills() {
//   return (
//     <section id="skills" aria-labelledby="skills-title">
//       <div className="skills-title">
//         <h2>Skills</h2>
//       </div>

//       <div className="skills-content">
//         <div className="skills-paper">
//           <Paper shadow="" radius="0" p="xl" style={{ backgroundColor: '#fff', height: '100%' }}>
//             {/* <h3>Technical skills</h3> */}
//             <ul className='skills-list'>
//               <li>Figma</li>
//               <li>React</li>
//               <li>Javascript</li>
//               <li>HTML/CSS</li>
//               <li>AI-enhanced workflow</li>
//               <li>Adobe Illustrator</li>
//               <li>Wordpress & Woocommerce</li>
//             </ul>
//           </Paper>
//         </div>
// {/* 
//         <div className="skills-paper">
//           <Paper shadow="md" radius="0" p="xl" style={{ backgroundColor: '#fff', height: '100%' }}>
//             <h3>Core Strengths</h3>
//             <ul>
//               
//             </ul>
//           </Paper>
//         </div> */}
//       </div>
//     </section>
//   );
// }

import { Paper } from '@mantine/core';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="skills-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-content">
        <Paper radius="0" p="xl" style={{ backgroundColor: '#fff' }}>
          <ul className="skills-list" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4px 40px',
          }}>
            <li>Figma</li>
            <li>React</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>Adobe Illustrator</li>
            <li>WordPress & WooCommerce</li>
            <li>Git</li>
            <li>AI-assisted development</li>
            <li>Layout & visual design</li>
            <li>Attention to detail</li>
          </ul>
        </Paper>
      </div>
    </section>
  );
}