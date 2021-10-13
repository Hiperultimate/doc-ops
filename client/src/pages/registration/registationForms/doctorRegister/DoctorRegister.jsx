import { useState, useEffect } from "react";
import MainContainer from "../../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../../components/mainContHead/MainContHead.jsx";
import DoctorInfo from "../../../../components/doctorComponents/doctorForm/doctorInfo/DoctorInfo.jsx";
import ClinicInfo from "../../../../components/doctorComponents/doctorForm/clinicInfo/ClinicInfo.jsx";
import ImageSlider from "../../../../components/imageSlider/ImageSlider.jsx";

import ValidationContext from "../../../../contexts/ValidationContext.js";
import { userType } from "../../../../dataModel.js";
import { doc, collection, getDocs, setDoc, GeoPoint } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../../firebase.js";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext.js";

function DoctorRegister({ setSafeRedirect }) {
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

  const [loading, setLoading] = useState(false);
  const { signup, logout } = useAuth();
  const history = useHistory();
  const [isUserCreated, setIsUserCreated] = useState(false);

  const [displayImage, setDisplayImage] = useState([]);
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
      // clinicPictures: clinicPictures,
    };

    // const newErrorList = ValidationContext(validationSchema, inputFields); Changed this because clinicPictures was getting deleted causing errors
    let newErrorList = {
      ...ValidationContext(validationSchema, inputFields),
      clinicPictures: errorList.clinicPictures,
    };
    console.log(newErrorList);
    let isValid = Object.keys(newErrorList).every(
      (item) => newErrorList[item].length === 0
    );

    if (displayImage.length === 0) {
      newErrorList.clinicPictures = ["Clinic images is required"];
      isValid = false;
    }
    setErrorList(newErrorList);

    if (isValid) {
      console.log("Valid form");
      // try {
      //   setSafeRedirect(false);
      //   setLoading(true);
      //   const newUser = await signup(doctorEmail, password);
      //   await logout();
      //   const newUserUID = newUser.user.uid;
      //   const userData = {
      //     doctorName: doctorName,
      //     type: userType.DOCTOR,
      //     doctorEmail: doctorEmail,
      //     doctorPhone: doctorPhone,
      //     doctorExperience: doctorExperience,
      //     clinicName: clinicName,
      //     clinicAddress: clinicAddress,
      //     clinicConsultationFee: clinicConsultationFee,
      //     clinicOnlineConsultation: clinicOnlineConsultation,
      //     treatmentsOffered: treatmentsOffered,
      //     specilization: specilization,
      //     openingHours: openingHours,
      //     closingHours: closingHours,
      //     // clinicPictures: clinicPictures,
      //   };
      //   await setDoc(doc(db, "users", newUserUID), userData);
      //   setIsUserCreated(true);
      // } catch (e) {
      //   console.log(e);
      //   if (e.code === "auth/email-already-in-use") {
      //     const oldErrorList = errorList;
      //     oldErrorList["doctorEmail"] = ["Email ID already in use"];
      //     setErrorList(oldErrorList);
      //   } else {
      //     throw e;
      //   }
      // }
      // setLoading(false);

      const setURLs = [];
      let imgNum = 0;
      displayImage.forEach(async (imgLink) => {
        const imgObj = await fetch(imgLink)
          .then((r) => r.blob())
          .then(
            (blobFile) =>
              new File(
                [blobFile],
                new Date().getTime().toString() + `${imgNum++}`,
                { type: blobFile.type }
              )
          );
        const uploadImgRef = ref(storage, `images/${imgObj.name}`);
        await uploadBytes(uploadImgRef, imgObj).then((snapshot) => {
          console.log("Uploaded an image", snapshot);
        });
        const getDownloadableURL = await getDownloadURL(
          ref(storage, `images/${imgObj.name}`)
        );
        setURLs.push(getDownloadableURL);
      });
      setImgURL(setURLs);

    }
  };

  const uploadPictureHandler = async (e) => {
    const images = e.target.files;
    const checkType = new Set([".jpg", ".jpeg", ".bmp", ".gif", ".png"]);
    let typeErrorMsg = [];
    //Validate if the files are images
    if (images.length > 5) {
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
        console.log("IMAGE BEFORE : ", img);
        displayImg.push(URL.createObjectURL(img));
      });
      setDisplayImage(displayImg);
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
  };

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
    fetchClinicOptions(); // UNCOMMENT BEFORE PUSHING
  }, []);

  useEffect(() => {
    if (loading === false && isUserCreated) {
      setSafeRedirect(true);
      history.push("/login");
    }
  }, [loading, isUserCreated, history, setSafeRedirect]);

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
                uploadPictureHandler: uploadPictureHandler,
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
