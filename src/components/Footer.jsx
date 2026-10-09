import '../App.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const appName = "Smakfull";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-app-name">{appName}</p>
          <p className="footer-copyright">
            © {currentYear} {appName}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
