import "./patientMedicalInfo.css";
import InputField from "../../inputField/InputField.jsx";
import DropdownList from "react-widgets/DropdownList";
import MultiSelect from "../../multiSelect/MultiSelect.jsx";

function PatientMedicalInfo() {
  return (
    <div className="patient-medical-info">
      <div class="medical-info-grid">
        <div class="patient-weight">
          <InputField
            heading={"Weight"}
            placeholder={"Enter your weight"}
            type={"number"}
            wrapperClass={"input-dimension"}
            fieldName={"patient-weight"}
            scaleText={"Kg"}
            scaleTextPos={"right"}
            setChange
            value
          />
        </div>
        <div class="patient-height">
          <InputField
            heading={"Height"}
            placeholder={"Enter your height"}
            type={"number"}
            wrapperClass={"input-dimension"}
            fieldName={"patient-height"}
            scaleText={"cm"}
            scaleTextPos={"right"}
            setChange
            value
          />
        </div>
        <div class="patient-gender">
          <span className="input-heading">Gender</span>
          <DropdownList
            placeholder={"Enter your gender"}
            data={["Male", "Female", "Prefer not to say"]}
            // onChange={(value) => setPatientGender(value)}
          />
        </div>
        <div class="patient-bloodgroup">
          <span className="input-heading">Bloodgroup</span>
          <DropdownList
            placeholder={"Enter your bloodgroup"}
            data={["A", "A+", "AB+", "B", "B+", "B-"]}
            // onChange={(value) => setBloodgroup(value)}
          />
        </div>
        <div class="patient-allergies">
          <span className="input-heading">Allergies</span>
          <MultiSelect
            options={["Egg", "Banana", "Dust", "Grass"]}
            placeholder={"Enter allergies..."}
            stateValue={[]}
            handleState
          />
        </div>
      </div>
    </div>
  );
}

export default PatientMedicalInfo;
