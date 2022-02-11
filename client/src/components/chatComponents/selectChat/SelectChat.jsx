import "./selectChat.css";
import { useState, useEffect } from "react";
import ChatArrow from "../../../svgs/chat-arrow.svg";

import {
  collection,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase.js";

/* 
  viewType: 
  1: Doctors
  2: Patients

  Note: 
  This function takes two types of values for displayInfo
  displayInfo for Doctors : array 
  displayInfo for Patient : string

*/

function SelectChat({
  userName,
  unreadMessageCount,
  viewType,
  displayInfo,
  setChatHeadInfo,
  userType,
  setSelectedUserType,
  userUID,
  setSelectedUserUID,
  selectedUserUID,
  currentUserUID,
  setMessages,
}) {
  // A temporary solution for front end development
  const [isSelected, setisSelected] = useState(false);

  const onClickHandler = () => {
    setChatHeadInfo(userName);
    setSelectedUserType(userType);
    setSelectedUserUID(userUID);
  };

  // State change logic for selected chat user.
  useEffect(() => {
    if (selectedUserUID === userUID) {
      const fetchOldMessages = () => {
        const chatRoomString =
          currentUserUID > selectedUserUID
            ? `${currentUserUID + selectedUserUID}`
            : `${selectedUserUID + currentUserUID}`;

        const chatRoomRef = collection(db, "sessions", chatRoomString, "chat");
        const q = query(chatRoomRef, orderBy("createdAt", "asc"));

        onSnapshot(q, (querySnapshot) => {
          let msgs = [];
          querySnapshot.forEach((doc) => {
            msgs.push(doc.data());
          });
          setMessages(msgs);
        });
      };
      setisSelected(true);
      fetchOldMessages();
    } else {
      setisSelected(false);
    }
  }, [selectedUserUID, userUID, currentUserUID, setMessages]);

  return (
    <>
      <div
        onClick={onClickHandler}
        className={`select-chat-container global-box-shadow ${
          isSelected && "selected-chat"
        }`}
      >
        <div className="select-chat-username">{userName}</div>
        <div className="unread-messages">
          {isSelected === false ? (
            unreadMessageCount !== "0" && (
              <div
                className="unread-style"
                style={unreadMessageCount.length < 3 ? { width: "1.5em" } : {}}
              >
                {unreadMessageCount}
              </div>
            )
          ) : (
            <img
              className="chat-arrow-svg"
              src={ChatArrow}
              alt="chat-arrow-svg"
            />
          )}
        </div>
        <div className="display-info">
          {viewType === 1 ? "Diagnosis: " : "Specialization: "}
          {viewType === 1 ? displayInfo : displayInfo.join(", ")}
        </div>
      </div>
    </>
  );
}

export default SelectChat;
