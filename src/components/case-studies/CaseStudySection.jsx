import { Title } from "@mantine/core";

export default function CaseStudySection({
  number,
  title,
  variant = "white",
  children,
}) {
  return (
    <section className={`project-section project-section--${variant}`}>
      <div className="project-content">
        <Title order={4}>
          {number} — {title}
        </Title>

        {children}
      </div>
    </section>
  );
}