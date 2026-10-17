import React, { useMemo, useState } from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Bloom Landing Page",
    category: "Development",
    tags: ["Development", "UI/UX"],
    description:
      "A modern landing page for a plant brand. Designed in Figma and built with React.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85",
    url: "https://example.com/bloom",
  },
  {
    title: "HabitTrack App",
    category: "Figma Design",
    tags: ["Figma Design", "Mobile"],
    description:
      "A productivity app concept with clean UI and minimal design in Figma.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
    url: "https://www.figma.com/",
  },
  {
    title: "Lume E-commerce",
    category: "Development",
    tags: ["Development", "E-commerce"],
    description:
      "A sleek e-commerce website built with React and a custom CMS.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
    url: "https://example.com/lume",
  },
  {
    title: "Analytics Dashboard",
    category: "Figma Design",
    tags: ["Figma Design", "UI/UX"],
    description:
      "A data dashboard design focused on clarity, hierarchy, and usability.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    url: "https://www.figma.com/",
  },
];

const filters = [
  "All",
  "Development",
  "Figma Design",
  "UI/UX",
  "Web Apps",
  "Mobile",
];

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
        A<span>.</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="talk-button" href="mailto:hello@example.com">
        Let’s Talk <ArrowUpRight size={15} />
      </a>
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
            rel="noreferrer"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
        <div className="tool-list" id="skills">
          <span>
            <b className="tool-dot figma">●</b> Figma
          </span>
          <span>
            <b className="tool-dot react">✳</b> React
          </span>
          <span>
            <b className="tool-dot next">N</b> Next.js
          </span>
          <span>
            <b className="tool-dot ts">TS</b> TypeScript
          </span>
          <span>
            <b className="tool-dot tailwind">≈</b> Tailwind
          </span>
        </div>
      </div>
      <HeroArtwork />
      <span className="scroll-cue">
        Scroll <span>↓</span>
      </span>
    </section>
  );
}

function HeroArtwork() {
  return (
    <div
      className="hero-art"
      aria-label="Preview of design and development work"
    >
      <div className="orb orb-pink" />
      <div className="orb orb-blue" />
      <div className="floating-note note-top">
        Design
        <br />
        in Figma ↘
      </div>
      <div className="design-window">
        <div className="window-sidebar">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="window-content">
          <div className="window-toolbar" />
          <div className="mini-grid">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="laptop">
        <div className="laptop-screen">
          <div className="mock-nav">
            Bloom <span>About　 Shop　 Journal</span>
          </div>
          <div className="mock-site-copy">
            <small>GROW SOMETHING GOOD</small>
            <strong>
              Where
              <br />
              ideas grow.
            </strong>
            <p>Thoughtful things for greener living.</p>
            <span className="mock-cta">Explore collection ↗</span>
          </div>
          <div className="mock-plant" />
        </div>
        <div className="laptop-base" />
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-ui">
          <small>Good morning</small>
          <strong>
            Small habits.
            <br />
            Big changes.
          </strong>
          <div className="phone-chart" />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="floating-note note-side">
        Build
        <br />
        for the web ↙
      </div>
      <div className="sparkle">✳</div>
    </div>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-number">
        01 <span>About me</span>
      </div>
      <div className="about-mantra">
        Design
        <br />
        Build
        <br />
        Create
        <br />
        Repeat <span>☺</span>
      </div>
      <div className="about-copy">
        <h2>
          A creative problem solver who loves turning ideas into{" "}
          <span className="purple-text">real experiences.</span>
        </h2>
        <p>
          I’m a designer and developer with a passion for clean design,
          intuitive user experiences, and meaningful products. I work across the
          full product journey — from early ideas and Figma designs to
          development and launch.
        </p>
        <div className="skill-cards">
          <div>
            <span className="skill-icon">↗</span>
            <strong>UI/UX Design</strong>
            <small>Figma, user research, prototyping</small>
          </div>
          <div>
            <span className="skill-icon">✳</span>
            <strong>Frontend Development</strong>
            <small>React, Next.js, responsive design</small>
          </div>
          <div>
            <span className="skill-icon">✧</span>
            <strong>Product Thinking</strong>
            <small>User focused, impact driven</small>
          </div>
        </div>
      </div>
      <div className="about-collage">
        <div className="collage-card collage-back">
          <span>Dashboard concept</span>
          <div className="fake-dashboard">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="collage-card collage-front">
          <span className="figma-mark">●</span>
          <div className="fake-phone">
            <i />
            <i />
            <i />
          </div>
          <b>
            Figma Design <ArrowUpRight size={14} />
          </b>
        </div>
        <span className="scribble">
          From sketches
          <br />
          to real products ↘
        </span>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      className="project-card"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title}`}
    >
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
        <span className="image-open">
          <ArrowUpRight />
        </span>
      </div>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-title-row">
        <h3>{project.title}</h3>
        <ArrowUpRight />
      </div>
      <p>{project.description}</p>
    </a>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          activeFilter === "All" ||
          project.category === activeFilter ||
          project.tags.includes(activeFilter),
      ),
    [activeFilter],
  );

  return (
    <section className="projects-section section-wrap" id="projects">
      <div className="projects-heading">
        <div className="section-number">
          02 <span>Selected work</span>
        </div>
        <h2>
          Projects<span>.</span>
        </h2>
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "filter active" : "filter"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <a
        className="button button-outline all-projects"
        href="mailto:hello@example.com"
      >
        Have a project in mind? <ArrowUpRight />
      </a>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section section-wrap" id="contact">
      <div>
        <span className="eyebrow">Have something in mind?</span>
        <h2>
          Let’s make
          <br />
          <span className="gradient-text">it happen.</span>
        </h2>
      </div>
      <div className="contact-right">
        <p>
          Open to interesting collaborations, freelance projects, and good
          conversations.
        </p>
        <a className="button button-light" href="mailto:hello@example.com">
          hello@example.com <ArrowUpRight />
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span>Designed with intention.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="portfolio">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
