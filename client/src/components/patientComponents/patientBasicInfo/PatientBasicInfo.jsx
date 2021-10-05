import "./patientBasicInfo.css";
import DisplayMap from "../../displayMap/DisplayMap.jsx";
import InputField from "../../inputField/InputField.jsx";

function PatientBasicInfo({
  patientNameState,
  patientDOBState,
  patientAddressState,
  patientEmailState,
  patientPhoneState,
  patientPasswordHook,
  patientConfirmPasswordHook,
}) {
  const { patientName, setPatientName } = patientNameState;
  const { patientDOB, setPatientDOB, dobErrorMsg } = patientDOBState;
  const { patientAddress, setPatientAddress } = patientAddressState;
  const { patientEmail, setPatientEmail } = patientEmailState;
  const { patientPhone, setPatientPhone, phoneErrorMsg } = patientPhoneState;
  const { password, setPassword, passwordErrorMsg } = patientPasswordHook;
  const { confirmPassword, setConfirmPassword, confPasswordErrorMsg } =
    patientConfirmPasswordHook;

  return (
    <div className="patient-basic-info global-box-shadow">
      <div className="patient-map-grid">
        <div className="patient-address-map">
          <DisplayMap
            addressLatLong={[1.3521, 103.8198]}
            mapBorderRadius={"0 10px 10px 0"}
          />
        </div>
        <div className="info-grid-area">
          <div className="basic-info-grid">
            <div className="patient-name">
              <InputField
                heading={"Name"}
                placeholder={"Enter name"}
                type={"text"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-name"}
                setChange={setPatientName}
                value={patientName}
                isRequired={true}
              />
            </div>
            <div className="patient-dob">
              <InputField
                heading={"Date Of Birth"}
                placeholder={"Enter date of birth"}
                type={"date"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-dob"}
                setChange={setPatientDOB}
                value={patientDOB}
                isRequired={true}
              />
              {dobErrorMsg.length !== 0 && (
                <div className="error-msg">{dobErrorMsg}</div>
              )}
            </div>
            <div className="patient-address">
              <InputField
                heading={"Address"}
                placeholder={"Enter your address"}
                type={"text"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-address"}
                setChange={setPatientAddress}
                value={patientAddress}
                isRequired={true}
              />
            </div>
            <div className="patient-email">
              <InputField
                heading={"Email"}
                placeholder={"Enter email"}
                type={"email"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-email"}
                setChange={setPatientEmail}
                value={patientEmail}
                isRequired={true}
              />
            </div>
            <div className="patient-phone">
              <InputField
                heading={"Phone"}
                placeholder={"Enter phone number"}
                type={"number"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-phone"}
                setChange={setPatientPhone}
                value={patientPhone}
                isRequired={true}
              />
              {phoneErrorMsg.length !== 0 && (
                <div className="error-msg">{phoneErrorMsg}</div>
              )}
            </div>
            <div className="password-field">
              <InputField
                wrapperClass={"input-dimension"}
                heading={"Password"}
                placeholder={"Enter password"}
                type={"password"}
                fieldName={"password1"}
                setChange={setPassword}
                value={password}
                isRequired={true}
              />
              {passwordErrorMsg.length !== 0 && (
                <div className="error-msg">{passwordErrorMsg}</div>
              )}
            </div>
            <div className="confirm-password-field">
              <InputField
                wrapperClass={"input-dimension"}
                heading={"Confirm Password"}
                placeholder={"Enter password"}
                type={"password"}
                fieldName={"password2"}
                setChange={setConfirmPassword}
                value={confirmPassword}
                isRequired={true}
              />
              {confPasswordErrorMsg.length !== 0 && (
                <div className="error-msg">{confPasswordErrorMsg}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientBasicInfo;
