import "./patientForm.css";
import { useState, useEffect } from "react";
import MainContainer from "../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../components/mainContHead/MainContHead.jsx";
import PatientBasicInfo from "../../../components/patientComponents/patientBasicInfo/PatientBasicInfo.jsx";
import PatientMedicalInfo from "../../../components/patientComponents/patientMedicalInfo/PatientMedicalInfo.jsx";

import { doc, getDoc, setDoc, GeoPoint } from "firebase/firestore";
import { db } from "../../../firebase.js";
import { userType } from "../../../utils/constants/dataModel.js";
import { useAuth } from "../../../utils/contexts/AuthContext.js";
import inputValidation from "../../../utils/validations/inputValidation.js";

function PatientForm() {
  const [patientName, setPatientName] = useState("");
  const [patientDOB, setPatientDOB] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [patientHeight, setPatientHeight] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [patientBloodgroup, setPatientBloodgroup] = useState("");
  const [patientAllergies, setPatientAllergies] = useState([]);

  const [allergyOptions, setAllergyOptions] = useState([]);
  const [errorList, setErrorList] = useState({
    patientName: [],
    patientDOB: [],
    patientAddress: [],
    patientEmail: [],
    patientPhone: [],
    patientWeight: [],
    patientHeight: [],
    patientGender: [],
    patientBloodgroup: [],
  });

  const validationSchema = {
    patientName: ["required"],
    patientDOB: ["required", "dateTime", "BeforeCurrentDate"],
    patientAddress: ["required"],
    patientEmail: ["required", "email"],
    patientPhone: ["required", "integer", "lengthEqual 10"],
    patientWeight: ["required", "integer", "> 0"],
    patientHeight: ["required", "integer", "> 0"],
    patientGender: ["required"],
    patientBloodgroup: ["required"],
  };

  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const inputFields = {
      patientName: patientName,
      patientDOB: patientDOB,
      patientAddress: patientAddress,
      patientEmail: patientEmail,
      patientPhone: patientPhone,
      patientWeight: patientWeight,
      patientHeight: patientHeight,
      patientGender: patientGender,
      patientBloodgroup: patientBloodgroup,
    };

    const newErrorList = inputValidation(validationSchema, inputFields);

    setErrorList(newErrorList);

    const isValid = Object.keys(newErrorList).every(
      (item) => newErrorList[item].length === 0
    );

    if (isValid) {
      try {
        setLoading(true);
        const userID = currentUser.uid;
        const newUserData = {
          name: patientName,
          type: userType.PATIENT,
          dob: new Date(patientDOB),
          address: patientAddress,
          email: patientEmail,
          phone: patientPhone,
          geoLocation: new GeoPoint(1.3521, 103.8198),
          weight: Number(patientWeight),
          height: Number(patientHeight),
          gender: patientGender,
          bloodgroup: patientBloodgroup,
          allergies: patientAllergies,
        };
        await setDoc(doc(db, "users", userID), newUserData ,{ merge: true });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    return;
  };

  useEffect(() => {
    async function fetchClinicOptions() {
      try {
        let retrievedData = await getDoc(doc(db, "formInputs", "patientForm"));
        setAllergyOptions(retrievedData.data().allergies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClinicOptions();
  }, []);

  return (
    // <form onSubmit={handleFormSubmit}>
    <form>
      <div className="patient-form">
        <MainContainer
          mainWrapperClass="main-container"
          AddComponents={[
            <MainContHead titleName="Basic Info" key={1} />,
            <PatientBasicInfo
              key={2}
              patientNameState={{
                patientName: patientName,
                setPatientName: setPatientName,
                nameErrorMsg: errorList.patientName,
              }}
              patientDOBState={{
                patientDOB: patientDOB,
                setPatientDOB: setPatientDOB,
                dobErrorMsg: errorList.patientDOB,
              }}
              patientAddressState={{
                patientAddress: patientAddress,
                setPatientAddress: setPatientAddress,
                addressErrorMsg: errorList.patientAddress,
              }}
              patientEmailState={{
                patientEmail: patientEmail,
                setPatientEmail: setPatientEmail,
                emailErrorMsg: errorList.patientEmail,
              }}
              patientPhoneState={{
                patientPhone: patientPhone,
                setPatientPhone: setPatientPhone,
                phoneErrorMsg: errorList.patientPhone,
              }}
            />,
            <MainContHead titleName="Medical Info" key={3} />,
            <PatientMedicalInfo
              key={4}
              patientWeightState={{
                patientWeight: patientWeight,
                setPatientWeight: setPatientWeight,
                weightErrorMsg: errorList.patientWeight,
              }}
              patientHeightState={{
                patientHeight: patientHeight,
                setPatientHeight: setPatientHeight,
                heightErrorMsg: errorList.patientHeight,
              }}
              patientGenderState={{
                patientGender: patientGender,
                setPatientGender: setPatientGender,
                genderErrorMsg: errorList.patientGender,
              }}
              patientBloodgroupState={{
                patientBloodgroup: patientBloodgroup,
                setPatientBloodgroup: setPatientBloodgroup,
                bloodgroupErrorMsg: errorList.patientBloodgroup,
              }}
              patientAllergiesState={{
                patientAllergies: patientAllergies,
                setPatientAllergies: setPatientAllergies,
                allergyOptions: allergyOptions,
              }}
            />,
            <button
              className="patient-form-submit global-box-shadow"
              type="submit"
              disabled={loading}
              key={5}
            >
              Register
            </button>,
          ]}
        />
      </div>
    </form>
  );
}

export default PatientForm;
