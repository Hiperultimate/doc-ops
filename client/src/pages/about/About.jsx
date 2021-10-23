import React from "react";
import DoctorAbout from "./doctorAbout/DoctorAbout.jsx";
import PatientAbout from "./patientAbout/PatientAbout.jsx";

import { useParams } from "react-router";
import { userType } from "../../utils/constants/dataModel.js";

function About() {
  let { type } = useParams();
  return (
    <>
      {type === userType.DOCTOR.toString() && <DoctorAbout />}
      {type === userType.PATIENT.toString() && <PatientAbout />}
    </>
  );
}

export default About;
