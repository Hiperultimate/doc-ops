import Logo from "../logo/Logo.jsx";

import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        {/* <a href="/home" className="link">
          <span className="logo-text-doc">Doc</span>
          <span className="logo-text-ops">Ops</span>
        </a> */}
        <Logo />
        <nav>
          <ul>
            <li>
              <a href="/home" className="link">Home</a>
            </li>
            <li>
              <a href="/login-page" className="link">Login</a>
            </li>
            <li>
              <a href="/create-account" className="link">Create Account</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
