import "./chat.css";
import { useState, useEffect } from "react";

import Navbar from "../../components/navbar/Navbar.jsx";
import CloseSessionBox from "../../components/chatComponents/chatPrescriptions/closeSessionBox/CloseSessionBox.jsx";
import SelectChat from "../../components/chatComponents/selectChat/SelectChat.jsx";
import ChatHead from "../../components/chatComponents/chatHead/ChatHead.jsx";
import TypingBar from "../../components/chatComponents/typingBar/TypingBar.jsx";
import DisplayMessages from "../../components/chatComponents/displayMessages/DisplayMessages.jsx";
import ChatPrescriptions from "../../components/chatComponents/chatPrescriptions/ChatPrescriptions.jsx";
import AddPrescription from "../../components/chatComponents/chatPrescriptions/addPrescription/AddPrescription.jsx";

import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.js";
import { useAuth } from "../../utils/contexts/AuthContext.js";

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

  const { currentUser, currentUserData } = useAuth();
  const displayType =
    currentUserData.type === 1 ? DisplayType.DOCTOR : DisplayType.Patient;
  const [closeSessionState, setCloseSessionState] = useState(false);
  const [closeSessionDiagnosis, setCloseSessionDiagnosis] = useState("");
  const [closeSessionComments, setCloseSessionComments] = useState("");
  const [addPrescriptionState, setAddPrescriptionState] = useState(false);
  const [fetchChatUsers, setFetchChatUsers] = useState([]);

  // States for component : ChatHead
  const [chatHeadInfo, setChatHeadInfo] = useState("");
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [selectedUserUID, setSelectedUserUID] = useState(null);
  const [chatHeadAboutLink, setChatHeadAboutLink] = useState("");

  // States for component : TypingBar
  const [typeInput, setTypeInput] = useState("");

  // States to display messages
  const [messages, setMessages] = useState([]);

  // States for prescription
  const [prescriptionList, setPrescriptionList] = useState([]);

  useEffect(() => {
    // Create logic for unreadMessageCount
    async function fetchChatUserInfo(userUID) {
      let fetchUserData = await getDoc(doc(db, "users", userUID));
      const userInfo = fetchUserData.data();
      let returnData = {};
      if (userInfo.type === 1) {
        let parsedData = {
          userName: userInfo.doctorName,
          unreadMessageCount: "0",
          displayInfo: userInfo.specialization,
          userUID: userUID,
          userType: userInfo.type,
        };
        returnData = parsedData;
      } else {
        let parsedData = {
          userName: userInfo.name,
          unreadMessageCount: "0",
          displayInfo: userInfo.diagnosis, // Discuss what to do here
          userUID: userUID,
          userType: userInfo.type,
        };
        returnData = parsedData;
      }
      return returnData;
    }
    async function fetchChattingWithUsers() {
      onSnapshot(doc(db, "chattingWith", currentUser.uid), (querySnapshot) => {
        let chatUsers = [];
        if (querySnapshot.data()) {
          querySnapshot.data().users.forEach(async (user) => {
            let chattingWithUser = await fetchChatUserInfo(user);
            chattingWithUser.unreadMessageCount = querySnapshot.data().unreadMessage[user] ? querySnapshot.data().unreadMessage[user].toString() : "0";
            chatUsers.push(chattingWithUser);
            setFetchChatUsers([...chatUsers]);
          });
        }
      });
    }
    fetchChattingWithUsers();
  }, []);

  // Logic to set chatHeadAboutLink
  useEffect(() => {
    if (chatHeadInfo) {
      setChatHeadAboutLink(`/about/${selectedUserType}/${selectedUserUID}`);
    }
  }, [chatHeadInfo, selectedUserType, selectedUserUID]);

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
        UserStates={{
          currentUserUID: currentUser.uid,
          selectedUserUID: selectedUserUID,
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
                  currentUserUID={currentUser.uid}
                  userUID={chatUsers.userUID}
                  userType={chatUsers.userType}
                  setChatHeadInfo={setChatHeadInfo}
                  setSelectedUserType={setSelectedUserType}
                  setSelectedUserUID={setSelectedUserUID}
                  selectedUserUID={selectedUserUID}
                  setMessages={setMessages}
                  setPrescriptionList={setPrescriptionList}
                  key={chatID++}
                />
              );
            })
          )}
        </div>
        <div className="chat-text-area">
          <ChatHead userName={chatHeadInfo} aboutMeURL={chatHeadAboutLink} />
          {selectedUserUID ? (
            <DisplayMessages
              messages={messages}
              selectedUserUID={selectedUserUID}
              currentUserUID={currentUser.uid}
            />
          ) : (
            <div className="unselected-user-msg">
              Select a user to chat with.
            </div>
          )}
          {/* Sending text logic is in TypingBar component */}
          {selectedUserUID && (
            <TypingBar
              typeMessageState={{
                typeInput: typeInput,
                setTypeInput: setTypeInput,
              }}
              selectedUserUID={selectedUserUID}
              currentUserUID={currentUser.uid}
            />
          )}
        </div>
        <div className="set-prescription">
          <ChatPrescriptions
            displayType={displayType}
            currentUserUID={currentUser.uid}
            selectedUserUID={selectedUserUID}
            setCloseSessionState={setCloseSessionState}
            setAddPrescriptionState={setAddPrescriptionState}
            prescriptionList={prescriptionList}
            setPrescriptionList={setPrescriptionList}
          />
        </div>
      </div>
    </>
  );
}

export default Chat;
