import { useState, useEffect } from "react";
import MainContainer from "../../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../../components/mainContHead/MainContHead.jsx";
import DoctorInfo from "../../../../components/doctorComponents/doctorForm/doctorInfo/DoctorInfo.jsx";
import ClinicInfo from "../../../../components/doctorComponents/doctorForm/clinicInfo/ClinicInfo.jsx";
import ImageSlider from "../../../../components/imageSlider/ImageSlider.jsx";

import ValidationContext from "../../../../contexts/ValidationContext.js";
import { doc, collection, getDocs, setDoc, GeoPoint } from "firebase/firestore";
import { ref ,uploadBytes,getDownloadURL   } from "firebase/storage";
import { db, storage } from "../../../../firebase.js";

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
  const [clinicPictures, setClinicPictures] = useState([]);

  const [imgURL, setImgURL] = useState([]);
  const [treatmentOptions, setTreatmentOptions] = useState([]);
  const [specializationOptions, setSpecializationOptions] = useState([]);
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
    doctorEmail: ["required", "email"],
    doctorPhone: ["required", "integer", "lengthEqual 10"],
    doctorExperience: ["required", "integer"],
    password: ["required", "<= 8"],
    confirmPassword: ["required", "<= 8", "matchPassword"],
    clinicName: ["required"],
    clinicAddress: ["required"],
    clinicConsultationFee: ["required", "integer"],
    clinicOnlineConsultation: ["required"],
    treatmentsOffered: ["required"],
    specilization: ["required"],
    openingHours: ["required", "openingHours"],
    closingHours: ["required", "closingHours"],
    // clinicPictures: ["required"],
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const inputFields = {
      doctorName: doctorName,
      doctorEmail: doctorEmail,
      doctorPhone: doctorPhone,
      doctorExperience: doctorExperience,
      password: password,
      confirmPassword: confirmPassword,
      clinicName: clinicName,
      clinicAddress: clinicAddress,
      clinicConsultationFee: clinicConsultationFee,
      clinicOnlineConsultation: clinicOnlineConsultation,
      treatmentsOffered: treatmentsOffered,
      specilization: specilization,
      openingHours: openingHours,
      closingHours: closingHours,
      // clinicPictures : clinicPictures,
    };

    const newErrorList = ValidationContext(validationSchema, inputFields);
    setErrorList(newErrorList);
    console.log(newErrorList);
    console.log(inputFields);
    const isValid = Object.keys(newErrorList).every(
      (item) => newErrorList[item].length === 0
    );

    if (isValid) {
      console.log("Valid form");
    }
  };

  const uploadPictureHandler = async (e) => {
    const images = e.target.files;
    const checkType = new Set([".jpg", ".jpeg", ".bmp", ".gif", ".png"]);
    //Validate if the files are images 
    Object.values(images).map(img => {
      const fileFormat = "." + img.type.split("/").at(-1);
      if(checkType.has(fileFormat)){
        setErrorList({...errorList , clinicPictures : [`Incorrect File type of ${img.name}`]})
      }
      
    })
    if(errorList.clinicPictures.length === 0){
      let displayImg = [];
      Object.values(images).map(img => {
        displayImg.push(URL.createObjectURL(img));
      })
      console.log(displayImg)
      setClinicPictures(displayImg);
    }
    // Object.values(images).map(async img => {
    //   const uploadImgRef = ref(storage, `images/${img.name}`)
    //   await uploadBytes(uploadImgRef, img).then((snapshot) => {
    //     console.log('Uploaded an image', snapshot);
    //   });
    //   // console.log(await getDownloadURL(ref(storage, `images/${img.name}`)))
    //   const getDownloadableURL = await getDownloadURL(ref(storage, `images/${img.name}`));
    //   console.log(getDownloadableURL);
    //   setImgURL([].push(getDownloadableURL));
    // })
    // const mountainsRef = ref(storage, 'mountains.jpg');
    console.log(images, typeof(images));
  }

  useEffect(() => {
    async function fetchClinicOptions() {
      try {
        let retrievedData = await getDocs(collection(db, "formInputs"));
        retrievedData.forEach((doc) => {
          setTreatmentOptions(doc.data().treatments);
          setSpecializationOptions(doc.data().specializations);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchClinicOptions();  
  }, []);

  useEffect(() => {
    // console.log("ERROR LIST : ", errorList);
    // console.log("IMAGE URL :" , imgURL);
  }, [imgURL,errorList]);

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
                passwordErrorMsg: errorList.password,
              }}
              doctorConfirmPasswordHook={{
                confirmPassword: confirmPassword,
                setConfirmPassword: setConfirmPassword,
                confirmPasswordErrorMsg: errorList.confirmPassword,
              }}
              key={2}
            />,
            <MainContHead titleName="Clinic's Info" key={3} />,
            <ClinicInfo
              clinicNameHook={{
                clinicName: clinicName,
                setClinicName: setClinicName,
                clinicNameErrorMsg: errorList.clinicName,
              }}
              clinicAddressHook={{
                clinicAddress: clinicAddress,
                setClinicAddress: setClinicAddress,
                clinicAddressErrorMsg: errorList.clinicAddress,
              }}
              clinicConsultationFeeHook={{
                clinicConsultationFee: clinicConsultationFee,
                setClinicConsultationFee: setClinicConsultationFee,
                consultationFeeErrorMsg: errorList.clinicConsultationFee,
              }}
              clinicOnlineConsultationHook={{
                clinicOnlineConsultation: clinicOnlineConsultation,
                setClinicOnlineConsultation: setClinicOnlineConsultation,
                onlineConsultationErrorMsg: errorList.clinicOnlineConsultation,
              }}
              treatmentsOfferedHook={{
                treatmentsOffered: treatmentsOffered,
                setTreatmentsOffered: setTreatmentsOffered,
                treatmentsErrorMsg: errorList.treatmentsOffered,
                treatmentOptions: treatmentOptions,
              }}
              specilizationHook={{
                specilization: specilization,
                setSpecilization: setSpecilization,
                specializationErrorMsg: errorList.specilization,
                specializationOptions: specializationOptions,
              }}
              openingHoursHook={{
                openingHours: openingHours,
                setOpeningHours: setOpeningHours,
                openingHoursErrorMsg: errorList.openingHours,
              }}
              closingHoursHook={{
                closingHours: closingHours,
                setClosingHours: setClosingHours,
                closingHoursErrorMsg: errorList.closingHours,
              }}
              clinicPicturesHook={{
                clinicPictures: clinicPictures,
                setClinicPictures: setClinicPictures,
                clinicPicturesErrorMsg: errorList.clinicPictures,
                uploadPictureHandler : uploadPictureHandler,
              }}
              key={4}
            />,
            <ImageSlider
              imageList={clinicPictures}
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
