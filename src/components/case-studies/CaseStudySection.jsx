import { Title } from "@mantine/core";

export default function CaseStudySection({
  number,
  title,
  variant,
  children,
}) {
  return (
    <section className={`project-section project-section--${variant}`}>
      <div className="project-content">
        {number && title && (
          <Title order={4}>
            {number} — {title}
          </Title>
        )}

        {children}
      </div>
    </section>
  );
}