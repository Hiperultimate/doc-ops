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

import { doc, getDoc } from "firebase/firestore";
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

  // const fetchChatUsers = [
  //   {
  //     userName: "Alanakov Bavonoichi",
  //     unreadMessageCount: "5",
  //     displayInfo: ["Surgeries", "Anesthetics", "Valorant", "Punjabi"],
  //   },
  // ];

  useEffect(() => {
    async function fetchChatUserInfo(userUID) {
      let fetchUserData = await getDoc(doc(db, "users", userUID));
      const userInfo = fetchUserData.data();
      let returnData = {};
      if (userInfo.type === 1) {
        let parsedData = {
          userName: userInfo.doctorName,
          unreadMessageCount: "5",
          displayInfo: userInfo.specialization,
          userUID: userUID,
          userType: userInfo.type,
        };
        returnData = parsedData;
      } else {
        let parsedData = {
          userName: userInfo.name,
          unreadMessageCount: "5",
          displayInfo: userInfo.diagnosis, // Discuss what to do here
          userUID: userUID,
          userType: userInfo.type,
        };
        returnData = parsedData;
      }
      return returnData;
    }
    async function fetchChattingWithUsers() {
      let chattingWith = await getDoc(doc(db, "chattingWith", currentUser.uid));

      let selectChatUser = [];
      const chattingWithList = chattingWith.data().users;
      for (let i = 0; i < chattingWithList.length; i++) {
        let chattingWithUser = await fetchChatUserInfo(chattingWithList[i]);
        selectChatUser.push(chattingWithUser);
      }
      setFetchChatUsers(selectChatUser);
      console.log(chattingWith.data().users);
    }
    fetchChattingWithUsers();
  }, []);

  // Set about me URL
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
                  userUID={chatUsers.userUID}
                  userType={chatUsers.userType}
                  setChatHeadInfo={setChatHeadInfo}
                  setSelectedUserType={setSelectedUserType}
                  setSelectedUserUID={setSelectedUserUID}
                  key={chatID++}
                />
              );
            })
          )}
        </div>
        <div className="chat-text-area">
          <ChatHead userName={chatHeadInfo} aboutMeURL={chatHeadAboutLink} />
          <DisplayMessages />
          <TypingBar
            typeMessageState={{
              typeInput: { typeInput },
              setTypeInput: { setTypeInput },
            }}
          />
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
