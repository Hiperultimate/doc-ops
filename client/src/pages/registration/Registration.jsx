import "./registration.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import PatientRegister from "./registationForms/patientRegister/PatientRegister.jsx";
import DoctorRegister from "./registationForms/doctorRegister/DoctorRegister.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Registration() {
  // 1 -> Doctor Form
  // 2 -> Patient Form
  const [formType, setFormType] = useState(2);

  const someFunc = (e) => {
    if (e.target.id === "doctor-btn") {
      setFormType(1);
    }
    if (e.target.id === "patient-btn") {
      setFormType(2);
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
