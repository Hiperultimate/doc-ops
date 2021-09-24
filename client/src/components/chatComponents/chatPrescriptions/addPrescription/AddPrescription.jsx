import "./addPrescription.css";
import CrossBgSvg from "../../../../svgs/cross-bg.svg";

function AddPrescription({ AddPrescriptionState }) {
  const { addPrescriptionState, setAddPrescriptionState } =
    AddPrescriptionState;
  return (
    addPrescriptionState && (
      <>
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
                className="create-prescription-input"
                type="text"
                placeholder="Enter medicine name..."
              />
            </div>
            <div className="amount-input">
              <input
                className="create-prescription-input"
                type="text"
                placeholder="Enter amount..."
              />
            </div>
            <div className="frequency-input">
              <input
                className="create-prescription-input"
                type="text"
                placeholder="Enter frequency..."
              />
            </div>
            <div className="duration-date-from">
              <input
                className="create-prescription-date-input"
                type="date"
                required
              />
              <span>From </span>
            </div>
            <div className="duration-date-to">
              <input className="create-prescription-date-input" type="date" />
              <span>To </span>
            </div>
            <div className="create-prescription-btn">
              <button className="global-box-shadow create-btn-right">
                Create
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default AddPrescription;
