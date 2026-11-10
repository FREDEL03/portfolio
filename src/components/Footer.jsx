import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Mark Aducal. Built with React and Vite.
    </footer>
  );
}
