import "./doctorForm.css";
import { useState, useEffect } from "react";
import MainContainer from "../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../components/mainContHead/MainContHead.jsx";
import DoctorInfo from "../../../components/doctorComponents/doctorForm/doctorInfo/DoctorInfo.jsx";
import ClinicInfo from "../../../components/doctorComponents/doctorForm/clinicInfo/ClinicInfo.jsx";
import ImageSlider from "../../../components/imageSlider/ImageSlider.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import inputValidation from "../../../utils/validations/inputValidation.js";
import { userType } from "../../../utils/constants/dataModel.js";
import { doc, getDoc, setDoc, GeoPoint } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase.js";
import { useAuth } from "../../../utils/contexts/AuthContext.js";

function DoctorForm() {
  const [doctorName, setDoctorName] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [doctorExperience, setDoctorExperience] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [clinicConsultationFee, setClinicConsultationFee] = useState("");
  const [clinicOnlineConsultation, setClinicOnlineConsultation] =
    useState("False");
  const [treatmentsOffered, setTreatmentsOffered] = useState([]);
  const [specialization, setSpecialization] = useState([]);
  const [openingHours, setOpeningHours] = useState("");
  const [closingHours, setClosingHours] = useState("");
  const [clinicPictures, setClinicPictures] = useState([]);

  const [loading, setLoading] = useState(false);
  const { currentUser, currentUserData } = useAuth();
  const successMsg = () => toast("Updated Successfully");

  const [displayImage, setDisplayImage] = useState([]);
  const [treatmentOptions, setTreatmentOptions] = useState([]);
  const [specializationOptions, setSpecializationOptions] = useState([]);
  const [errorList, setErrorList] = useState({
    doctorName: [],
    doctorPhone: [],
    doctorExperience: [],
    clinicName: [],
    clinicAddress: [],
    clinicConsultationFee: [],
    clinicOnlineConsultation: [],
    treatmentsOffered: [],
    specialization: [],
    openingHours: [],
    closingHours: [],
    clinicPictures: [],
  });

  const validationSchema = {
    doctorName: ["required"],
    doctorPhone: ["required", "integer", "lengthEqual 10"],
    doctorExperience: ["required", "integer"],
    clinicName: ["required"],
    clinicAddress: ["required"],
    clinicConsultationFee: ["required", "integer"],
    clinicOnlineConsultation: ["required"],
    treatmentsOffered: ["required"],
    specialization: ["required"],
    openingHours: ["required", "openingHours"],
    closingHours: ["required", "closingHours"],
  };

  const ValidateImage = (e) => {
    const images = e.target.files;
    const checkType = new Set([".jpg", ".jpeg", ".bmp", ".gif", ".png"]);
    let typeErrorMsg = [];
    if (images.length + displayImage.length > 5) {
      typeErrorMsg.push("Cannot upload more than 5 images");
      setErrorList({ ...errorList, clinicPictures: typeErrorMsg });
    } else {
      Object.values(images).forEach((img) => {
        const fileFormat = "." + img.type.split("/").at(-1);
        if (!checkType.has(fileFormat)) {
          typeErrorMsg.push(`Incorrect File type of ${img.name}`);
          setErrorList({ ...errorList, clinicPictures: typeErrorMsg });
        } else if (img.size > 3000000) {
          typeErrorMsg.push(
            `${img.name} is too large. File size should be less than 3MBs`
          );
          setErrorList({ ...errorList, clinicPictures: typeErrorMsg });
        } else {
          setErrorList({ ...errorList, clinicPictures: [] });
        }
      });
    }
    if (typeErrorMsg.length === 0) {
      let displayImg = [...displayImage];
      Object.values(images).forEach((img) => {
        displayImg.push(URL.createObjectURL(img));
      });
      setDisplayImage(displayImg);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const inputFields = {
      doctorName: doctorName,
      doctorPhone: doctorPhone,
      doctorExperience: doctorExperience,
      clinicName: clinicName,
      clinicAddress: clinicAddress,
      clinicConsultationFee: clinicConsultationFee,
      clinicOnlineConsultation: clinicOnlineConsultation,
      treatmentsOffered: treatmentsOffered,
      specialization: specialization,
      openingHours: openingHours,
      closingHours: closingHours,
    };

    let newErrorList = {
      ...inputValidation(validationSchema, inputFields),
      clinicPictures: errorList.clinicPictures,
    };
    let isValid = Object.keys(newErrorList).every(
      (item) => newErrorList[item].length === 0
    );

    if (displayImage.length === 0) {
      newErrorList.clinicPictures = ["Clinic images is required"];
      isValid = false;
    }
    setErrorList(newErrorList);

    if (isValid) {
      try {
        setLoading(true);
        const thisUserUID = currentUser.uid;
        const userData = {
          doctorName: doctorName,
          type: userType.DOCTOR,
          doctorPhone: doctorPhone,
          doctorExperience: Number(doctorExperience),
          geoLocation: new GeoPoint(1.3521, 103.8198),
          clinicName: clinicName,
          clinicAddress: clinicAddress,
          clinicConsultationFee: Number(clinicConsultationFee),
          clinicOnlineConsultation: clinicOnlineConsultation,
          treatmentsOffered: treatmentsOffered,
          specialization: specialization,
          openingHours: openingHours,
          closingHours: closingHours,
        };
        await setDoc(doc(db, "users", thisUserUID), userData, { merge: true });
        const setURLs = [];
        let imgNum = 0;
        await Promise.all(
          displayImage.map(async (imgLink) => {
            if(!imgLink.includes("firebasestorage")){
              const imgObj = await fetch(imgLink)
                .then((r) => r.blob())
                .then(
                  (blobFile) =>
                    new File(
                      [blobFile],
                      new Date().getTime().toString() +
                        thisUserUID +
                        `${imgNum++}`,
                      { type: blobFile.type }
                    )
                );
              const uploadImgRef = ref(storage, `images/${imgObj.name}`);
              await uploadBytes(uploadImgRef, imgObj);
              const getDownloadableURL = await getDownloadURL(
                ref(storage, `images/${imgObj.name}`)
              );
              setURLs.push(getDownloadableURL);
            }else{
              setURLs.push(imgLink);
            }
          })
        );
        await setDoc(
          doc(db, "users", thisUserUID),
          {
            clinicImgURLs: setURLs,
          },
          { merge: true }
        );
        successMsg();
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchCurrentDoctorData() {
      try {
        const retrievedData = currentUserData;
        setDoctorName(retrievedData.doctorName);
        setDoctorPhone(retrievedData.doctorPhone);
        setDoctorExperience(retrievedData.doctorExperience);
        setClinicName(retrievedData.clinicName);
        setClinicAddress(retrievedData.clinicAddress);
        setClinicConsultationFee(retrievedData.clinicConsultationFee);
        setClinicOnlineConsultation(retrievedData.clinicOnlineConsultation);
        setTreatmentsOffered(retrievedData.treatmentsOffered);
        setSpecialization(retrievedData.specialization);
        setOpeningHours(retrievedData.openingHours);
        setClosingHours(retrievedData.closingHours);
        setClinicPictures(retrievedData.clinicImgURLs);
        setDisplayImage(retrievedData.clinicImgURLs);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchClinicOptions() {
      try {
        let retrievedData = await getDoc(doc(db, "formInputs", "doctorForm"));
        setTreatmentOptions(retrievedData.data().treatments);
        setSpecializationOptions(retrievedData.data().specializations);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCurrentDoctorData();
    fetchClinicOptions();
  }, []);

  return (
    <form onSubmit={handleFormSubmit}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
              specializationHook={{
                specialization: specialization,
                setSpecialization: setSpecialization,
                specializationErrorMsg: errorList.specialization,
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
                ValidateImage: ValidateImage,
              }}
              key={4}
            />,
            <ImageSlider
              imageList={displayImage}
              setImageList={setDisplayImage}
              editable={true}
              key={5}
            />,
            <button
              className="doctor-form-submit global-box-shadow"
              type="submit"
              disabled={loading}
              key={6}
            >
              Update
            </button>,
          ]}
        />
      </div>
    </form>
  );
}

export default DoctorForm;
