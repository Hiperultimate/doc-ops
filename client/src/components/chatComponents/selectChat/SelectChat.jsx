import "./selectChat.css";

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
  return (
    <>
      <div class="select-chat-container global-box-shadow">
        <div class="select-chat-username">{userName}</div>
        {unreadMessageCount !== "0" && (
          <div class="unread-messages">
            <div
              className="unread-style"
              style={unreadMessageCount.length < 3 ? { width: "1.5em" } : {}}
            >
              {unreadMessageCount}
            </div>
          </div>
        )}
        <div class="display-info">
          {viewType === 1 ? "Specialization: " : "Diagnosis: "}
          {viewType === 1 ? displayInfo.join(", ") : displayInfo}
        </div>
      </div>
    </>
  );
}

export default SelectChat;
