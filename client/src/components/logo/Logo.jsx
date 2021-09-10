import "./logo.css";

function Logo({logoColor}) {

  logoColor = logoColor || "var(--green)";  //Check index.html style tag for more color variables.
  const logoStyle = {color : logoColor};

  return (
    <a href="/" className="link logo-style">
      <span className="logo-text-doc" style={logoStyle}>Doc</span>
      <span className="logo-text-ops" style={logoStyle}>Ops</span>
    </a>
  );
}

export default Logo;
