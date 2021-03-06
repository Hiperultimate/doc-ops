import "./medicalHistory.css";

function MedicalHistory({ medicalHistory }) {
  let medHistKeys = 0;
  let medKeys = 0;
  return (
    <div>
      {!medicalHistory ? (
        <div className="no-history global-box-shadow">None</div>
      ) : (
        <div>
          {medicalHistory.map((historyItem) => {
            return (
              <div
                className="medical-info-grid global-box-shadow"
                key={medHistKeys++}
              >
                <div className="disease-name-heading">
                  {historyItem.DiseaseName}
                </div>
                <div className="doctor-comments">
                  <span className="info-sub-head">Comments:</span>
                  <span>{historyItem.Comments}</span>
                </div>
                <div className="display-medicines">
                  <div className="info-sub-head">Medicines:</div>
                  {historyItem.Medication.map((medInfo) => {
                    return (
                      <div key={medKeys++}>
                        <div className="medicine-grid">
                          <div className="med-name">{medInfo.medicineName}</div>
                          <div className="med-frequency">
                            {medInfo.medicineFrequency}
                          </div>
                          <div className="med-duration">
                            {medInfo.medicineDuration}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="cure-duration">{historyItem.CureTimeTaken}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MedicalHistory;
