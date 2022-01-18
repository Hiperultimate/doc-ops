import "./patientBasicInfo.css";
import Combobox from "react-widgets/Combobox";
import DisplayMap from "../../displayMap/DisplayMap.jsx";
import InputField from "../../inputField/InputField.jsx";

function PatientBasicInfo({
  patientNameState = {},
  patientDOBState = {},
  patientAddressState = {},
  patientEmailState = {},
  patientPhoneState = {},
  patientPasswordHook = {},
  patientConfirmPasswordHook = {},
}) {
  const { patientName, setPatientName, nameErrorMsg } = patientNameState;
  const { patientDOB, setPatientDOB, dobErrorMsg } = patientDOBState;
  const {
    patientAddress,
    setPatientAddress,
    chooseAddress,
    addressPairGeo,
    addressGeoLocation,
    setAddressGeoLocation,
    addressErrorMsg,
  } = patientAddressState;
  const { patientEmail, setPatientEmail, emailErrorMsg } = patientEmailState;
  const { patientPhone, setPatientPhone, phoneErrorMsg } = patientPhoneState;
  const { password, setPassword, passwordErrorMsg } = patientPasswordHook;
  const { confirmPassword, setConfirmPassword, confPasswordErrorMsg } =
    patientConfirmPasswordHook;

  return (
    <div className="patient-basic-info global-box-shadow">
      <div className="patient-map-grid">
        <div className="patient-address-map">
          <DisplayMap
            addressLatLong={addressGeoLocation}
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
              />
              {nameErrorMsg.length !== 0 && (
                <div className="error-msg">{nameErrorMsg[0]}</div>
              )}
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
              />
              {dobErrorMsg.length !== 0 && (
                <div className="error-msg">{dobErrorMsg[0]}</div>
              )}
            </div>
            <div className="patient-address">
              <span className="input-heading">Address</span>
              <Combobox
                placeholder={"Enter your address"}
                data={chooseAddress}
                onChange={(value) => {
                  if (addressPairGeo[value]) {
                    setAddressGeoLocation(addressPairGeo[value]);
                  }
                  setPatientAddress(value);
                }}
                value={patientAddress}
              />
              {addressErrorMsg.length !== 0 && (
                <div className="error-msg">{addressErrorMsg[0]}</div>
              )}
            </div>
            <div className="patient-email">
              {setPatientEmail && (
                <div>
                  <InputField
                    heading={"Email"}
                    placeholder={"Enter email"}
                    type={"email"}
                    wrapperClass={"input-dimension"}
                    fieldName={"patient-email"}
                    setChange={setPatientEmail}
                    value={patientEmail}
                  />
                  {emailErrorMsg.length !== 0 && (
                    <div className="error-msg">{emailErrorMsg[0]}</div>
                  )}
                </div>
              )}
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
              />
              {phoneErrorMsg.length !== 0 && (
                <div className="error-msg">{phoneErrorMsg[0]}</div>
              )}
            </div>
            <div className="password-field">
              {setPassword && (
                <div>
                  <InputField
                    wrapperClass={"input-dimension"}
                    heading={"Password"}
                    placeholder={"Enter password"}
                    type={"password"}
                    fieldName={"password1"}
                    setChange={setPassword}
                    value={password}
                  />
                  {passwordErrorMsg.length !== 0 && (
                    <div className="error-msg">{passwordErrorMsg[0]}</div>
                  )}
                </div>
              )}
            </div>
            <div className="confirm-password-field">
              {setConfirmPassword && (
                <div>
                  <InputField
                    wrapperClass={"input-dimension"}
                    heading={"Confirm Password"}
                    placeholder={"Enter password"}
                    type={"password"}
                    fieldName={"password2"}
                    setChange={setConfirmPassword}
                    value={confirmPassword}
                  />
                  {confPasswordErrorMsg.length !== 0 && (
                    <div className="error-msg">{confPasswordErrorMsg[0]}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientBasicInfo;
