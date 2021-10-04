import "./displayFormError.css";
import CrossBgSvg from "../../svgs/cross-bg.svg";

function DisplayFormError({ errorList }) {
  return (
    <div className="background-blur">
      <div className="error-window-container">
        <div className="error-top-window">
          <span>Invalid Input</span>
          <img className="error-close-btn" src={CrossBgSvg} alt="close-icon" />
        </div>
        <ul>
          <li>Date of Birth field cannot have a date from the future</li>
          <li>Phone number should be of 10 characters</li>
          <li>Weight should be greater than 0</li>
        </ul>
      </div>
    </div>
  );
}

export default DisplayFormError;
