import "./editPrescriptionCard.css";
import CrossBgSvg from "../../../../svgs/cross-bg.svg";
import { useState } from "react";

function EditPrescriptionCard({
  medicineName,
  amount,
  frequency,
  durationFrom,
  durationTo,
  editPrescriptionState,
}) {
  const { editPrescription, setEditPrescription } = editPrescriptionState;
  const [medicineNameInput, setMedicineNameInput] = useState(
    medicineName || ""
  );
  const [amountInput, setAmountInput] = useState(amount || "");
  const [frequencyInput, setFrequencyInput] = useState(frequency || "");
  const [durationFromInput, setDurationFromInput] = useState(
    durationFrom.toISOString().split("T")[0]
  );
  const [durationToInput, setDurationToInput] = useState(
    durationTo.toISOString().split("T")[0]
  );

  const onChangeHandler = (e, setState) => {
    setState(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="edit-pres-backdrop" />
      <div className="add-prescription-container">
        <img
          onClick={() => setEditPrescription(false)}
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
            <button className="global-box-shadow create-btn-right update-pres-btn">
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditPrescriptionCard;
