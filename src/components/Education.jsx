import "./Education.css";

const timeline = [
  {
    period: "Sep 2026 to present",
    title: "Web Developer",
    org: "ZIAPLEX Inc., Olongapo City",
    desc: "Promoted from OJT to full web developer. I work on client systems and full-stack features in PHP, Laravel, and MySQL.",
  },
  {
    period: "Feb to Jun 2026",
    title: "Web Developer Intern (OJT)",
    org: "On-the-job training, Olongapo City",
    desc: "Built features for real client systems in PHP, Laravel, and MySQL.",
  },
  {
    period: "2022 to 2026",
    title: "BS in Information Technology",
    org: "Gordon College, Olongapo City",
    desc: "Focused on web systems, database design, and software engineering.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Experience and education</h2>

      <ol className="timeline">
        {timeline.map((item) => (
          <li key={item.title}>
            <p className="soft">{item.period}</p>
            <div>
              <h3>{item.title}</h3>
              <p className="soft">{item.org}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
