import "./chatHead.css";

function ChatHead({userName, aboutURL}) {
  return (
    <div className="chat-head-container global-box-shadow">
      <div className="about-container">
        <a className="chat-head-about" href="/about">
          About me
        </a>
      </div>
      <span className="head-name">{userName}</span>
    </div>
  );
}

export default ChatHead;
