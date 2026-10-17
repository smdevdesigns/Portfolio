import "./ProjectCard.css";
function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  return (
    <a
      className="project-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} project`}
    >
      <div className="project-image-wrap">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />

        <span className="image-open">
          <ArrowUpRight />
        </span>
      </div>

      <div className="project-content">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className="project-arrow">
            <ArrowUpRight />
          </span>
        </div>

        <p className="project-description">{project.description}</p>
      </div>
    </a>
  );
}
