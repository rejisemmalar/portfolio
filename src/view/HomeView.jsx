import myImg from "../assets/images/portfolio.jpeg";
import "../styles/home.css";
export default function HomeView() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* LEFT */}
        <div className="home-left">
          <h1>Hi, I'm Rejisemmalar G</h1>
          <h2>UI/UX Designer & UI Developer</h2>

          <p>
            UI/UX Designer & UI Developer focused on clean design and intuitive
            user experiences. I design thoughtful interfaces and develop
            responsive, modern UIs. Always learning and improving to create
            better digital products.
          </p>

          <div className="home-meta">
            <span className="meta-item">
              <i className="bi bi-geo-alt-fill"></i>
              Tamilnadu, India
            </span>

            <span className="meta-dot">•</span>

            <span className="meta-item available">
              <i className="bi bi-briefcase-fill"></i>
              Available Now
            </span>
          </div>

          <a
            href="/cv/Rejisemmalar-CV.pdf"
            download="Rejisemmalar_G_Resume"
            className="download-btn"
          >
            <i className="bi bi-file-earmark-arrow-down"></i>
            Download CV
          </a>
        </div>

        {/* RIGHT */}
        <div className="home-right">
          <div className="photo-glow">
            <img src={myImg} alt="Rejisemmalar" />
          </div>
        </div>
        <hr className="line" />
      </div>
    </section>
  );
}
