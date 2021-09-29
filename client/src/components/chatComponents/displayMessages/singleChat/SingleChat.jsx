import "./singleChat.css";

/* 

whosChat values: "sender" , "receiver"
    for eg. 
        logged in user is "sender", 
        when the logged in user receives a messages it's from the "receiver"

*/

function SingleChat({ whosChat, sentAt, messageText }) {
  return (
    <div className="message-container">
      <div className="msg-sent-at">
        <span
          className={`sent-at ${
            whosChat === "sender" ? "sender-text-pos" : "receiver-text-pos"
          }`}
        >
          {sentAt}
        </span>
      </div>
      <div className="msg-box">
        <span
          className={`message-text global-box-shadow ${
            whosChat === "sender"
              ? "sender-text-pos right-message-style"
              : "receiver-text-pos left-message-style"
          }`}
        >
          {messageText}
        </span>
      </div>
    </div>
  );
}

export default SingleChat;
