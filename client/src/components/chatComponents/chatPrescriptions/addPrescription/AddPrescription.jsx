import "./addPrescription.css";
import CrossBgSvg from "../../../../svgs/cross-bg.svg";

function AddPrescription({ AddPrescriptionState }) {
  const { addPrescriptionState, setAddPrescriptionState } =
    AddPrescriptionState;
  return (
    addPrescriptionState && <>
      <div className="back-drop" />
      <div className="add-prescription-container">
        <img
            onClick={() => setAddPrescriptionState(false)}
          className="add-prescription-svg"
          src={CrossBgSvg}
          alt="cross-btn-svg"
        />
        <div class="create-prescription-grid">
          <div class="amount-text">Amount:</div>
          <div class="frequency-text">Frequency:</div>
          <div class="duration-text">Duration:</div>
          <div class="medicine-text">Medicine name:</div>
          <div class="medicine-input">
            <input
              className="create-prescription-input"
              type="text"
              placeholder="Enter medicine name..."
            />
          </div>
          <div class="amount-input">
            <input
              className="create-prescription-input"
              type="text"
              placeholder="Enter amount..."
            />
          </div>
          <div class="frequency-input">
            <input
              className="create-prescription-input"
              type="text"
              placeholder="Enter frequency..."
            />
          </div>
          <div class="duration-date-from">
            <input
              className="create-prescription-date-input"
              type="date"
            />
          </div>
          <div class="duration-date-to">
            <input
              className="create-prescription-date-input"
              type="date"
            />
          </div>
          <div class="create-prescription-btn">
            <button className="global-box-shadow create-btn-right">
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPrescription;
