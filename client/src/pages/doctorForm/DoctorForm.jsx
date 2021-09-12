import "./doctorForm.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import DoctorInfo from "../../components/doctorComponents/doctorForm/doctorInfo/DoctorInfo.jsx";
import ClinicInfo from "../../components/doctorComponents/doctorForm/clinicInfo/ClinicInfo.jsx";

import Footer from "../../components/footer/Footer.jsx";

function DoctorForm() {
  return (
    <div className="doctor-form">
      <Navbar isFixed={true} />
      <MainHeading titleName={"Account Settings"} />
      <MainContainer
        mainWrapperClass="main-container"
        AddComponents={[
          <MainContHead titleName="Basic Info" key={1} />,
          <DoctorInfo key={2} />,
        ]}
      />
      <MainContainer
        mainWrapperClass="main-container"
        AddComponents={[
          <MainContHead titleName="Clinic's Info" key={1} />,
          <ClinicInfo key={2} />,
        ]}
      />

      <Footer />
    </div>
  );
}

export default DoctorForm;
