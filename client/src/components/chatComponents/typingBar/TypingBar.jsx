import "./typingBar.css";
import SendSvg from "../../../svgs/send.svg";

import {
  collection,
  getDoc,
  doc,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../../firebase.js";

function TypingBar({ typeMessageState, selectedUserUID, currentUserUID }) {
  const { typeInput, setTypeInput } = typeMessageState;

  // Function to send chat text to firebase on submit
  const textSubmitHandler = async (e) => {
    e.preventDefault();

    const chatRoomString =
      currentUserUID > selectedUserUID
        ? `${currentUserUID + selectedUserUID}`
        : `${selectedUserUID + currentUserUID}`;
    if (typeInput !== "") {
      await addDoc(collection(db, "sessions", chatRoomString, "chat"), {
        typeInput,
        from: currentUserUID,
        to: selectedUserUID,
        createdAt: Timestamp.fromDate(new Date()),
      });

      let fetchUnreadMsgs = await getDoc(doc(db, "chattingWith", selectedUserUID));
      let updateUnreadMsg = {};
      updateUnreadMsg["unreadMessage"] =  {[currentUserUID]: fetchUnreadMsgs.data().unreadMessage[currentUserUID] + 1};
      await setDoc(doc(db, "chattingWith", selectedUserUID), updateUnreadMsg, { merge: true });

      setTypeInput("");
    }
  };

  // Function that triggers by pressing the enter key
  const enterSubmit = (e) => {
    if (e.key === 'Enter') {
      textSubmitHandler(e);
    }
  };

  return (
    <div className="chat-bar-container">
      <input
        type="text"
        className="chat-type-bar global-box-shadow"
        placeholder="Type Something..."
        onChange={(event) => setTypeInput(event.target.value)}
        onKeyPress={enterSubmit}
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
