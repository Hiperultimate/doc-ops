import Logo from "../logo/Logo.jsx";

import "./navbar.css";

function Navbar() {
  return (
    <div className="nav-bar global-box-shadow">
      <div className="nav-logo">
        <Logo />
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/home" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="/login-page" className="link">
              Login
            </a>
          </li>
          <li>
            <a href="/create-account" className="link">
              Create Account
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
