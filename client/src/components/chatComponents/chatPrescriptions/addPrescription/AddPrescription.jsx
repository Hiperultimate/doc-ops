import "./addPrescription.css";
import CrossBgSvg from "../../../../svgs/cross-bg.svg";
import { useState } from "react";

function AddPrescription({ AddPrescriptionState }) {
  const { addPrescriptionState, setAddPrescriptionState } =
    AddPrescriptionState;
  const [medicineNameInput, setMedicineNameInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [frequencyInput, setFrequencyInput] = useState("");
  const [durationFromInput, setDurationFromInput] = useState("");
  const [durationToInput, setDurationToInput] = useState("");

  const onChangeHandler = (e, setState) => {
    setState(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
