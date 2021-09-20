import "./chat.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import SelectChat from "../../components/chatComponents/selectChat/SelectChat.jsx";
import ChatHead from "../../components/chatComponents/chatHead/ChatHead.jsx";

const DisplayType = Object.freeze({
  DOCTOR: 1,
  PATIENT: 2,
});

/* 

    displayInfo:
    For PATIENT : string ; eg "Common Cold"
    For DOCTOR : array ; eg ["Surgeries", "Anesthetics", "Valorant", "Punjabi"]

*/

function Chat() {
  let chatID = 0;
  const [displayType, setDisplayType] = useState(DisplayType.PATIENT);
  const fetchChatUsers = [
    {
      userName: "Alanakov Bavonoichi",
      unreadMessageCount: "5",
      displayInfo: "Common Cold",
    },
    {
      userName: "Suzukaze Nozuaki",
      unreadMessageCount: "103",
      displayInfo: "Uncommon Cold",
    },
    {
      userName: "Rasnek Poker",
      unreadMessageCount: "0",
      displayInfo: "Rare Cold",
    },
    {
      userName: "Fantasma Rais",
      unreadMessageCount: "0",
      displayInfo: "Epic Cold",
    },
    {
      userName: "Zankarea Zeus",
      unreadMessageCount: "21",
      displayInfo: "Legendary Cold",
    },
  ];

  // Patient view of doctor chat entry example
  //   const fetchChatUsers = [
  //     {
  //       userName: "Alanakov Bavonoichi",
  //       unreadMessageCount: "5",
  //       displayInfo: ["Surgeries", "Anesthetics", "Valorant", "Punjabi"],
  //     },
  //   ];

  return (
    <>
      <Navbar isFixed={true} />
      <div className="chat-container">
        <div
          className="chat-nav"
          style={fetchChatUsers.length <= 0 ? { textAlign: "center" } : {}}
        >
          {fetchChatUsers.length <= 0 ? (
            <span className="empty-chat-nav">No users found...</span>
          ) : (
            fetchChatUsers.map((chatUsers) => {
              return (
                <SelectChat
                  userName={chatUsers.userName}
                  unreadMessageCount={chatUsers.unreadMessageCount}
                  displayInfo={chatUsers.displayInfo}
                  viewType={displayType}
                  key={chatID++}
                />
              );
            })
          )}
        </div>
        <div className="chat-text-area">
          <ChatHead userName={"Alanakov Banovoichi"} />
        </div>
        <div className="set-prescription">Give Prescription</div>
      </div>
    </>
  );
}

export default Chat;
