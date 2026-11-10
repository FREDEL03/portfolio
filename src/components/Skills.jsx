import "./Skills.css";

const groups = [
  ["Frontend", "HTML and CSS, JavaScript, Angular, React"],
  ["Backend", "PHP, Laravel, REST APIs, Node.js"],
  ["Database", "MySQL, database design, query optimization, Supabase"],
  ["Tools", "Git and GitHub, Figma, testing, Tailwind CSS (still learning)"],
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <dl className="skills">
        {groups.map(([name, items]) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>{items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
