import { useEffect } from "react";
import "../styles/services.css";
const services = [
  {
    id: 1,
    icon: "bi-palette",
    title: "UI Design & Prototyping",
    desc: "Designing clean and modern interfaces with strong visual hierarchy and usability.",
  },
  {
    id: 2,
    icon: "bi-code-slash",
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React.",
  },
  {
    id: 3,
    icon: "bi-braces",
    title: "Figma to React Conversion",
    desc: "Converting Figma designs into pixel-perfect and functional React components.",
  },
  {
    id: 4,
    icon: "bi-search",
    title: "UI/UX Analysis & Usability Testing",
    desc: "Analyzing user behavior and testing UI flows to improve experience.",
  },
  {
    id: 5,
    icon: "bi-layout-text-window",
    title: "Web Application Development",
    desc: "Developing complete web applications with clean UI and smooth UX.",
  },
  {
    id: 6,
    icon: "bi-person-check",
    title: "User-Friendly Page Design",
    desc: "Creating intuitive and accessible layouts for better user engagement.",
  },
];

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
      <section className="services-section">
        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">
          Designing and developing clean interfaces with thoughtful user
          experience
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <i className={`bi ${service.icon} service-icon`}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
  );
}
