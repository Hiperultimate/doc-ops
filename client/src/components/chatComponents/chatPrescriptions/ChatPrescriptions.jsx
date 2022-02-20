import "./chatPrescriptions.css";
import PlusSvg from "../../../svgs/plus.svg";
import MedicineBox from "../../../svgs/medicine-box.svg";
import PrescriptionCard from "./prescriptionCard/PrescriptionCard.jsx";

import { useEffect } from "react";

import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.js";

const DisplayType = Object.freeze({
  DOCTOR: 1,
  PATIENT: 2,
});

function ChatPrescriptions({
  displayType,
  setCloseSessionState,
  setAddPrescriptionState,
  currentUserUID,
  selectedUserUID,
  prescriptionList,
  setPrescriptionList,
}) {
  // Dummy data
  let fetchPrescriptionData = [
    {
      medicineName: "Painkiller 2",
      frequency: "1 Cup / 50ml",
      quantity: "Once a day",
      duration: "31 Sep - 5 Oct",
      id: 1,
    },
    {
      medicineName: "Afro Maker",
      frequency: "5 Tablets",
      quantity: "Once a day",
      duration: "31 Sep - 5 Oct",
      id: 2,
    },
    {
      medicineName: "Sleep Medicine",
      frequency: "3 Cups with 200ml Water",
      quantity: "Twice a day",
      duration: "31 Sep - 5 Oct",
      id: 3,
    },
  ];

  const chatRoomString =
    currentUserUID > selectedUserUID
      ? `${currentUserUID + selectedUserUID}`
      : `${selectedUserUID + currentUserUID}`;

  // Fetch chat prescription data for selected user through UID

  return (
    <div>
      <div className="prescription-heading-container">
        <span className="prescription-heading">Prescriptions</span>
        <span className="prescription-line-seperator" />
      </div>
      <div className="prescription-container">
        {fetchPrescriptionData.length === 0 ? (
          <div className="empty-prescription-list">
            <img src={MedicineBox} alt="medicine-box-svg" />
            {displayType === DisplayType.DOCTOR ? (
              <span>Add Prescription</span>
            ) : (
              <span>Empty prescription list</span>
            )}
          </div>
        ) : (
          fetchPrescriptionData.map((prescription) => {
            return (
              <PrescriptionCard
                medicineName={prescription.medicineName}
                frequency={prescription.frequency}
                quantity={prescription.quantity}
                duration={prescription.duration}
                displayType={displayType}
                key={prescription.id}
              />
            );
          })
        )}
      </div>
      {displayType === DisplayType.DOCTOR && (
        <div className="session-option-container">
          <span className="session-line-seperator" />

          <div className="chat-options">
            <button
              onClick={() => setCloseSessionState(true)}
              className="close-session-btn global-box-shadow"
            >
              <span>Close Session</span>
            </button>
            <button
              onClick={() => setAddPrescriptionState(true)}
              className="add-prescription-btn global-box-shadow"
            >
              <img className="plus-icon-svg" src={PlusSvg} alt="plus-svg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatPrescriptions;
