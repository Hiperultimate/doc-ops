import "./chatHead.css";

function ChatHead({ userName, aboutMeURL }) {
  return (
    <div
      style={userName !== "" ? { display: true } : { display: "none" }}
      className="chat-head-container global-box-shadow"
    >
      <div className="about-container">
        <a className="chat-head-about" href={aboutMeURL}>
          About me
        </a>
      </div>
      <span className="head-name">{userName}</span>
    </div>
  );
}

export default ChatHead;
