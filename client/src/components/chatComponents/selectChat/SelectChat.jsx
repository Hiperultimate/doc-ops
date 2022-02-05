import "./selectChat.css";
import { useState, useEffect } from "react";
import ChatArrow from "../../../svgs/chat-arrow.svg";

/* 
  viewType: 
  1: Doctors
  2: Patients

  Note: 
  This function takes two types of values for displayInfo
  displayInfo for Doctors : array 
  displayInfo for Patient : string

*/

function SelectChat({ userName, unreadMessageCount, viewType, displayInfo,setChatHeadInfo,userType,setSelectedUserType, userUID, setSelectedUserUID  }) {
  // A temporary solution for front end development
  const [isSelected, setisSelected] = useState(false);

  const onClickHandler = () => {
    setisSelected((prevState) => !prevState);
    setChatHeadInfo(userName);
    setSelectedUserType(userType);
    setSelectedUserUID(userUID);
  };
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
