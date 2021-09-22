import "./closeSessionBox.css";
import CrossBgSvg from "../../../../svgs/cross-bg.svg";

function CloseSessionBox({ CloseSessionState }) {
  return (
    <>
      <div className="back-drop" />
      <div className="close-session-box">
        <img
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
              className="close-session-input"
              type="text"
              placeholder="Enter diagnosis..."
            />
          </div>
          <div className="diagnosis-input-container">
            <input
              className="close-session-input"
              type="text"
              placeholder="Additional notes..."
            />
          </div>
          <div className="end-date-text">21 Sept, 2021 - 30 December</div>
          <div className="medication-list">
            <table>
                <tbody>
              <tr>
                <th>Name</th>
                <th>Frequency</th>
                <th>Duration</th>
              </tr>
              <tr>
                <td>Chemo</td>
                <td>Once a day</td>
                <td>31 Oct - 30 Dec</td>
              </tr>
              <tr>
                <td>Pain Killers</td>
                <td>Once a week</td>
                <td>15 Oct - 30 Dec</td>
              </tr>
              <tr>
                <td>Drug 2</td>
                <td>3 times a day</td>
                <td>31 Sept - 30 Dec</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="close-without-diagnosis-btn">
            <button className="global-box-shadow">
              Close Session Without Diagnosis
            </button>
          </div>
          <div className="session-close-btn">
            <button className="global-box-shadow">Close Session</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloseSessionBox;
