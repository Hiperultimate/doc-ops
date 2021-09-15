import "./doctorForm.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import DoctorInfo from "../../components/doctorComponents/doctorForm/doctorInfo/DoctorInfo.jsx";
import ClinicInfo from "../../components/doctorComponents/doctorForm/clinicInfo/ClinicInfo.jsx";
import ImageSlider from "../../components/imageSlider/ImageSlider.jsx";
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <>
      <Navbar isFixed={true} />
      <form onSubmit={handleFormSubmit}>
        <div className="doctor-form">
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
              <ImageSlider
                imageList={[
                  "https://images.unsplash.com/photo-1485348616965-15c926318fbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
                  "https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
                  "https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  "https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
                  "https://images.unsplash.com/photo-1606824722920-4c652a70f348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
                ]}
                editable={true}
                key={5}
              />,
              <button
                className="doctor-form-submit global-box-shadow"
                type="submit"
                key={6}
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

export default DoctorForm;
