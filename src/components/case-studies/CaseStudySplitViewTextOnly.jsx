import { Title } from "@mantine/core";

export default function CaseStudySplitViewTextOnly({
  number,
  title,
  variant,
  children
}) {
  return (
    <section className={`project-section project-section--${variant}`}>
      <div className="project-content">

        <div className="project-split project-split--learning">

          <div>
            <Title order={4}>
              {number} — {title}
            </Title>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}