import "../styles/SectionHeader.css";

const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  return (
    <div
      className={`section-header-block align-${align} ${light ? "is-light" : ""}`}
    >
      {badge && (
        <span className="section-badge">
          <span className="badge-dot"></span>
          {badge}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      <div className="section-divider">
        <span className="divider-line"></span>
        <span className="divider-accent"></span>
        <span className="divider-line"></span>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
