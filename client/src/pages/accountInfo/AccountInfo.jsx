import React from "react";
import PatientForm from "./patientForm/PatientForm.jsx";
import DoctorForm from "./doctorForm/DoctorForm.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";

import { userType } from "../../utils/constants/dataModel.js";
import { useAuth } from "../../utils/contexts/AuthContext.js";

function AccountInfo() {
  const { currentUserData } = useAuth();

  return (
    <>
      <Navbar isFixed={true} />
      {currentUserData.type === userType.DOCTOR && <DoctorForm />}
      {currentUserData.type === userType.PATIENT && <PatientForm />}
      <Footer />
    </>
  );
}

export default AccountInfo;
