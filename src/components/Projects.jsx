import "./Projects.css";

const projects = [
  {
    title: "LeydiBoss",
    image: "/projects/leydiboss.png",
    desc: "My capstone: an online store and business management system for LeydiBoss Online. Customers browse and check out; the owner tracks inventory, orders, and sales.",
    features: [
      "Product catalog with category filtering",
      "Shopping cart and order management",
      "Admin dashboard for inventory and sales tracking",
      "User accounts and profiles",
      "Works on mobile and desktop",
    ],
    tech: "Angular, PHP, MySQL",
    liveUrl: "https://leydiboss.online",
    githubUrl: "https://github.com/MARKADUCAL/capstone",
  },
  {
    title: "Relevare",
    image: "/projects/relevare.png",
    desc: "A clinic and spa management system for a skincare boutique salon. Staff use it for client intake, appointments, and the day's schedule.",
    features: [
      "Client profiles with treatment history and skin records",
      "Appointment booking and calendar",
      "Staff dashboard with the daily schedule",
      "Service and package management",
      "Sign-in and real-time updates through Supabase",
    ],
    tech: "React, Next.js, Supabase",
    liveUrl: "https://skinclinic.vercel.app/login",
    githubUrl: "https://github.com/MARKADUCAL/relevare",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Work</h2>

      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project">
            {/* Screenshot is optional: drop a file in public/projects/ */}
            <img
              src={p.image}
              alt={`${p.title} screenshot`}
              onError={(e) => e.currentTarget.remove()}
            />

            <h3>{p.title}</h3>
            <p className="soft">{p.tech}</p>
            <p className="project-desc">{p.desc}</p>

            <details>
              <summary>What's in it</summary>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </details>

            <p className="project-links">
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit the site
              </a>
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                Source on GitHub
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
