import "./chat.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import CloseSessionBox from "../../components/chatComponents/chatPrescriptions/closeSessionBox/CloseSessionBox.jsx";
import SelectChat from "../../components/chatComponents/selectChat/SelectChat.jsx";
import ChatHead from "../../components/chatComponents/chatHead/ChatHead.jsx";
import TypingBar from "../../components/chatComponents/typingBar/TypingBar.jsx";
import DisplayMessages from "../../components/chatComponents/displayMessages/DisplayMessages.jsx";
import ChatPrescriptions from "../../components/chatComponents/chatPrescriptions/ChatPrescriptions.jsx";
import AddPrescription from "../../components/chatComponents/chatPrescriptions/addPrescription/AddPrescription.jsx";

const DisplayType = Object.freeze({
  DOCTOR: 1,
  PATIENT: 2,
});

/* 
    displayInfo:
    For DisplayType.PATIENT : string ; 
        eg "Common Cold"
        {
          userName: "Alanakov Bavonoichi",
          unreadMessageCount: "5",
          displayInfo: "Common Cold",
        }
    For DisplayType.Doctor : array ; 
        eg ["Surgeries", "Anesthetics", "Valorant", "Punjabi"]
        {
          userName: "Alanakov Bavonoichi",
          unreadMessageCount: "5",
          displayInfo: ["Surgeries", "Anesthetics", "Valorant", "Punjabi"],
        }
*/

function Chat() {
  let chatID = 0;

  const [closeSessionState, setCloseSessionState] = useState(false);
  const [closeSessionDiagnosis, setCloseSessionDiagnosis] = useState("");
  const [closeSessionComments, setCloseSessionComments] = useState("");
  const [addPrescriptionState, setAddPrescriptionState] = useState(false);
  const [displayType, setDisplayType] = useState(DisplayType.DOCTOR);
  const fetchChatUsers = [
    {
      userName: "Alanakov Bavonoichi",
      unreadMessageCount: "5",
      displayInfo: ["Surgeries", "Anesthetics", "Valorant", "Punjabi"],
    },
  ];

  return (
    <>
      <Navbar isFixed={true} />
      <CloseSessionBox
        closeSessionDiagnosisState={{
          closeSessionDiagnosis: closeSessionDiagnosis,
          setCloseSessionDiagnosis: setCloseSessionDiagnosis,
        }}
        closeSessionCommentsState={{
          closeSessionComments: closeSessionComments,
          setCloseSessionComments: setCloseSessionComments,
        }}
        closeSessionPassState={{
          closeSessionState: closeSessionState,
          setCloseSessionState: setCloseSessionState,
        }}
      />
      <AddPrescription
        AddPrescriptionState={{
          addPrescriptionState: addPrescriptionState,
          setAddPrescriptionState: setAddPrescriptionState,
        }}
      />
      <div className="chat-container">
        <div
          className="chat-nav"
          style={fetchChatUsers.length <= 0 ? { textAlign: "center" } : {}}
        >
          {fetchChatUsers.length <= 0 ? (
            <span className="empty-chat-nav">No users found</span>
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
          <DisplayMessages />
          <TypingBar />
        </div>
        <div className="set-prescription">
          <ChatPrescriptions
            displayType={displayType}
            setCloseSessionState={setCloseSessionState}
            setAddPrescriptionState={setAddPrescriptionState}
          />
        </div>
      </div>
    </>
  );
}

export default Chat;
