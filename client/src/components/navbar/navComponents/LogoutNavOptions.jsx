import { Link } from "react-router-dom";

function LogoutNavOptions() {
  return (
    <>
      <Link to="/" className="link items">
        Home
      </Link>
      <Link to="/login" className="link items">
        Login
      </Link>

      <Link to="/register" className="link items">
        Create Account
      </Link>
    </>
  );
}

export default LogoutNavOptions;
