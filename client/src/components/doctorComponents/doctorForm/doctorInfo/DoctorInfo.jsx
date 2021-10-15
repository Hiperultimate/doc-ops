import "./doctorInfo.css";
import InputField from "../../../inputField/InputField.jsx";

function DoctorInfo({
  doctorNameHook,
  doctorEmailHook,
  doctorPhoneHook,
  doctorExperienceHook,
  doctorPasswordHook,
  doctorConfirmPasswordHook,
}) {
  const { doctorName, setDoctorName, nameErrorMsg } = doctorNameHook;
  const { doctorEmail, setDoctorEmail, emailErrorMsg } = doctorEmailHook;
  const { doctorPhone, setDoctorPhone, phoneErrorMsg } = doctorPhoneHook;
  const { doctorExperience, setDoctorExperience, experienceErrorMsg } =
    doctorExperienceHook;
  const { password, setPassword, passwordErrorMsg } = doctorPasswordHook;
  const { confirmPassword, setConfirmPassword, confirmPasswordErrorMsg } =
    doctorConfirmPasswordHook;

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
          {nameErrorMsg && (
            <div className="error-msg">{nameErrorMsg[0]}</div>
          )}
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
          {emailErrorMsg && (
            <div className="error-msg">{emailErrorMsg[0]}</div>
          )}
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
          {phoneErrorMsg && (
            <div className="error-msg">{phoneErrorMsg[0]}</div>
          )}
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
          {experienceErrorMsg && (
            <div className="error-msg">{experienceErrorMsg[0]}</div>
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
          />
          {passwordErrorMsg && (
            <div className="error-msg">{passwordErrorMsg[0]}</div>
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
          />
          {confirmPasswordErrorMsg && (
            <div className="error-msg">{confirmPasswordErrorMsg[0]}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;
