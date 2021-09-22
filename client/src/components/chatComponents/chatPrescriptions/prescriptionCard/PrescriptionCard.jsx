import "./prescriptionCard.css";
import CalendarSvg from "../../../../svgs/calendar-ico.svg";
import PillSvg from "../../../../svgs/pills-ico.svg";
import EditSvg from "../../../../svgs/edit-ico.svg";

function PrescriptionCard({
  medicineName,
  quantity,
  frequency,
  duration,
  displayType,
}) {
  return (
    <>
      <div className="prescription-tile-container global-box-shadow">
        <div className="medicine-name">Painkiller 2</div>
        <div className="frequency">
          <img className="svg-icons" src={CalendarSvg} alt="calendar-svg" />
          Once a day
        </div>
        <div className="quantity">
          <img className="svg-icons" src={PillSvg} alt="pills-svg" />1 Cup /
          50ml
        </div>
        <div className="duration"><span className="duration-text">31 Sep - 5 Oct</span></div>
        <div className="edit-icon">
          <img className="edit-ico" src={EditSvg} alt="edit-svg" />
        </div>
      </div>
    </>
  );
}

export default PrescriptionCard;
