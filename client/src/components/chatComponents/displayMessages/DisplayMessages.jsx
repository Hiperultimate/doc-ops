import "./displayMessages.css";
import {useEffect, useRef } from "react";
import SingleChat from "./singleChat/SingleChat.jsx";

function DisplayMessages() {
  const fieldRef = useRef(null);

  useEffect(()=> {
    fieldRef.current.scrollIntoView();
  })

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
        messageText={"My name a jeff"}
      />
      <SingleChat
        whosChat={"receiver"}
        sentAt={"7:10 AM"}
        messageText={"And my name a john LOLLLL"}
      />
      <div ref={fieldRef} id={"scroll-to-bottom"}/>
    </div>
  );
}

export default DisplayMessages;
