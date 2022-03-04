import "./addPrescription.css";
import CrossBgSvg from "../../../../svgs/cross-bg.svg";
import { useState } from "react";

import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../../firebase.js";

function AddPrescription({ AddPrescriptionState, UserStates }) {
  const { addPrescriptionState, setAddPrescriptionState } =
    AddPrescriptionState;
  const { currentUserUID, selectedUserUID } = UserStates;
  const [medicineNameInput, setMedicineNameInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [frequencyInput, setFrequencyInput] = useState("");
  const [durationFromInput, setDurationFromInput] = useState("");
  const [durationToInput, setDurationToInput] = useState("");

  const onChangeHandler = (e, setState) => {
    setState(e.target.value);
  };

  const onSubmitHandler = (e) => {
    async function addPrescription() {
      const prescriptionDetails = {
        medicineName: medicineNameInput,
        medicineAmount: amountInput,
        medicineFrequency: frequencyInput,
        medicineDurationFrom: Timestamp.fromDate(new Date(durationFromInput)),
        medicineDurationTo: Timestamp.fromDate(new Date(durationToInput)),
      };

      const chatRoomString =
        currentUserUID > selectedUserUID
          ? `${currentUserUID + selectedUserUID}`
          : `${selectedUserUID + currentUserUID}`;

      await addDoc(collection(db, "sessions", chatRoomString, "prescription"), {
        prescriptionDetails,
        from: currentUserUID,
        to: selectedUserUID,
        createdAt: Timestamp.fromDate(new Date()),
      });

      setMedicineNameInput("");
      setAmountInput("");
      setFrequencyInput("");
      setDurationFromInput("");
      setDurationToInput("");
      setAddPrescriptionState(false);
      
    }

    e.preventDefault();
    addPrescription();
  };

  return (
    addPrescriptionState && (
      <form onSubmit={onSubmitHandler}>
        <div className="back-drop" />
        <div className="add-prescription-container">
          <img
            onClick={() => setAddPrescriptionState(false)}
            className="add-prescription-svg"
            src={CrossBgSvg}
            alt="cross-btn-svg"
          />
          <div className="create-prescription-grid">
            <div className="amount-text">Amount:</div>
            <div className="frequency-text">Frequency:</div>
            <div className="duration-text">Duration:</div>
            <div className="medicine-text">Medicine name:</div>
            <div className="medicine-input">
              <input
                onChange={(e) => onChangeHandler(e, setMedicineNameInput)}
                className="create-prescription-input"
                type="text"
                value={medicineNameInput}
                placeholder="Enter medicine name..."
              />
            </div>
            <div className="amount-input">
              <input
                onChange={(e) => onChangeHandler(e, setAmountInput)}
                className="create-prescription-input"
                type="text"
                value={amountInput}
                placeholder="Enter amount..."
              />
            </div>
            <div className="frequency-input">
              <input
                onChange={(e) => onChangeHandler(e, setFrequencyInput)}
                className="create-prescription-input"
                type="text"
                value={frequencyInput}
                placeholder="Enter frequency..."
              />
            </div>
            <div className="duration-date-from">
              <input
                onChange={(e) => onChangeHandler(e, setDurationFromInput)}
                className="create-prescription-date-input"
                type="date"
                value={durationFromInput}
                required
              />
              <span>From </span>
            </div>
            <div className="duration-date-to">
              <input
                onChange={(e) => onChangeHandler(e, setDurationToInput)}
                className="create-prescription-date-input"
                type="date"
                value={durationToInput}
              />
              <span>To </span>
            </div>
            <div className="create-prescription-btn">
              <button className="global-box-shadow create-btn-right create-pres-btn">
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  );
}

export default AddPrescription;
