import { Title } from "@mantine/core";

export default function CaseStudyIntro({
    number = "01",
    title = "Project overview",
    children,
    variant,
}) {
  return (
    <section className={`project-section project-section--${variant}`}>
        <div className="project-content">
          <div className="project-intro">

          <Title order={4} mb="sm">
            {number} — {title}
          </Title>

           {children}

          </div>
        </div>
    </section>   
);
}