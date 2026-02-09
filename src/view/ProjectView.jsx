import "../styles/project.css";
// img
import timeline from "../assets/images/timeline.png";
import decisionflow from "../assets/images/decision-flow.jpeg";
import digitalwatch from "../assets/images/Digitalwatch.jpeg";
import memorycapsule from "../assets/images/memory-capsule.jpeg";
import moodbased from "../assets/images/mood-based.png";

const projects = [
  {
    id: 1,
    title: "Timeline visulaizer",
    description:
      "Interactive timeline to visually track events, milestones, and progress over time.",
    image: timeline,
    tech: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    github: "https://github.com/rejisemmalar/timeline-visualizer",
    live: "https://timeline-visualizer-sgyi.vercel.app/",
  },

  {
    id: 2,
    title: "Mood Based Generator",
    description:
      "Generates content or UI themes dynamically based on the user’s selected mood.",
    image: moodbased,
    tech: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    github: "https://github.com/rejisemmalar/mood-based-generator.git",
    live: "https://mood-based-generator-nfo2.vercel.app/",
  },

  {
    id: 3,
    title: "Memory Capsule App",
    description:
      "Store memories, notes, and moments to unlock and revisit in the future.",
    image: memorycapsule,
    tech: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    github: "https://github.com/rejisemmalar/memory-capsule.git",
    live: "https://memory-capsule-phi.vercel.app/",
  },

  {
    id: 4,
    title: "Digital Watch",
    description:
      "Real-time digital clock displaying current time with a modern UI.",
    image: digitalwatch,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rejisemmalar/Digital-Watch.git",
    live: "https://digital-watch-livid.vercel.app/",
  },

  {
    id: 5,
    title: "Decision Flow Simulator",
    description:
      "Visual tool to simulate decision paths and outcomes step by step.",
    image: decisionflow,
    tech: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    github: "https://github.com/rejisemmalar/Decision-Flow-Simulator.git ",
    live: "https://decision-flow-simulator-2la1.vercel.app/",
  },
];

export default function Projectview() {
  return (
      <section className="projects-section">
        <h1 className="project-title">Projects</h1>
        <p className="project-subtitle">
          UI-focused projects built with clean design and interactive
          functionality
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                  <b>GitHub</b>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <b>Live</b>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
