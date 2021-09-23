import "./chatPrescriptions.css";
import PlusSvg from "../../../svgs/plus.svg";
import PrescriptionCard from "./prescriptionCard/PrescriptionCard.jsx";

const DisplayType = Object.freeze({
  DOCTOR: 1,
  PATIENT: 2,
});

function ChatPrescriptions({ displayType , setCloseSessionState}) {
  return (
    <div>
      <div className="prescription-heading-container">
        <span className="prescription-heading">Prescriptions</span>
        <span className="prescription-line-seperator" />
      </div>
      <div className="prescription-container">
        {/* Map function after fetching data: here*/}
        <PrescriptionCard
          medicineName={"Painkiller 2"}
          frequency={"1 Cup / 50ml"}
          quantity={"Once a day"}
          duration={"31 Sep - 5 Oct"}
          displayType={displayType}
        />
        <PrescriptionCard
          medicineName={"Afro Maker"}
          frequency={"5 Tablets"}
          quantity={"Once a day"}
          duration={"31 Sep - 5 Oct"}
          displayType={displayType}
        />
        <PrescriptionCard
          medicineName={"Sleep Medicine"}
          frequency={"3 Cups with 200ml Water"}
          quantity={"Twice a day"}
          duration={"31 Sep - 5 Oct"}
          displayType={displayType}
        />
      </div>
      {displayType === DisplayType.DOCTOR && (
        <div className="session-option-container">
          <span className="session-line-seperator" />

          <div className="chat-options">
            <button onClick={() => setCloseSessionState(true)} className="close-session-btn global-box-shadow">
              <span>Close Session</span>
            </button>
            <button className="add-prescription-btn global-box-shadow">
              <img className="plus-icon-svg" src={PlusSvg} alt="plus-svg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatPrescriptions;
