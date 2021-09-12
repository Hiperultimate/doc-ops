import "./doctorInfo.css";
import InputField from "../../../inputField/InputField.jsx";

function DoctorInfo() {
  return (
    <div className="doctor-basic-info global-box-shadow">
      <form>
        <div className="doctor-basic-info-grid">
          <div className="doctor-name">
            <InputField
              wrapperClass={"input-dimention"}
              heading={"Name"}
              placeholder={"Enter full name"}
              type={"text"}
              fieldName={"doctor-name"}
            />
          </div>
          <div className="doctor-email">
            <InputField
              wrapperClass={"input-dimention"}
              heading={"Email-ID"}
              placeholder={"Enter email-id"}
              type={"email"}
              fieldName={"doctor-email"}
            />
          </div>
          <div className="doctor-phone">
            <InputField
              wrapperClass={"input-dimention"}
              heading={"Phone"}
              placeholder={"Enter phone number"}
              type={"number"}
              fieldName={"doctor-phone"}
            />
          </div>
          <div className="work-experience">
            <InputField
              wrapperClass={"input-dimention"}
              heading={"Work Experience"}
              placeholder={"Enter work experience"}
              scaleText={"yrs"}
              scaleTextPos={"right"}
              type={"text"}
              fieldName={"doctor-experience"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default DoctorInfo;
