import "./doctorForm.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import DoctorInfo from "../../components/doctorComponents/doctorForm/doctorInfo/DoctorInfo.jsx";
import ClinicInfo from "../../components/doctorComponents/doctorForm/clinicInfo/ClinicInfo.jsx";

import Footer from "../../components/footer/Footer.jsx";

function DoctorForm() {
  const [doctorName, setDoctorName] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [doctorExperience, setDoctorExperience] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [clinicConsultationFee, setClinicConsultationFee] = useState("");
  const [clinicOnlineConsultation, setClinicOnlineConsultation] =
    useState("False");
  const [treatmentsOffered, setTreatmentsOffered] = useState([]);
  const [specilization, setSpecilization] = useState([]);
  const [openingHours, setOpeningHours] = useState("");
  const [clinicPictures, setClinicPictures] = useState();

  return (
    <div className="doctor-form">
      <Navbar isFixed={true} />
      <MainHeading titleName={"Account Settings"} />
      <MainContainer
        mainWrapperClass="main-container"
        AddComponents={[
          <MainContHead titleName="Basic Info" key={1} />,
          <DoctorInfo
            doctorNameHook={{
              doctorName: doctorName,
              setDoctorName: setDoctorName,
            }}
            doctorEmailHook={{
              doctorEmail: doctorEmail,
              setDoctorEmail: setDoctorEmail,
            }}
            doctorPhoneHook={{
              doctorPhone: doctorPhone,
              setDoctorPhone: setDoctorPhone,
            }}
            doctorExperienceHook={{
              doctorExperience: doctorExperience,
              setDoctorExperience: setDoctorExperience,
            }}
            key={2}
          />,
          <MainContHead titleName="Clinic's Info" key={3} />,
          <ClinicInfo
            clinicNameHook={{
              clinicName: clinicName,
              setClinicName: setClinicName,
            }}
            clinicAddressHook={{
              clinicAddress: clinicAddress,
              setClinicAddress: setClinicAddress,
            }}
            clinicConsultationFeeHook={{
              clinicConsultationFee: clinicConsultationFee,
              setClinicConsultationFee: setClinicConsultationFee,
            }}
            clinicOnlineConsultationHook={{
              clinicOnlineConsultation: clinicOnlineConsultation,
              setClinicOnlineConsultation: setClinicOnlineConsultation,
            }}
            treatmentsOfferedHook={{
              treatmentsOffered: treatmentsOffered,
              setTreatmentsOffered: setTreatmentsOffered,
            }}
            specilizationHook={{
              specilization: specilization,
              setSpecilization: setSpecilization,
            }}
            openingHoursHook={{
              openingHours: openingHours,
              setOpeningHours: setOpeningHours,
            }}
            clinicPicturesHook={{
              clinicPictures: clinicPictures,
              setClinicPictures: setClinicPictures,
            }}
            key={4}
          />,
        ]}
      />


      <Footer />
    </div>
  );
}

export default DoctorForm;
