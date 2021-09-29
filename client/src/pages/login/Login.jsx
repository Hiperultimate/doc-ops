import "./login.css";
import { useState } from "react";
import TheLifeSavers from "../../svgs/The Lifesavers One on One.svg";
import LifeSaversStethoscope from "../../svgs/The Lifesavers Stethoscope.svg";
import LifeSaversAvatar from "../../svgs/Lifesavers Avatar.svg";
import Eye from "../../svgs/Eye.svg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

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
      <div className="login-section">
        <div className="login-content">
          <img
            src={LifeSaversAvatar}
            className="life-savers-avatar-svg"
            alt="avatar svg"
          />
          <input
            className="login-field"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <input
            className="login-field"
            placeholder="Password"
            type={passwordVisible ? "text" : "password"}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <img
            src={Eye}
            className="password-eye-svg"
            alt="show password"
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
          <a href="/" className="login-forgot-password login-link">
            Forgot Password?
          </a>
          <button className={"login-field login-button"} type="submit">
            Login
          </button>
          <div className="login-registration-prompt">
            Don't have an account? &nbsp;
            <a href="/registration" className="login-link">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
