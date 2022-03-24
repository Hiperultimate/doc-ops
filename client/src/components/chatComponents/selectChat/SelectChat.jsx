import "./selectChat.css";
import { useState, useEffect } from "react";
import ChatArrow from "../../../svgs/chat-arrow.svg";

import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
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
  setPrescriptionList,
}) {
  // A temporary solution for front end development
  const [isSelected, setisSelected] = useState(false);
  // const [storeSub, setStoreSub] = useState(() => () => {});
  const [unSub, setUnSub] = useState(() => () => {});

  const onClickHandler = () => {
    setChatHeadInfo(userName);
    setSelectedUserType(userType);
    setSelectedUserUID(userUID);
  };

  // State change logic for selected chat user.
  useEffect(() => {
    console.log(
      "Something is changing here :",
      selectedUserUID,
      currentUserUID
    );
    if (selectedUserUID === userUID) {
      const fetchOldMessagesWithPrescription = () => {
        const chatRoomString =
          currentUserUID > selectedUserUID
            ? `${currentUserUID + selectedUserUID}`
            : `${selectedUserUID + currentUserUID}`;

        // Fetching chat messages
        const chatRoomRef = collection(db, "sessions", chatRoomString, "chat");
        const q = query(chatRoomRef, orderBy("createdAt", "asc"));

        unSub();
        // NEED TO UNSUBSCRIBE TO SNAPSHOT AFTER CHAT IS CHANGED    write useEffect snapshot function in DisplayMessages component for displaying messages and cleanup snapshot function using useEffect unmount and do the same with prescription
        const tempUnsub = onSnapshot(q, (querySnapshot) => {
          let msgs = [];
          console.log("RUNNING!?");
          querySnapshot.forEach((doc) => {
            msgs.push(doc.data());
          });
          setMessages(msgs);
        })
        const tempUnsub2 = () => {
          console.log("unSub :",selectedUserUID);
          unSub();
        }
        setUnSub(()=> tempUnsub2);

        
        // Note : This block of code does not create a collection in firebase.
        // Fetches existing prescription data for selected chat user for live data showcase.
        const prescriptionRef = collection(
          db,
          "sessions",
          chatRoomString,
          "prescription"
          );
          const q2 = query(prescriptionRef, orderBy("createdAt", "asc"));
          
          onSnapshot(q2, (querySnapshot) => {
            let tempPrescription = [];
            querySnapshot.forEach((doc) => {
              let prescriptionData = doc.data();
              prescriptionData.prescriptionDetails["id"] = doc.id;
              tempPrescription.push(prescriptionData);
            });
            setPrescriptionList(tempPrescription);
          });
      };
      setisSelected(true);
      fetchOldMessagesWithPrescription();
    } else {
      setisSelected(false);
    }
  }, [selectedUserUID, currentUserUID, userUID]);

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
