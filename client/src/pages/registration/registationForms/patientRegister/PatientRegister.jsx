import { useState } from "react";
import MainContainer from "../../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../../components/mainContHead/MainContHead.jsx";
import PatientBasicInfo from "../../../../components/patientComponents/patientBasicInfo/PatientBasicInfo.jsx";
import PatientMedicalInfo from "../../../../components/patientComponents/patientMedicalInfo/PatientMedicalInfo.jsx";

import { doc, setDoc, GeoPoint } from "firebase/firestore";
import { db } from "../../../../firebase.js";
import { userType } from "../../../../dataModel.js";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext.js";

import patientRegistrationFormValidation from "./patientRegistrationFormValidation.js";

function PatientRegister() {
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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorList, setErrorList] = useState({
    patientDOB: [],
    patientPhone: [],
    patientWeight: [],
    patientHeight: [],
    patientGender: [],
    patientBloodgroup: [],
    password: [],
    confirmPassword: [],
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, logout } = useAuth();
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newErrorList = patientRegistrationFormValidation(
      patientDOB,
      patientPhone,
      patientWeight,
      patientHeight,
      patientGender,
      patientBloodgroup,
      password,
      confirmPassword
    );

    setErrorList(newErrorList);

    const isValid = Object.keys(newErrorList).every((item) => newErrorList[item].length === 0);

    if (isValid) {
      console.log("Continue to create an account.");
      try {
        setLoading(true);
        setErrorMsg("");
        const newUser = await signup(patientEmail, password);
        await logout();
        const newUserUID = newUser.user.uid;
        const userData = {
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
        await setDoc(doc(db, "users", newUserUID), userData);
        history.push("/login");
      } catch {
        setErrorMsg("Failed to create an account");
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
              }}
              patientDOBState={{
                patientDOB: patientDOB,
                setPatientDOB: setPatientDOB,
                dobErrorMsg: errorList.patientDOB,
              }}
              patientAddressState={{
                patientAddress: patientAddress,
                setPatientAddress: setPatientAddress,
              }}
              patientEmailState={{
                patientEmail: patientEmail,
                setPatientEmail: setPatientEmail,
              }}
              patientPhoneState={{
                patientPhone: patientPhone,
                setPatientPhone: setPatientPhone,
                phoneErrorMsg: errorList.patientPhone,
              }}
              patientPasswordHook={{
                password: password,
                setPassword: setPassword,
                passwordErrorMsg: errorList.password,
              }}
              patientConfirmPasswordHook={{
                confirmPassword: confirmPassword,
                setConfirmPassword: setConfirmPassword,
                confPasswordErrorMsg: errorList.confirmPassword,
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

export default PatientRegister;
