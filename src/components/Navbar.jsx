import { useState } from "react";
import "./Navbar.css";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Experience"],
  ["contact", "Contact"],
];

export default function Navbar() {
  // main.jsx sets data-theme from localStorage before render
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-theme") !== "light",
  );

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIsDark(!isDark);
  };

  return (
    <nav className="navbar" aria-label="Main">
      <a href="#home" className="navbar-name">
        Mark Aducal
      </a>

      <ul className="navbar-links">
        {links.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        <i key={isDark ? "moon" : "sun"} className={`fa-solid fa-${isDark ? "moon" : "sun"}`}></i>
      </button>
    </nav>
  );
}
