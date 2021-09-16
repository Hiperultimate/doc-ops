import "./patientBasicInfo.css";
import DisplayMap from "../../displayMap/DisplayMap.jsx";
import InputField from "../../inputField/InputField.jsx";

function PatientBasicInfo() {
  return (
    <div className="patient-basic-info global-box-shadow">
      <div class="patient-map-grid">
        <div class="patient-address-map">
          <DisplayMap
            addressLatLong={[1.3521, 103.8198]}
            mapBorderRadius={"0 10px 10px 0"}
          />
        </div>
        <div class="info-grid-area">
          <div class="basic-info-grid">
            <div class="patient-name">
              <InputField
                heading={"Name"}
                placeholder={"Enter name"}
                type={"text"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-name"}
                setChange
                value
              />
            </div>
            <div class="patient-dob">
              <InputField
                heading={"Date Of Birth"}
                placeholder={"Enter date of birth"}
                type={"date"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-dob"}
                setChange
                value
              />
            </div>
            <div class="patient-address">
              <InputField
                heading={"Address"}
                placeholder={"Enter your address"}
                type={"text"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-address"}
                setChange
                value
              />
            </div>
            <div class="patient-email">
              <InputField
                heading={"Email"}
                placeholder={"Enter email"}
                type={"email"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-email"}
                setChange
                value
              />
            </div>
            <div class="patient-phone">
              <InputField
                heading={"Phone"}
                placeholder={"Enter phone number"}
                type={"number"}
                wrapperClass={"input-dimension"}
                fieldName={"patient-phone"}
                setChange
                value
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientBasicInfo;
