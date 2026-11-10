import "./About.css";
import { useEffect, useState } from "react";
import barongPhoto from "../assets/barong grad pic.jpg";
import togaPhoto from "../assets/toga grad pic.jpg";

const isDark = () =>
  document.documentElement.getAttribute("data-theme") !== "light";

export default function About() {
  const [dark, setDark] = useState(isDark);

  // Follow the theme toggle in Navbar
  useEffect(() => {
    const observer = new MutationObserver(() => setDark(isDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <h2>About</h2>

      <div className="about">
        <div className="about-text">
          <p>
            I studied Information Technology at Gordon College in Olongapo City
            and graduated in 2026. I now work as a web developer, mostly on the
            backend with Laravel and Blade.
          </p>
          <p>
            My capstone was built in Angular, so I'm comfortable on the
            frontend too. What I enjoy most is designing a system that solves a
            real problem for the people who use it.
          </p>
        </div>

        <figure className="about-photo">
          <img
            src={dark ? barongPhoto : togaPhoto}
            alt={`Mark Aducal in ${dark ? "a barong" : "a graduation toga"}`}
          />
          <figcaption>
            {dark ? "Barong" : "Toga"} for {dark ? "dark" : "light"} mode. Try
            the theme switch.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
