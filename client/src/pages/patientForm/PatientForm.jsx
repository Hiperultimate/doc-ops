import "./patientForm.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import PatientBasicInfo from "../../components/patientComponents/patientBasicInfo/PatientBasicInfo.jsx";
import PatientMedicalInfo from "../../components/patientComponents/patientMedicalInfo/PatientMedicalInfo.jsx";
import Footer from "../../components/footer/Footer.jsx";

function PatientForm() {
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
              <PatientBasicInfo key={2} />,
              <MainContHead titleName="Medical Info" key={3} />,
              <PatientMedicalInfo key={4} />,
              <button
                className="patient-form-submit global-box-shadow"
                type="submit"
                key={5}
              >
                Submit
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
