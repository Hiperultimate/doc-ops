import "./closeSessionBox.css";
import CrossBgSvg from "../../../../svgs/cross-bg.svg";

function CloseSessionBox({
  closeSessionPassState,
  closeSessionDiagnosisState,
  closeSessionCommentsState,
}) {
  const {closeSessionState, setCloseSessionState} = closeSessionPassState;
  const { closeSessionDiagnosis, setCloseSessionDiagnosis } =
    closeSessionDiagnosisState;
  const { closeSessionComments, setCloseSessionComments } =
    closeSessionCommentsState;

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    closeSessionState && (
      <>
        <div className="back-drop" />
        <div className="close-session-box">
          <img
            onClick={() => setCloseSessionState(false)}
            className="close-session-svg"
            src={CrossBgSvg}
            alt="cross-btn-svg"
          />
          <div className="close-session-grid">
            <div className="diagnosis-text">Diagnosis:</div>
            <div className="comments-text">Comments:</div>
            <div className="medication-text">Medication:</div>
            <div className="comment-input-container">
              <input
                onChange={(e) => handleInputChange(e, setCloseSessionComments)}
                value={closeSessionComments}
                className="close-session-input"
                type="text"
                placeholder="Additional notes..."
              />
            </div>
            <div className="diagnosis-input-container">
              <input
                onChange={(e) => handleInputChange(e, setCloseSessionDiagnosis)}
                value={closeSessionDiagnosis}
                className="close-session-input"
                type="text"
                placeholder="Enter diagnosis..."
              />
            </div>
            <div className="end-date-text">21 Sept, 2021 - 30 December</div>
            <div className="medication-list">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Frequency</th>
                    <th>Amount</th>
                    <th>Duration</th>
                  </tr>
                  <tr>
                    <td>Chemo</td>
                    <td>Once a day</td>
                    <td>50ml Chocobar</td>
                    <td>31 Oct - 30 Dec</td>
                  </tr>
                  <tr>
                    <td>Pain Killers</td>
                    <td>Once a week</td>
                    <td>5 Tablets</td>
                    <td>15 Oct - 30 Dec</td>
                  </tr>
                  <tr>
                    <td>Drug 2</td>
                    <td>3 times a day</td>
                    <td>3 Cups with 200ml Water</td>
                    <td>31 Sept - 30 Dec</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="close-without-diagnosis-btn">
              <button
                onClick={() => setCloseSessionState(false)}
                className="global-box-shadow diagnosis-btn-right"
              >
                Close Session Without Diagnosis
              </button>
            </div>
            <div className="session-close-btn">
              <button className="global-box-shadow">Close Session</button>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default CloseSessionBox;
