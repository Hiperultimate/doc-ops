import "./login.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TheLifeSavers from "../../svgs/The Lifesavers One on One.svg";
import LifeSaversStethoscope from "../../svgs/The Lifesavers Stethoscope.svg";
import LifeSaversAvatar from "../../svgs/Lifesavers Avatar.svg";
import Eye from "../../svgs/Eye.svg";

import { ToastContainer, toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/contexts/AuthContext.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { login } = useAuth();

  const loginErrorMsg = () => toast("Email ID or Password is incorrect.");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorMsg("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch {
      setEmail("");
      setPassword("");
      setErrorMsg("Unable to sign in");
      setLoading(false);
    }
    loading && setLoading(false);
  };

  useEffect(() => {
    if (errorMsg) {
      loginErrorMsg();
    }
  }, [errorMsg]);

  return (
    <div className="login-page">
      <div className="welcome">
        <div className="nav-brand">DocOps</div>
        <div className="welcome-content">
          <div className="welcome-heading">
            Welcome to <strong>DocOps</strong>
          </div>
          <div className="welcome-sub-heading">
            Get your medical appointment today!
          </div>
          <div>
            <div className="floor-eclipse" />
            <img
              src={TheLifeSavers}
              className="life-savers-svg"
              alt="background-img1"
            />
          </div>
        </div>
      </div>
      <img
        src={LifeSaversStethoscope}
        className="life-savers-stethoscope-svg"
        alt="background-stethoscope"
      />
      <form onSubmit={handleLoginSubmit} className="login-section">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="login-content">
          <img
            src={LifeSaversAvatar}
            className="life-savers-avatar-svg"
            alt="avatar svg"
          />
          <input
            className="login-field"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
          <input
            className="login-field"
            placeholder="Password"
            type={passwordVisible ? "text" : "password"}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />
          <img
            src={Eye}
            className="password-eye-svg"
            alt="show password"
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
          <button
            className={"login-field login-button"}
            type="submit"
            disabled={loading}
          >
            Login
          </button>
          <div className="login-registration-prompt">
            Don't have an account? &nbsp;
            <Link to="/register" className="login-link">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
