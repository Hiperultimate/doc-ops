import "./typingBar.css";
import SendSvg from "../../../svgs/send.svg";

function TypingBar() {
  return (
    <div className="chat-bar-container">
      <input
        type="text"
        className="chat-type-bar global-box-shadow"
        placeholder="Type Something..."
      />
      <div className="send-icon-container global-box-shadow">
        <img className="send-icon" src={SendSvg} alt="sent-svg" />
      </div>
    </div>
  );
}

export default TypingBar;
