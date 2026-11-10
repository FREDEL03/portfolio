import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-end">To be continued…</p>
      <p>© {new Date().getFullYear()} Mark Aducal. Built with React and Vite.</p>
    </footer>
  );
}
