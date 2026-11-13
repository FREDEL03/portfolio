import { useRef, useState } from "react";
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
  {
    title: "AI Ticket-to-PR",
    image: "/projects/ai-ticket-to-pr.png",
    desc: "Turns a ticket into Git workflow output. Upload a screenshot of a Jira, Linear, or GitHub ticket, or type or speak it, and it writes the branch name, commit messages, and PR description.",
    features: [
      "Upload a ticket screenshot (PNG, JPG, or WebP, up to 5 MB)",
      "Or describe the ticket by typing or voice",
      "Generates branch names, commit messages, and a PR description",
    ],
    tech: "Google Gemini 2.5 Flash",
    liveUrl: "https://ai-ticket-to-pr.vercel.app/",
  },
  {
    title: "DocuChat AI",
    image: "/projects/docuchat-ai.png",
    desc: "A document intelligence chatbot: a web app for asking questions about your documents.",
    liveUrl: "https://ai-document-chatbot-brown.vercel.app/",
  },
  {
    title: "DevOS",
    image: "/projects/devos.png",
    desc: "A developer productivity dashboard with a sign-in screen.",
    liveUrl: "https://devos-five.vercel.app/",
  },
];

export default function Projects() {
  const dialog = useRef(null);
  const [shot, setShot] = useState(null);
  const open = (p) => {
    setShot(p);
    dialog.current.showModal();
  };

  return (
    <section id="projects" className="section section-wide">
      <h2>Projects</h2>

      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project">
            {/* Screenshot is optional: drop a file in public/projects/ */}
            <button
              type="button"
              className="project-shot"
              onClick={() => open(p)}
              aria-label={`View ${p.title} screenshot full size`}
            >
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                onError={(e) => e.currentTarget.parentElement.remove()}
              />
            </button>

            <h3>{p.title}</h3>
            {p.tech && <p className="project-tech">{p.tech}</p>}
            <p className="project-desc">{p.desc}</p>

            {p.features && (
              <details>
                <summary>What's in it</summary>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </details>
            )}

            <p className="project-links">
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit the site
              </a>
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                  Source on GitHub
                </a>
              )}
            </p>
          </article>
        ))}
      </div>

      {/* Native dialog: Esc closes it; clicking anywhere closes it too */}
      <dialog
        ref={dialog}
        className="lightbox"
        onClick={() => dialog.current.close()}
      >
        <button type="button" className="lightbox-close" aria-label="Close">
          ✕
        </button>
        {shot && <img src={shot.image} alt={`${shot.title} screenshot`} />}
      </dialog>
    </section>
  );
}
