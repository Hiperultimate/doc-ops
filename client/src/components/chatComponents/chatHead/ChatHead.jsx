import "./chatHead.css";
import { Link } from "react-router-dom";

function ChatHead({ userName, aboutMeURL }) {
  return (
    <div
      style={userName !== "" ? { display: true } : { display: "none" }}
      className="chat-head-container global-box-shadow"
    >
      <div className="about-container">
        <Link to={aboutMeURL} className="chat-head-about">About me</Link>
      </div>
      <span className="head-name">{userName}</span>
    </div>
  );
}

export default ChatHead;
