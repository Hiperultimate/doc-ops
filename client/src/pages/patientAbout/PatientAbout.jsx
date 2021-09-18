import "./patientAbout.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import ContactInfo from "../../components/patientComponents/contactInfo/ContactInfo.jsx";
import MedicalInfo from "../../components/patientComponents/medicalInfo/MedicalInfo.jsx";
import Footer from "../../components/footer/Footer.jsx";

function PatientAbout() {
  return (
    <>
      <Navbar isFixed={true} />
      <div className="patient-about-content">
        <MainHeading titleName={"About"} />
        <MainContainer
          mainWrapperClass="main-container"
          AddComponents={[
            <MainContHead titleName="Zambalia Zankras Zakozi" key={1} />,
            <div style={{ paddingBottom: "3em" }} key={2}>
              <ContactInfo
                contactDOB={"29 February, 1994"}
                contactEmail={"alanokovTheDoctor@gmail.com"}
                contactPhone={"981273591"}
                contactAddress={"1293 Akaha police station"}
                contactAddressMap={[56.1304, 106.3468]}
              />
            </div>,
            <MainContHead titleName="Medical Info" key={3} />,
            <div style={{ paddingBottom: "3em" }} key={4}>
              <MedicalInfo
                patientGender={"Male"}
                patientAge={"25"}
                patientBloodgroup={"AO+"}
                patientHeight={"156"}
                patientWeight={"95"}
                patientAllergies={["Mangoes", "Potatoes", "Rice", "Salt"]}
              />
            </div>,
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default PatientAbout;
