import "./doctorCard.css";
import CheckSvg from "../../../svgs/check.svg";
import CrossSvg from "../../../svgs/cross.svg";
import CardArrowSvg from "../../../svgs/card-arrow.svg";

/* 
To display doctor information in homepage in a card style layout

parameters
----------
addCardClass : str, optional 
    Add custom styling to the card by adding className name to this attribute.
doctorObject : object
    A doctorObject carries information about the doctor.
    doctorObject should contain:
        doctorName : str
        clinicAddress : str
        onlineConsulation : bool
        treatments : arr
        specialization : arr
        consultationFee : int 

Returns
-------
Returns an HTML object with a card type layout
and displays important information about the doctor

*/
function DoctorCard({ addCardClass, doctorObject }) {
  const {
    doctorName,
    clinicAddress,
    onlineConsulation,
    treatments,
    specialization,
    consultationFee,
  } = doctorObject;

  const displayTreatments = treatments.slice(0,3).join(", ");
  const displaySpecialization = specialization.slice(0,3).join(", ");
  return (
    <div className={`${addCardClass} card-style global-box-shadow`}>
      <div className="card-grid">
        <div className="card-doctor-name">{doctorName}</div>
        <div className="clinic-address">{clinicAddress}</div>
        <div className="online-consultation">
          <span>Online Consultation:</span>
          {onlineConsulation ? (
            <img src={CheckSvg} className="align-check-cross" alt="check-icon" style={{ marginLeft: "4px" }}/>
          ) : (
            <img src={CrossSvg} className="align-check-cross" alt="cross-icon" style={{ marginLeft: "4px" }}/>
          )}
        </div>
        <div className="treatments">
          <span>Treatments:</span>
          <span className="card-pad-style">{displayTreatments}{treatments.length > 3 ? <span>, ...</span> : <span>.</span> } </span>
        </div>
        <div className="specialization">
          <span>Specialization:</span>
          <span className="card-pad-style">{displaySpecialization}{specialization.length > 3 ? <span>, ...</span> : <span>.</span> }</span>
        </div>
        <div className="consultation-fee">
          <span>Consultation Fee:</span>
          <span className="consult-fee-style">Rs. {consultationFee}</span>
        </div>
        <div className="card-btn"><img src={CardArrowSvg} className="card-btn-style" alt="doctor-about-btn" /></div>
      </div>
    </div>
  );
}

export default DoctorCard;
