import "./prescriptionCard.css";
import { useState } from "react";
import CalendarSvg from "../../../../svgs/calendar-ico.svg";
import PillSvg from "../../../../svgs/pills-ico.svg";
import EditSvg from "../../../../svgs/edit-ico.svg";
import EditPrescriptionCard from "../editPrescriptionCard/EditPrescriptionCard.jsx";

function PrescriptionCard({
  medicineName,
  quantity,
  frequency,
  displayDuration,
  displayType,
  durationFrom,
  durationTo,
  prescriptionID,
  currentUserUID,
  selectedUserUID,
}) {
  const [editPrescription, setEditPrescription] = useState(false);

  return (
    <>
      <div className="prescription-tile-container global-box-shadow">
        {editPrescription && (
          <EditPrescriptionCard
            medicineName={medicineName}
            amount={quantity}
            frequency={frequency}
            durationFrom={durationFrom}
            durationTo={durationTo}
            prescriptionID={prescriptionID}
            currentUserUID={currentUserUID}
            selectedUserUID={selectedUserUID}
            editPrescriptionState={{
              editPrescription: editPrescription,
              setEditPrescription: setEditPrescription,
            }}
          />
        )}
        <div className="medicine-name">{medicineName}</div>
        <div className="frequency">
          <img className="svg-icons" src={CalendarSvg} alt="calendar-svg" />
          {quantity}
        </div>
        <div className="quantity">
          <img className="svg-icons" src={PillSvg} alt="pills-svg" />
          {frequency}
        </div>
        <div className="displayDuration">
          <span className="displayDuration-text">{displayDuration}</span>
        </div>
        <div className="edit-icon">
          {displayType === 1 && (
            <img
              onClick={() => setEditPrescription(true)}
              className="edit-ico"
              src={EditSvg}
              alt="edit-svg"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default PrescriptionCard;
