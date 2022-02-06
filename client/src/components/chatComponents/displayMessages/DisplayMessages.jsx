import "./displayMessages.css";
import { useEffect, useRef } from "react";
import SingleChat from "./singleChat/SingleChat.jsx";

function DisplayMessages({ selectedUserUID, currentUserUID }) {
  const fieldRef = useRef(null);

  useEffect(() => {
    fieldRef.current.scrollIntoView();
  });

  let dummyChatData = [
    {
      whosChat: "sender",
      sentAt: "6:54 AM",
      messageText: "My name a jeff",
      id: "12315986",
    },
    {
      whosChat: "receiver",
      sentAt: "7:10 AM",
      messageText: "And my name a john LOLLLL",
      id: "1123154",
    },
    {
      whosChat: "sender",
      sentAt: "6:54 AM",
      messageText: "My name a jeff",
      id: "543657",
    },
    {
      whosChat: "receiver",
      sentAt: "7:10 AM",
      messageText: "And my name a john LOLLLL",
      id: "6354789",
    },
    {
      whosChat: "sender",
      sentAt: "6:54 AM",
      messageText: "My name a jeff",
      id: "543342657",
    },
    {
      whosChat: "receiver",
      sentAt: "7:10 AM",
      messageText:
        "Officia cillum veniam officia Lorem labore sit adipisicing esse ea. Excepteur id enim ipsum excepteur eu commodo ut. Nostrud veniam non quis sunt reprehenderit ut pariatur irure aliqua tempor. Excepteur magna labore mollit nostrud esse consectetur. Minim exercitation officia eiusmod dolore adipisicing. Elit cillum qui aliquip id deserunt.",
      id: "976856578",
    },
    {
      whosChat: "sender",
      sentAt: "6:54 AM",
      messageText:
        "Officia cillum veniam officia Lorem labore sit adipisicing esse ea. Excepteur id enim ipsum excepteur eu commodo ut. Nostrud veniam non quis sunt reprehenderit ut pariatur irure aliqua tempor. Excepteur magna labore mollit nostrud esse consectetur. Minim exercitation officia eiusmod dolore adipisicing. Elit cillum qui aliquip id deserunt.",
      id: "6423453",
    },
  ];

  return (
    <div className="chat-box">
      {dummyChatData.map((messages) => {
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
