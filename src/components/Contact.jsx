import { useState } from "react";
import "./Contact.css";

const EMAIL = "aducalremegio03@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      // FormSubmit: no backend needed
      const res = await fetch(`https://formsubmit.co/${EMAIL}`, {
        method: "POST",
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="contact">
        <p className="contact-lead">
          Have a project or an opening? Send a message here, or email me at{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Your email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button className="btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p role="status" className="contact-status">
            {status === "sent" && "Message sent. I'll reply by email."}
            {status === "error" &&
              `The message didn't send. Try again, or email ${EMAIL} directly.`}
          </p>
        </form>

        <p className="contact-links">
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
        </p>
      </div>
    </section>
  );
}
