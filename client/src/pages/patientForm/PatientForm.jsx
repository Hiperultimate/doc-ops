import "./patientForm.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import PatientBasicInfo from "../../components/patientComponents/patientBasicInfo/PatientBasicInfo.jsx";
import PatientMedicalInfo from "../../components/patientComponents/patientMedicalInfo/PatientMedicalInfo.jsx";
import Footer from "../../components/footer/Footer.jsx";

function PatientForm() {
  const [patientName, setPatientName] = useState("");
  const [patientDOB, setPatientDOB] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [patientHeight, setPatientHeight] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [patientBloodgroup, setPatientBloodgroup] = useState("");
  const [patientAllergies, setPatientAllergies] = useState([]);

  return (
    <>
      <Navbar />
      <form>
        <div className="patient-form">
          <MainHeading titleName={"Account Settings"} />
          <MainContainer
            mainWrapperClass="main-container"
            AddComponents={[
              <MainContHead titleName="Basic Info" key={1} />,
              <PatientBasicInfo
                key={2}
                patientNameState={{
                  patientName: patientName,
                  setPatientName: setPatientName,
                }}
                patientDOBState={{
                  patientDOB: patientDOB,
                  setPatientDOB: setPatientDOB,
                }}
                patientAddressState={{
                  patientAddress: patientAddress,
                  setPatientAddress: setPatientAddress,
                }}
                patientEmailState={{
                  patientEmail: patientEmail,
                  setPatientEmail: setPatientEmail,
                }}
                patientPhoneState={{
                  patientPhone: patientPhone,
                  setPatientPhone: setPatientPhone,
                }}
              />,
              <MainContHead titleName="Medical Info" key={3} />,
              <PatientMedicalInfo
                key={4}
                patientWeightState={{
                  patientWeight: patientWeight,
                  setPatientWeight: setPatientWeight,
                }}
                patientHeightState={{
                  patientHeight: patientHeight,
                  setPatientHeight: setPatientHeight,
                }}
                patientGenderState={{
                  patientGender: patientGender,
                  setPatientGender: setPatientGender,
                }}
                patientBloodgroupState={{
                  patientBloodgroup: patientBloodgroup,
                  setPatientBloodgroup: setPatientBloodgroup,
                }}
                patientAllergiesState={{
                  patientAllergies: patientAllergies,
                  setPatientAllergies: setPatientAllergies,
                }}
              />,
              <button
                className="patient-form-submit global-box-shadow"
                type="submit"
                key={5}
              >
                Save
              </button>,
            ]}
          />
        </div>
      </form>

      <Footer />
    </>
  );
}

export default PatientForm;
