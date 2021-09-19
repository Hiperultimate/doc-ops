import "./patientBasicInfo.css";
import DisplayMap from "../../displayMap/DisplayMap.jsx";
import InputField from "../../inputField/InputField.jsx";

function PatientBasicInfo({
  patientNameState,
  patientDOBState,
  patientAddressState,
  patientEmailState,
  patientPhoneState,
}) {
  const { patientName, setPatientName } = patientNameState;
  const { patientDOB, setPatientDOB } = patientDOBState;
  const { patientAddress, setPatientAddress } = patientAddressState;
  const { patientEmail, setPatientEmail } = patientEmailState;
  const { patientPhone, setPatientPhone } = patientPhoneState;

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
              />
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientBasicInfo;
