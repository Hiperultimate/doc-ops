import "./patientMedicalInfo.css";
import InputField from "../../inputField/InputField.jsx";
import DropdownList from "react-widgets/DropdownList";
import MultiSelect from "../../multiSelect/MultiSelect.jsx";

function PatientMedicalInfo({
  patientWeightState,
  patientHeightState,
  patientGenderState,
  patientBloodgroupState,
  patientAllergiesState,
}) {
  const { patientWeight, setPatientWeight, weightErrorMsg } =
    patientWeightState;
  const { patientHeight, setPatientHeight, heightErrorMsg } =
    patientHeightState;
  const { patientGender, setPatientGender, genderErrorMsg } =
    patientGenderState;
  const { patientBloodgroup, setPatientBloodgroup, bloodgroupErrorMsg } =
    patientBloodgroupState;
  const { patientAllergies, setPatientAllergies } = patientAllergiesState;
  return (
    <div className="patient-medical-info global-box-shadow">
      <div className="register-medical-info-grid">
        <div className="patient-weight">
          <InputField
            heading={"Weight"}
            placeholder={"Enter your weight"}
            type={"number"}
            wrapperClass={"input-dimension"}
            fieldName={"patient-weight"}
            scaleText={"Kg"}
            scaleTextPos={"right"}
            setChange={setPatientWeight}
            value={patientWeight}
            isRequired={true}
          />
          {weightErrorMsg.length !== 0 && (
            <div className="error-msg">{weightErrorMsg}</div>
          )}
        </div>
        <div className="patient-height">
          <InputField
            heading={"Height"}
            placeholder={"Enter your height"}
            type={"number"}
            wrapperClass={"input-dimension"}
            fieldName={"patient-height"}
            scaleText={"cm"}
            scaleTextPos={"right"}
            setChange={setPatientHeight}
            value={patientHeight}
            isRequired={true}
          />
          {heightErrorMsg.length !== 0 && (
            <div className="error-msg">{heightErrorMsg}</div>
          )}
        </div>
        <div className="patient-gender">
          <span className="input-heading">Gender</span>
          <DropdownList
            placeholder={"Enter your gender"}
            data={["Male", "Female", "Prefer not to say"]}
            onChange={(value) => setPatientGender(value)}
          />
          {genderErrorMsg.length !== 0 && (
            <div className="error-msg">{genderErrorMsg}</div>
          )}
        </div>
        <div className="patient-bloodgroup">
          <span className="input-heading">Bloodgroup</span>
          <DropdownList
            placeholder={"Enter your bloodgroup"}
            data={["A", "A+", "AB+", "B", "B+", "B-"]}
            onChange={(value) => setPatientBloodgroup(value)}
          />
          {bloodgroupErrorMsg.length !== 0 && (
            <div className="error-msg">{bloodgroupErrorMsg}</div>
          )}
        </div>
        <div className="patient-allergies">
          <span className="input-heading">Allergies</span>
          <MultiSelect
            options={["Egg", "Banana", "Dust", "Grass"]}
            placeholder={"Enter allergies..."}
            stateValue={patientAllergies}
            handleState={setPatientAllergies}
          />
        </div>
      </div>
    </div>
  );
}

export default PatientMedicalInfo;
