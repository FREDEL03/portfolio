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
        <p className="hero-caption">Meanwhile, in Olongapo City…</p>

        <div className="hero-text">
          <h1>I'm Mark Aducal. I build web systems with Laravel.</h1>

          <p className="hero-lead bubble">
            Web developer at ZIAPLEX Inc. and a BSIT graduate of Gordon College.
            So far I've shipped an online store for LeydiBoss and a clinic
            system for a skincare salon.
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

          {/* Decorative spinning stamp with the stack written around the rim */}
          <svg className="hero-badge" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path
                id="badge-ring"
                d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
              />
            </defs>
            <circle cx="100" cy="100" r="96" />
            <text className="badge-ring-text">
              <textPath
                href="#badge-ring"
                textLength="480"
                lengthAdjust="spacing"
              >
                {stack.join(" • ")} •{" "}
              </textPath>
            </text>
            <text className="badge-center" x="100" y="118" textAnchor="middle">
              DEV
            </text>
          </svg>
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
