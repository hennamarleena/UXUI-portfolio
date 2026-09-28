import { Title } from "@mantine/core";

export default function CaseStudyLearning({
  number,
  title,
  items,
}) {
  return (
    <section className="project-section project-section--light">
      <div className="project-content">

        <div className="project-split project-split--learning">

          <div>
            <Title order={4}>
              {number} — {title}
            </Title>
          </div>

          <div className="project-learning">
            {items.map((item, index) => (
              <p key={index}>
                <strong>{item.title}</strong>
                <br />
                {item.text}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}