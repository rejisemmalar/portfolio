import { useEffect } from "react";
import "../styles/contact.css";

export default function Contact() {
  useEffect(() => {
    const cards = document.querySelectorAll(".contact-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
      <section className="contact-section">
        <h2 className="contact-title">Let’s Connect</h2>

        <div className="contact-grid">
          <a
            href="https://github.com/rejisemmalar"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <i className="bi bi-github"></i>
            <h4>GitHub</h4>
            <p>Explore code & projects</p>
          </a>

          <a href="tel:+919514179117" className="contact-card">
            <i className="bi bi-telephone"></i>
            <h4>Phone</h4>
            <p>+91 9514179117</p>
          </a>

          <a href="mailto:rejisemmalar99@gmail.com" className="contact-card">
            <i className="bi bi-envelope"></i>
            <h4>Email</h4>
            <p>rejisemmalar99@gmail.com</p>
          </a>
        </div>
      </section>
  );
}
