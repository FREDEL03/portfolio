import "./Hero.css";
import profileImage from "../assets/photo-removebg-preview.png";

const stack = [
  "Laravel",
  "PHP",
  "MySQL",
  "Blade",
  "Angular",
  "React",
  "JavaScript",
  "Supabase",
  "Git",
];

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-text">
          <h1>I'm Mark Aducal. I build web systems with Laravel.</h1>

          <p className="hero-lead">
            Web developer at ZIAPLEX Inc. in Olongapo City and a BSIT graduate
            of Gordon College. So far I've shipped an online store for LeydiBoss
            and a clinic system for a skincare salon.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn">
              See the projects
            </a>
            <a href="mailto:aducalremegio03@gmail.com">Email me</a>
            <a
              href="https://github.com/MARKYYY03"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mark-aducal-9b952025b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={profileImage} alt="Mark Aducal" />
        </div>
      </section>

      {/* Decorative: the same list is readable under Skills */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {stack.map((name) => (
                <span key={name}>
                  {name}
                  <i className="fa-solid fa-star-of-life"></i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
