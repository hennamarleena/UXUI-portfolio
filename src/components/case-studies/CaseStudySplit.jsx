export default function CaseStudySplit({
  variant = "",
  children,
}) {
  return (
    <div className={`project-split ${variant}`}>
      {children}
    </div>
  );
}