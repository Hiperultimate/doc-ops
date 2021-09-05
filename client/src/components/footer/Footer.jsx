import "./footer.css";
import Logo from "../logo/Logo.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo logoColor="var(--green-secondary)"/>
      </div>
      <p>Copyright © DevOps All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
