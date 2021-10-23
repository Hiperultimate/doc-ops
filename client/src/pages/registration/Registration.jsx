import "./registration.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import PatientRegister from "./registationForms/patientRegister/PatientRegister.jsx";
import DoctorRegister from "./registationForms/doctorRegister/DoctorRegister.jsx";
import Footer from "../../components/footer/Footer.jsx";

import { userType } from "../../utils/constants/dataModel.js";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/contexts/AuthContext.js";

function Registration() {
  const [formType, setFormType] = useState(userType.DOCTOR);
  const [safeRefirect, setSafeRedirect] = useState(true);
  const { currentUser } = useAuth();
  const history = useHistory();

  const changeFormType = (e) => {
    switch (e.target.id) {
      case "doctor-btn":
        setFormType(userType.DOCTOR);
        break;
      case "patient-btn":
        setFormType(userType.PATIENT);
        break;
      default:
        setFormType(userType.PATIENT);
    }
  };

  useEffect(() => {
    if (safeRefirect && currentUser) {
      history.push("/");
    }
  }, [currentUser, history, safeRefirect]);
  return (
    <>
      <Navbar isFixed={true} />
      <div className="registration-page">
        <MainHeading titleName={"Register"} />
        <div className="select-form">
          <button
            style={
              formType === userType.DOCTOR
                ? { backgroundColor: "var(--green-third)", color: "white" }
                : { backgroundColor: "white" }
            }
            onClick={changeFormType}
            type="button"
            className="select-btn doctorFormBtn global-box-shadow"
            id="doctor-btn"
          >
            I'm a Doctor
          </button>
          <button
            style={
              formType === userType.PATIENT
                ? { backgroundColor: "var(--green-third)", color: "white" }
                : { backgroundColor: "white" }
            }
            onClick={changeFormType}
            type="button"
            className="select-btn patientFormBtn global-box-shadow"
            id="patient-btn"
          >
            I'm a Patient
          </button>
        </div>
        {formType === userType.DOCTOR && <DoctorRegister setSafeRedirect={setSafeRedirect}/>}
        {formType === userType.PATIENT && <PatientRegister setSafeRedirect={setSafeRedirect}/>}
      </div>
      <Footer />
    </>
  );
}

export default Registration;
