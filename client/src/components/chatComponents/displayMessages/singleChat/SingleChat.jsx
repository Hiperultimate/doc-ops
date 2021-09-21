import "./singleChat.css";

/* 

whosChat values: "sender" , "receiver"
    for eg. 
        logged in user is "sender", 
        when the logged in user receives a messages it's from the "receiver"

*/

function SingleChat({ whosChat, sentAt, messageText }) {
  return (
    <div class="message-container">
      <div class="msg-sent-at">
        <span
          className={`sent-at ${
            whosChat === "sender" ? "right-pos" : "left-pos"
          }`}
        >
          {sentAt}
        </span>
      </div>
      <div class="msg-box">
        <span
          className={`message-text global-box-shadow ${
            whosChat === "sender"
              ? "right-pos right-message-style"
              : "left-pos left-message-style"
          }`}
        >
          {messageText}
        </span>
      </div>
    </div>
  );
}

export default SingleChat;
