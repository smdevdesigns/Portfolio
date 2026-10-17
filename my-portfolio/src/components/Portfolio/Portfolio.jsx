import HeroArtwork from "../HeroArtwork/HeroArtwork";
import About from "../About/About";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Portfolio.css";
import ComingSoon from "../ComingSoon/ComingSoon";
import { projects } from "../../mockdata/mockdata";

function ArrowUpRight({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
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

function DownloadIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navigation() {
  return (
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="Home">
        MyPortfolio
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#about">Skills</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <span className="eyebrow">Designer &amp; Developer</span>

        <h1>
          Ideas to <em>interfaces</em> that make an{" "}
          <span className="gradient-text">impact.</span>
        </h1>

        <p className="hero-description">
          I design and build digital products — from Figma concepts to fully
          functional web experiences.
        </p>

        <div className="hero-actions">
          <a className="button button-light" href="#projects">
            View my work <ArrowUpRight />
          </a>

          <a
            className="button button-outline"
            href="/CV1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>

      <HeroArtwork />

      <span className="scroll-cue">
        Scroll <span>↓</span>
      </span>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section section-wrap" id="projects">
      <div className="projects-heading">
        <h2>Selected Projects</h2>
        <span className="eyebrow">MY WORK</span>
        <p>A collection of applications and websites I've worked on.</p>
      </div>

      <div className="project-category">
        Development
        <span className="project-category-count">
          {projects.length} projects
        </span>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <ComingSoon />
    </section>
  );
}

export default function Portfolio() {
  return (
    <main className="portfolio">
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
