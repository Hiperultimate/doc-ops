import "./typingBar.css";
import SendSvg from "../../../svgs/send.svg";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase.js";

function TypingBar({ typeMessageState, selectedUserUID, currentUserUID }) {
  const { typeInput, setTypeInput } = typeMessageState;

  // Function to send chat text to firebase on submit
  const textSubmitHandler = async (e) => {
    e.preventDefault();

    const chatRoomString = currentUserUID > selectedUserUID ? `${currentUserUID + selectedUserUID}` : `${selectedUserUID + currentUserUID }`;
    if(typeInput !== ""){
      await addDoc(collection(db, 'chatRooms', chatRoomString, 'chat'),{
        typeInput,
        from: currentUserUID,
        to: selectedUserUID,
        createdAt: Timestamp.fromDate(new Date()),
      })
      setTypeInput("");
    }
  };

  return (
    <div className="chat-bar-container">
      <input
        type="text"
        className="chat-type-bar global-box-shadow"
        placeholder="Type Something..."
        onChange={(event) => setTypeInput(event.target.value)}
        value={typeInput}
      />
      <div
        className="send-icon-container global-box-shadow"
        onClick={textSubmitHandler}
      >
        <img className="send-icon" src={SendSvg} alt="sent-svg" />
      </div>
    </div>
  );
}

export default TypingBar;
