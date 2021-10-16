import "./medicalInfo.css";

function MedicalInfo({
  patientGender,
  patientAge,
  patientBloodgroup,
  patientHeight,
  patientWeight,
  patientAllergies,
}) {
  return (
    <div className="patient-medical-info global-box-shadow">
      <div className="patient-medical-info-grid">
        <div className="patient-gender">
          <span className="info-sub-head">Gender:</span>
          <span className="info-res">{patientGender}</span>
        </div>
        <div className="patient-age">
          <span className="info-sub-head">Age:</span>
          <span className="info-res">{patientAge} years</span>
        </div>
        <div className="patient-bloodgroup">
          <span className="info-sub-head">Bloodgroup:</span>
          <span className="info-res">{patientBloodgroup}</span>
        </div>
        <div className="patient-height">
          <span className="info-sub-head">Height:</span>
          <span className="info-res">{patientHeight} cm</span>
        </div>
        <div className="patient-weight">
          <span className="info-sub-head">Weight:</span>
          <span className="info-res">{patientWeight} Kg</span>
        </div>
        <div className="patient-allergies">
          <span className="info-sub-head">Allergies:</span>
          <span className="info-res">
            {patientAllergies.join(", ")}
            {patientAllergies.length > 0 ? "." : "None"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MedicalInfo;
