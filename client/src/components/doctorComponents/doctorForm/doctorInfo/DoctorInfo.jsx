import "./doctorInfo.css";
import InputField from "../../../inputField/InputField.jsx";

function DoctorInfo({
  doctorNameHook,
  doctorEmailHook,
  doctorPhoneHook,
  doctorExperienceHook,
}) {
  const { doctorName, setDoctorName } = doctorNameHook;
  const { doctorEmail, setDoctorEmail } = doctorEmailHook;
  const { doctorPhone, setDoctorPhone } = doctorPhoneHook;
  const { doctorExperience, setDoctorExperience } = doctorExperienceHook;
  return (
    <div className="doctor-basic-info global-box-shadow">
      <div className="doctor-basic-info-grid">
        <div className="doctor-name">
          <InputField
            wrapperClass={"input-dimension"}
            heading={"Name"}
            placeholder={"Enter full name"}
            type={"text"}
            fieldName={"doctorName"}
            setChange={setDoctorName}
            value={doctorName}
          />
        </div>
        <div className="doctor-email">
          <InputField
            wrapperClass={"input-dimension"}
            heading={"Email"}
            placeholder={"Enter email"}
            type={"email"}
            fieldName={"doctorEmail"}
            setChange={setDoctorEmail}
            value={doctorEmail}
          />
        </div>
        <div className="doctor-phone">
          <InputField
            wrapperClass={"input-dimension"}
            heading={"Phone"}
            placeholder={"Enter phone number"}
            type={"number"}
            fieldName={"doctorPhone"}
            setChange={setDoctorPhone}
            value={doctorPhone}
          />
        </div>
        <div className="work-experience">
          <InputField
            wrapperClass={"input-dimension"}
            heading={"Work Experience"}
            placeholder={"Enter work experience"}
            scaleText={"yrs"}
            scaleTextPos={"right"}
            type={"number"}
            fieldName={"doctorExperience"}
            setChange={setDoctorExperience}
            value={doctorExperience}
          />
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;
