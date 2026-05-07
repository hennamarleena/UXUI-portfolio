const education = [
  {
    degree: "Bachelor of Business Administration, Business Information Systems",
    school: "Satakunta University of Applied Sciences",
    year: "2023-2026",
    focus: "Frontend development, UI/UX and software development",
  },
  {
    degree: "Bachelor of Culture and Arts",
    school: "Turku University of Applied Sciences",
    year: "2015-2019",
    focus: "Filmmaking, screenwriting, visual storytelling and creative production",
  },
  {
    degree: "Vocational Qualification in Audio-visual Communication, Media Assistant",
    school: "Forssa Vocational Institute",
    year: "2012-2015",
    focus: "Graphic design, studio photography, audio and video production",
  },
];

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title">
      <div className="education-title">
        <h2 id="background-title">Education</h2>
      </div>

        <div className="education-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {education.map((item) => (
            <div
              key={item.degree}
              style={{
                paddingBottom: '24px',
                borderBottom: '1px solid #eee',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#999',
                  marginBottom: '8px',
                }}
              >
                {item.year}
              </p>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '6px',
                  lineHeight: 1.4,
                }}
              >
                {item.degree}
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  color: '#444',
                  marginBottom: '6px',
                }}
              >
                {item.school}
              </p>

              <p
                style={{
                  fontSize: '14px',
                  color: '#777',
                  lineHeight: 1.6,
                }}
              >
                {item.focus}
              </p>
            </div>
          ))}
        </div>

    </section>
  );
}