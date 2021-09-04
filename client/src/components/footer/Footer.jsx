import "./footer.css";
import Logo from "../logo/Logo.jsx";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Logo logoColor="var(--green-secondary)"/>
      </div>
      <p>Copyright © DevOps All Rights Reserved</p>
    </div>
  );
}

export default Footer;
