import "./singleChat.css";

/* 

whosChat values: "sender" , "receiver"
    for eg. 
        logged in user is "sender", 
        when the logged in user receives a messages it's from the "receiver"

*/

function SingleChat({ whosChat, sentAt, messageText }) {
  return (
    <>
      <span className={`sent-at ${whosChat === "sender" ? "right-pos" : "left-pos"}`}>{sentAt}</span><br/>
      <span className={`message-text ${whosChat === "sender" ? "right-pos" : "left-pos"}`}>{messageText}</span><br/>
    </>
  );
}

export default SingleChat;
