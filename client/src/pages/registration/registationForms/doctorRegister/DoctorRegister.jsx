import { useState } from "react";
import MainContainer from "../../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../../components/mainContHead/MainContHead.jsx";
import DoctorInfo from "../../../../components/doctorComponents/doctorForm/doctorInfo/DoctorInfo.jsx";
import ClinicInfo from "../../../../components/doctorComponents/doctorForm/clinicInfo/ClinicInfo.jsx";
import ImageSlider from "../../../../components/imageSlider/ImageSlider.jsx";

function DoctorRegister() {
  const [doctorName, setDoctorName] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [doctorExperience, setDoctorExperience] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [clinicConsultationFee, setClinicConsultationFee] = useState("");
  const [clinicOnlineConsultation, setClinicOnlineConsultation] =
    useState("False");
  const [treatmentsOffered, setTreatmentsOffered] = useState([]);
  const [specilization, setSpecilization] = useState([]);
  const [openingHours, setOpeningHours] = useState("");
  const [closingHours, setClosingHours] = useState("");
  const [clinicPictures, setClinicPictures] = useState();
  const [errorList, setErrorList] = useState({
    doctorName: [],
    doctorEmail: [],
    doctorPhone: [],
    doctorExperience: [],
    password: [],
    confirmPassword: [],
    clinicName: [],
    clinicAddress: [],
    clinicConsultationFee: [],
    clinicOnlineConsultation: [],
    treatmentsOffered: [],
    specilization: [],
    openingHours: [],
    closingHours: [],
    clinicPictures: [],
  });

  const validationSchema = {
    doctorName: ["required"],
    doctorEmail: ["required" , "email"],
    doctorPhone: ["required" ,"integer", "lengthEqual 10"],
    doctorExperience: ["required", "integer"],
    password: ["required", "<= 8"],
    confirmPassword: ["required", "<= 8", "matchPassword"],
    clinicName: ["required"],
    clinicAddress: ["required"],
    clinicConsultationFee: ["required", "integer"],
    clinicOnlineConsultation: ["required"],
    treatmentsOffered: ["required"],
    specilization: ["required"],
    openingHours: ["required"],
    closingHours: ["required"],
    clinicPictures: ["required"],
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target, "Doctor Registration");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="doctor-form">
        <MainContainer
          mainWrapperClass="main-container"
          AddComponents={[
            <MainContHead titleName="Basic Info" key={1} />,
            <DoctorInfo
              doctorNameHook={{
                doctorName: doctorName,
                setDoctorName: setDoctorName,
                nameErrorMsg: errorList.doctorName,
              }}
              doctorEmailHook={{
                doctorEmail: doctorEmail,
                setDoctorEmail: setDoctorEmail,
                emailErrorMsg: errorList.doctorEmail,
              }}
              doctorPhoneHook={{
                doctorPhone: doctorPhone,
                setDoctorPhone: setDoctorPhone,
                phoneErrorMsg: errorList.doctorPhone,
              }}
              doctorExperienceHook={{
                doctorExperience: doctorExperience,
                setDoctorExperience: setDoctorExperience,
                experienceErrorMsg: errorList.doctorExperience,
              }}
              doctorPasswordHook={{
                password: password,
                setPassword: setPassword,
                passwordErrorMsg : errorList.confirmPassword ,
              }}
              doctorConfirmPasswordHook={{
                confirmPassword: confirmPassword,
                setConfirmPassword: setConfirmPassword,
                confirmPasswordErrorMsg : errorList.clinicName ,
              }}
              key={2}
            />,
            <MainContHead titleName="Clinic's Info" key={3} />,
            <ClinicInfo
              clinicNameHook={{
                clinicName: clinicName,
                setClinicName: setClinicName,
                clinicAddressErrorMsg : errorList.clinicAddress ,
              }}
              clinicAddressHook={{
                clinicAddress: clinicAddress,
                setClinicAddress: setClinicAddress,
                clinicAddressErrorMsg : errorList.clinicConsultationFee ,
              }}
              clinicConsultationFeeHook={{
                clinicConsultationFee: clinicConsultationFee,
                setClinicConsultationFee: setClinicConsultationFee,
                consultationFeeErrorMsg : errorList.clinicOnlineConsultation ,
              }}
              clinicOnlineConsultationHook={{
                clinicOnlineConsultation: clinicOnlineConsultation,
                setClinicOnlineConsultation: setClinicOnlineConsultation,
                onlineConsultationErrorMsg : errorList.treatmentsOffered ,
              }}
              treatmentsOfferedHook={{
                treatmentsOffered: treatmentsOffered,
                setTreatmentsOffered: setTreatmentsOffered,
                treatmentsErrorMsg : errorList.specilization ,
              }}
              specilizationHook={{
                specilization: specilization,
                setSpecilization: setSpecilization,
                specializationErrorMsg : errorList.openingHours ,
              }}
              openingHoursHook={{
                openingHours: openingHours,
                setOpeningHours: setOpeningHours,
                openingHoursErrorMsg : errorList.closingHours ,
              }}
              closingHoursHook={{
                closingHours: closingHours,
                setClosingHours: setClosingHours,
                closingHoursErrorMsg : errorList.closingHours ,
              }}
              clinicPicturesHook={{
                clinicPictures: clinicPictures,
                setClinicPictures: setClinicPictures,
                clinicPicturesErrorMsg : errorList.clinicPictures ,
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
              Register
            </button>,
          ]}
        />
      </div>
    </form>
  );
}

export default DoctorRegister;
