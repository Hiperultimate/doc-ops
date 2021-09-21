import "./displayMessages.css";
import { useEffect, useRef } from "react";
import SingleChat from "./singleChat/SingleChat.jsx";

function DisplayMessages() {
  const fieldRef = useRef(null);

  useEffect(() => {
    fieldRef.current.scrollIntoView();
  });

  return (
    <div className="chat-box">
      <SingleChat
        whosChat={"sender"}
        sentAt={"6:54 AM"}
        messageText={"My name a jeff"}
      />
      <SingleChat
        whosChat={"receiver"}
        sentAt={"7:10 AM"}
        messageText={"And my name a john LOLLLL"}
      />
      <SingleChat
        whosChat={"sender"}
        sentAt={"6:54 AM"}
        messageText={"My name a jeff"}
      />
      <SingleChat
        whosChat={"receiver"}
        sentAt={"7:10 AM"}
        messageText={"And my name a john LOLLLL"}
      />
      <SingleChat
        whosChat={"sender"}
        sentAt={"6:54 AM"}
        messageText={"My name a jeff"}
      />
      <SingleChat
        whosChat={"receiver"}
        sentAt={"7:10 AM"}
        messageText={"And my name a john LOLLLL"}
      />
      <SingleChat
        whosChat={"sender"}
        sentAt={"6:54 AM"}
        messageText={
          "Officia cillum veniam officia Lorem labore sit adipisicing esse ea. Excepteur id enim ipsum excepteur eu commodo ut. Nostrud veniam non quis sunt reprehenderit ut pariatur irure aliqua tempor. Excepteur magna labore mollit nostrud esse consectetur. Minim exercitation officia eiusmod dolore adipisicing. Elit cillum qui aliquip id deserunt."
        }
      />

      <div ref={fieldRef} id={"scroll-to-bottom"} />
    </div>
  );
}

export default DisplayMessages;
