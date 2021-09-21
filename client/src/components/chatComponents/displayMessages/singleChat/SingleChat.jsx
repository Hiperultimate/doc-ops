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
      <span className={`sent-at ${whosChat === "sender" ? "right-pos" : "left-pos"}`}>{sentAt}</span><br/>
      <span className={`message-text ${whosChat === "sender" ? "right-pos right-message-style" : "left-pos left-message-style"}`}>{messageText}</span><br/>
    </div>
  );
}

export default SingleChat;
