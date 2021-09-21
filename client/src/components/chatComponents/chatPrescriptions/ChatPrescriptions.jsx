import "./chatPrescriptions.css";
import PlusSvg from "../../../svgs/plus.svg";
import PrescriptionCard from "./prescriptionCard/PrescriptionCard.jsx";

function ChatPrescriptions() {
  return (
    <div>
      <div className="prescription-heading-container">
        <span className="prescription-heading">Prescriptions</span>
        <span className="prescription-line-seperator" />
      </div>
      <div className="prescription-container">
        <PrescriptionCard />
      </div>
      <div className="chat-options">
          <button className="close-session-btn global-box-shadow"><span>Close Session</span></button>
          <button className="add-prescription-btn global-box-shadow"><img src={PlusSvg} alt="plus-svg" /></button>
      </div>
    </div>
  );
}

export default ChatPrescriptions;
