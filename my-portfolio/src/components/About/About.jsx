import {
  Code2,
  Palette,
  Sparkles,
  Gamepad2,
  Paintbrush,
  Mountain,
  Puzzle,
  Boxes,
  Lightbulb,
  BookOpen,
  WandSparkles,
} from "lucide-react";
import "./About.css";

const skillGroups = [
  {
    number: "01",
    title: "Development",
    subtitle: "Building for the web",
    icon: Code2,
    description:
      "I enjoy turning complex ideas into accessible, responsive, and reliable digital experiences.",
    categories: [
      {
        label: "Languages & foundations",
        skills: [
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Semantic HTML",
          "Responsive layouts",
          "Modern CSS",
          "Accessibility",
        ],
      },
      {
        label: "Frontend",
        skills: [
          "React",
          "Next.js",
          "Angular",
          "Vue.js",
          "React Native",
          "Component architecture",
          "Reusable components",
          "State management",
          "Forms & validation",
          "Client-side routing",
          "UI implementation",
          "Performance optimisation",
          "Cross-browser compatibility",
        ],
      },
      {
        label: "Backend & data",
        skills: [
          "Node.js",
          "REST APIs",
          "GraphQL",
          "API integration",
          "SQL",
          "Relational databases",
          "Data modelling",
          "Asynchronous programming",
          "Authentication",
          "Server-side development",
        ],
      },
      {
        label: "Tools & engineering",
        skills: [
          "Git",
          "GitHub",
          "Testing",
          "Debugging",
          "Error handling",
          "Code review",
          "Maintainable code",
          "Design systems",
          "Component libraries",
          "SEO fundamentals",
          "Cloud deployment",
          "CI/CD workflows",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Thinking beyond the interface",
    icon: Palette,
    description:
      "My Visual Communication Design background brings visual thinking, attention to detail, and user-focused design into the way I build.",
    categories: [
      {
        label: "Visual communication",
        skills: [
          "Figma",
          "Typography",
          "Font pairing",
          "Colour theory",
          "Colour palettes",
          "Visual hierarchy",
          "Grid systems",
          "Layout composition",
          "Brand identity",
          "Art direction",
          "Iconography",
          "Illustration",
        ],
      },
      {
        label: "UI & UX",
        skills: [
          "UI design",
          "UX design",
          "Wireframing",
          "Prototyping",
          "User journeys",
          "User flows",
          "Interaction design",
          "Information architecture",
          "Usability",
          "User-centred design",
          "Responsive design",
          "Accessible interfaces",
        ],
      },
      {
        label: "Design systems & delivery",
        skills: [
          "Design systems",
          "Component libraries",
          "Design tokens",
          "Style guides",
          "Developer handoff",
          "Design-to-code workflows",
          "Visual QA",
          "Spacing systems",
          "Consistency & polish",
          "Creative problem-solving",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Creative life",
    subtitle: "Curiosity fuels creativity",
    icon: Sparkles,
    description:
      "Outside of development, I like making things, exploring imaginative worlds, solving puzzles, and finding inspiration in creative play.",
    categories: [
      {
        label: "Making & experimenting",
        skills: [
          "Painting",
          "Blender",
          "3D modelling experiments",
          "Game design",
          "Creative projects",
          "Visual experimentation",
          "Personal projects",
          "Special Effects Makeup (SFX)",
          "Photography",
          "Flash animation",
        ],
      },
      {
        label: "Play & problem-solving",
        skills: [
          "Board games",
          "Escape rooms",
          "Puzzle solving",
          "Game nights",
          "Fantasy worlds",
          "Storytelling",
        ],
      },
      {
        label: "Outside time",
        skills: [
          "Bouldering",
          "Learning new skills",
          "Creative rabbit holes",
          "Coffee breaks",
          "Swimming",
          "Film & Cinema",
          "Go Karting",
          "Karoke nights",
        ],
      },
    ],
  },
];

const interests = [
  { label: "Building Apps", icon: Boxes },
  { label: "Game design", icon: Gamepad2 },
  { label: "Painting", icon: Paintbrush },
  { label: "Bouldering", icon: Mountain },
  { label: "Board games", icon: Puzzle },
  { label: "Fantasy worlds", icon: BookOpen },
  { label: "Creative experiments", icon: WandSparkles },
  { label: "Singing", icon: Lightbulb },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <header className="about-header">
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            A LITTLE ABOUT ME
            <span className="about-eyebrow-line" />
          </div>

          <h2 className="about-heading">
            Developer by craft.
            <br />
            <span>Designer by instinct.</span>
          </h2>

          <p className="about-intro">
            Hi, I'm Sophia, a Full Stack Engineer with a creative eye for design
            and a passion for building intuitive, user-friendly digital
            experiences. I love combining technology and creativity to bring
            ideas to life, solve problems, and create meaningful solutions. I'm
            always learning, exploring new technologies, and finding new ways to
            make the web better.
          </p>
        </header>

        <div className="about-skill-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="about-skill-card" key={group.number}>
                <div className="about-card-top">
                  <span className="about-card-number">{group.number}</span>
                  <span className="about-card-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                </div>

                <h3 className="about-card-title">{group.title}</h3>
                <p className="about-card-subtitle">{group.subtitle}</p>
                <p className="about-card-description">{group.description}</p>

                <div className="about-card-divider" />

                {group.categories.map((category) => (
                  <div className="about-skill-category" key={category.label}>
                    <h4>{category.label}</h4>
                    <div className="about-skill-tags">
                      {category.skills.map((skill) => (
                        <span className="about-skill-tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            );
          })}
        </div>

        <section className="about-interests">
          <div className="about-interests-heading">
            <span className="about-interests-sparkle">
              <Sparkles size={18} />
            </span>
            <div>
              <h3>A few of my favourite things</h3>
              <p>The things that keep me curious outside of work.</p>
            </div>
          </div>

          <div className="about-interest-grid">
            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <div className="about-interest-item" key={interest.label}>
                  <Icon size={17} strokeWidth={1.7} />
                  <span>{interest.label}</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
