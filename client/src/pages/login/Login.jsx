import "./login.css";
import { useState } from "react";
import InputField from "../../components/inputField/InputField.jsx";
import TheLifeSavers from "../../svgs/The Lifesavers One on One.svg";
import LifeSaversStethoscope from "../../svgs/The Lifesavers Stethoscope.svg";
import LifeSaversAvatar from "../../svgs/Lifesavers Avatar.svg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            <img
              src={LifeSaversStethoscope}
              className="life-savers-stethoscope-svg"
              alt="background-stethoscope"
            />
          </div>
        </div>
      </div>
      <div className="login-section">
        <div className="login-content">
          <img
            src={LifeSaversAvatar}
            className="life-savers-avatar-svg"
            alt="avatar svg"
          />
          <InputField
            placeholder={"Username"}
            wrapperClass={"login-field"}
            setChange={setUsername}
            value={username}
          />
          <InputField
            placeholder={"Password"}
            wrapperClass={"login-field"}
            type={"password"}
            setChange={setPassword}
            value={password}
          />
          <div className="login-link">Forgot Password?</div>
          <button className={"login-field login-button"} type="submit">
            Login
          </button>
          <div className="login-sub-text">
            Don't have an account? &nbsp;
            <span className="login-link"> Sign Up </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
