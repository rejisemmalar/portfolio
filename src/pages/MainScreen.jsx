import { useState } from "react";
import "../styles/main.css";
import HomeView from "../view/HomeView";
import AboutView from "../view/AboutView";
import Projectview from "../view/ProjectView";
import ContactView from "../view/ContactView";
import ServicesView from "../view/ServicesView";

function MainScreen() {
  const [active, setActive] = useState("home");

  return (
    <div className="splash-container">
      {/* Navbar */}
      <nav className="floating-nav">
        <button
          className={`nav-item ${active === "home" ? "active" : ""}`}
          onClick={() => setActive("home")}
        >
          <i className="bi bi-house"></i>
          <span>Home</span>
        </button>

        <button
          className={`nav-item ${active === "about" ? "active" : ""}`}
          onClick={() => setActive("about")}
        >
          <i className="bi bi-person"></i>
          <span>About</span>
        </button>

        <button
          className={`nav-item ${active === "projects" ? "active" : ""}`}
          onClick={() => setActive("projects")}
        >
          <i className="bi bi-folder"></i>
          <span>Projects</span>
        </button>

        <button
          className={`nav-item ${active === "services" ? "active" : ""}`}
          onClick={() => setActive("services")}
        >
          <i className="bi bi-code-slash"></i>
          <span>Services</span>
        </button>

        <button
          className={`nav-item ${active === "contact" ? "active" : ""}`}
          onClick={() => setActive("contact")}
        >
          <i className="bi bi-envelope"></i>
          <span>Contact</span>
        </button>
      </nav>

      {/* Single Hero Section */}
      <section className="hero-section">
        <div className="hero-container view-fade">
          {active === "home" && <HomeView />}
          {active === "about" && <AboutView />}
          {active === "projects" && <Projectview />}
          {active === "services" && <ServicesView />}
          {active === "contact" && <ContactView/>}
        </div>
      </section>
    </div>
  );
}

export default MainScreen;