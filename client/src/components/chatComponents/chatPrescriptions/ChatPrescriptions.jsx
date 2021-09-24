import "./chatPrescriptions.css";
import PlusSvg from "../../../svgs/plus.svg";
import PrescriptionCard from "./prescriptionCard/PrescriptionCard.jsx";

const DisplayType = Object.freeze({
  DOCTOR: 1,
  PATIENT: 2,
});

function ChatPrescriptions({
  displayType,
  setCloseSessionState,
  setAddPrescriptionState,
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

  return (
    <div>
      <div className="prescription-heading-container">
        <span className="prescription-heading">Prescriptions</span>
        <span className="prescription-line-seperator" />
      </div>
      <div className="prescription-container">
        {fetchPrescriptionData.map((prescription) => {
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
        })}
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
