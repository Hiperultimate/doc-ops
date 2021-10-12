import "./patientAbout.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import ContactInfo from "../../components/patientComponents/contactInfo/ContactInfo.jsx";
import MedicalInfo from "../../components/patientComponents/medicalInfo/MedicalInfo.jsx";
import MedicalHistory from "../../components/patientComponents/medicalHistory/MedicalHistory.jsx";
import Footer from "../../components/footer/Footer.jsx";

function PatientAbout() {
  const fetchMedicalHistory = [
    {
      DiseaseName: "Blood Cancer",
      CureTimeTaken: "21 Sept, 2021 - 30 December 2022",
      Comments: "Severe cases of blood ...",
      Medication: [
        {
          medName: "Chemo",
          medFrequency: "Once a day",
          medDuration: "31 Oct - 30 Dec",
        },
        {
          medName: "Pain Killers",
          medFrequency: "Once a week",
          medDuration: "15 Oct - 30 Dec",
        },
        {
          medName: "Drug 2",
          medFrequency: "3 times a day",
          medDuration: "31 Sept - 30 Dec",
        },
      ],
    },
    {
      DiseaseName: "Common Cold",
      CureTimeTaken: "25 Jan, 2022 - 30 February 2022",
      Comments: "Winter cold, minor coughs.",
      Medication: [
        {
          medName: "Coldo",
          medFrequency: "Three times a day",
          medDuration: "25 Jan - 29 Jan",
        },
        {
          medName: "Sleeping Pills",
          medFrequency: "At night",
          medDuration: "15 Feb - 19 Feb",
        },
      ],
    },
  ];
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
                contactAddressMap={[28.6394, 77.3653]}
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
            <MainContHead titleName="Medical History" key={5} />,
            <div style={{ paddingBottom: "0em" }} key={6}>
              <MedicalHistory medicalHistory={fetchMedicalHistory} />
            </div>,
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default PatientAbout;