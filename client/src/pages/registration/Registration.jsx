import "./registration.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import PatientRegister from "./registationForms/patientRegister/PatientRegister.jsx";
import DoctorRegister from "./registationForms/doctorRegister/DoctorRegister.jsx";
import Footer from "../../components/footer/Footer.jsx";

const FormType = Object.freeze({
  DOCTOR: 1,
  PATIENT: 2,
});

function Registration() {
  const [formType, setFormType] = useState(FormType.PATIENT);

  const someFunc = (e) => {
    switch (e.target.id) {
      case "doctor-btn":
        setFormType(FormType.DOCTOR);
        break;
      case "patient-btn":
        setFormType(FormType.PATIENT);
        break;
      default:
        setFormType(FormType.PATIENT);
    }
  };

  return (
    <>
      <Navbar />
      <div className="registration-page">
        <MainHeading titleName={"Register"} />
        <div className="select-form">
          <button
            style={
              formType === 1
                ? { backgroundColor: "var(--green-third)", color: "white" }
                : { backgroundColor: "white" }
            }
            onClick={someFunc}
            type="button"
            className="select-btn doctorFormBtn global-box-shadow"
            id="doctor-btn"
          >
            I'm a Doctor
          </button>
          <button
            style={
              formType === 2
                ? { backgroundColor: "var(--green-third)", color: "white" }
                : { backgroundColor: "white" }
            }
            onClick={someFunc}
            type="button"
            className="select-btn patientFormBtn global-box-shadow"
            id="patient-btn"
          >
            I'm a Patient
          </button>
        </div>
        {formType === 1 && <DoctorRegister />}
        {formType === 2 && <PatientRegister />}
      </div>
      <Footer />
    </>
  );
}

export default Registration;