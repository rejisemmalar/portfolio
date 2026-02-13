import "../styles/about.css";

// images
import figma from "../assets/skills/figma.svg";
import adobexd from "../assets/skills/adobexd.svg";
import react from "../assets/skills/react.svg";
import js from "../assets/skills/js.svg";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import tailwind from "../assets/skills/tailwind.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";
import postman from "../assets/skills/postman.svg";
import vscode from "../assets/skills/vscode.svg";

export default function AboutView() {
  return (
      <section id="about" className="about-section">
        <div className="about-container">
          {/* LEFT */}
          <div className="about-left">
            <h1>About Me</h1>

            <ul className="about-points">
              <li>
                <i className="bi bi-stars about-icon"></i>
                UI/UX Designer & UI Developer with 2+ years of experience
                building clean, user-centered digital experiences.
              </li>
              <li>
                <i className="bi bi-stars about-icon"></i>
                Worked at LAN Innovations developing responsive UIs with
                React.js and Bootstrap.
              </li>
              <li>
                <i className="bi bi-stars about-icon"></i>
                Creating intuitive user flows, interactive prototypes, scalable
                UI components, and subtle UI animations.
              </li>
              <li>
                <i className="bi bi-stars about-icon"></i>
                Focused on usability testing, performance optimization, and
                accessibility-driven design.
              </li>
              <li>
                <i className="bi bi-stars about-icon"></i>
                Enjoy crafting visually clean designs, building user-friendly
                UX, and adding subtle animations to enhance interactions.
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            <div className="about-card skills-card">
              <h2 className="skills-title">Core Skills</h2>

              <div className="skills-group">
                <h6>UI/UX Design Tools</h6>
                <div className="skills-logos">
                  <div className="skill-item" data-tooltip="Figma">
                    <img src={figma} alt="Figma" />
                  </div>
                  <div className="skill-item" data-tooltip="AdobeXD">
                    <img src={adobexd} alt="Adobe XD" />
                  </div>
                </div>
              </div>

              <div className="skills-group">
                <h6>UI Development</h6>
                <div className="skills-logos">
                  <div className="skill-item" data-tooltip="React">
                    <img src={react} alt="React" />
                  </div>

                  <div className="skill-item" data-tooltip="JavaScript">
                    <img src={js} alt="JavaScript" />
                  </div>

                  <div className="skill-item" data-tooltip="HTML">
                    <img src={html} alt="HTML" />
                  </div>

                  <div className="skill-item" data-tooltip="CSS">
                    <img src={css} alt="CSS" />
                  </div>
                  <div className="skill-item" data-tooltip="Bootstrap">
                    <img src={bootstrap} alt="Bootstrap" />
                  </div>
                  <div className="skill-item" data-tooltip="Tailwind">
                    <img src={tailwind} alt="Tailwind" />
                  </div>
                </div>
              </div>

              <div className="skills-group">
                <h6>Version Control & Tools</h6>
                <div className="skills-logos">
                  <div className="skill-item" data-tooltip="Git">
                    <img src={git} alt="Git" />
                  </div>
                  <div className="skill-item" data-tooltip="Github">
                    <img src={github} alt="GitHub" />
                  </div>
                  <div className="skill-item" data-tooltip="Postman">
                    <img src={postman} alt="Postman" />
                  </div>
                  <div className="skill-item" data-tooltip="VScode">
                    <img src={vscode} alt="VS Code" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
