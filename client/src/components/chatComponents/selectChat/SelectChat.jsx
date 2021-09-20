import "./selectChat.css";
import {useState} from "react";
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

function SelectChat({ userName, unreadMessageCount, viewType, displayInfo }) {
  // A temporary solution for front end development
  const [isSelected,setisSelected] = useState(false); 

  const onClickHandler = () => {
    setisSelected(prevState => !prevState);
  }
  return (
    <>
      <div onClick={onClickHandler} className={`select-chat-container global-box-shadow ${isSelected && "selected-chat"}`}>
        <div className="select-chat-username">{userName}</div>
          <div className="unread-messages">
            {isSelected === false ? 
            unreadMessageCount !== "0" && <div
              className="unread-style"
              style={unreadMessageCount.length < 3 ? { width: "1.5em" } : {}}
            >
              {unreadMessageCount}
            </div> : <img className="chat-arrow-svg" src={ChatArrow} alt="chat-arrow-svg"/> }
            
          </div>
        <div className="display-info">
          {viewType === 1 ? "Specialization: " : "Diagnosis: "}
          {viewType === 1 ? displayInfo.join(", ") : displayInfo}
        </div>
      </div>
    </>
  );
}

export default SelectChat;
