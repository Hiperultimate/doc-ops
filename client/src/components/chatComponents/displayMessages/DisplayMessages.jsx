import "./displayMessages.css";
import { useEffect, useRef, useState } from "react";
import SingleChat from "./singleChat/SingleChat.jsx";

function DisplayMessages({ messages, selectedUserUID, currentUserUID }) {
  const fieldRef = useRef(null);
  const [displayMessage, setDisplayMessage] = useState([]);

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  useEffect(() => {
    fieldRef.current.scrollIntoView();
  });

  useEffect(() => {
    if (messages.length > 0) {
      let tempList = [];
      for (let i = 0; i < messages.length; i++) {
        tempList.push({
          whosChat: messages[i].from === currentUserUID ? "receiver" : "sender",
          sentAt: formatAMPM(new Date(messages[i].createdAt.seconds * 1000)),
          messageText: messages[i].typeInput,
          id: messages[i].from + messages[i].createdAt.seconds,
        });
      }
      setDisplayMessage(tempList);
    } else {
      setDisplayMessage([]);
    }
  }, [messages, currentUserUID]);

  useEffect(() => {
    console.log("mounted");
    return () => {console.log("Unmounted")}
  })

  return (
    <div className="chat-box">
      {displayMessage.map((messages) => {
        return (
          <SingleChat
            whosChat={messages.whosChat}
            sentAt={messages.sentAt}
            messageText={messages.messageText}
            key={messages.id}
          />
        );
      })}

      <div ref={fieldRef} id={"scroll-to-bottom"} />
    </div>
  );
}

export default DisplayMessages;
