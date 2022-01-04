import { useState, useEffect } from "react";
import MainContainer from "../../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../../components/mainContHead/MainContHead.jsx";
import PatientBasicInfo from "../../../../components/patientComponents/patientBasicInfo/PatientBasicInfo.jsx";
import PatientMedicalInfo from "../../../../components/patientComponents/patientMedicalInfo/PatientMedicalInfo.jsx";

import { doc, getDoc, setDoc, GeoPoint } from "firebase/firestore";
import { db } from "../../../../firebase.js";
import { userType } from "../../../../utils/constants/dataModel.js";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../utils/contexts/AuthContext.js";

import inputValidation from "../../../../utils/validations/inputValidation.js";

function PatientRegister({ setSafeRedirect }) {
  const [patientName, setPatientName] = useState("");
  const [patientDOB, setPatientDOB] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [chooseAddress, setChooseAddress] = useState([]);
  const [addressGeoLocation, setAddressGeoLocation] = useState([0, 0]);
  const [addressPairGeo, setAddressPairGeo] = useState({});
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [patientHeight, setPatientHeight] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [patientBloodgroup, setPatientBloodgroup] = useState("");
  const [patientAllergies, setPatientAllergies] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    password: [],
    confirmPassword: [],
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
    password: ["required", "<= 8"],
    confirmPassword: ["required", "<= 8", "matchPassword"],
  };

  const [loading, setLoading] = useState(false);
  const { signup, logout } = useAuth();
  const history = useHistory();
  const [isUserCreated, setIsUserCreated] = useState(false);

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
      password: password,
      confirmPassword: confirmPassword,
    };

    const newErrorList = inputValidation(validationSchema, inputFields);

    setErrorList(newErrorList);

    const isValid = Object.keys(newErrorList).every(
      (item) => newErrorList[item].length === 0
    );

    if (isValid) {
      try {
        setSafeRedirect(false);
        setLoading(true);
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
          geoLocation: new GeoPoint(
            addressGeoLocation[0],
            addressGeoLocation[1]
          ),
          weight: Number(patientWeight),
          height: Number(patientHeight),
          gender: patientGender,
          bloodgroup: patientBloodgroup,
          allergies: patientAllergies,
        };
        await setDoc(doc(db, "users", newUserUID), userData);
        setIsUserCreated(true);
      } catch (e) {
        console.log(e);
        if (e.code === "auth/email-already-in-use") {
          const oldErrorList = errorList;
          oldErrorList["patientEmail"] = ["Email ID already in use"];
          setErrorList(oldErrorList);
        } else {
          throw e;
        }
      }
      setLoading(false);
    }
    return;
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      // Send request here
      if (patientAddress) {
        const getAddressResult = await fetch(
          `https://geocoder.ls.hereapi.com/search/6.2/geocode.json?languages=en-US&maxresults=4&searchtext=${patientAddress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
        );
        const searchLocation = await getAddressResult.json();
        if (searchLocation.Response.View[0] !== undefined ) {
          const searchResults = searchLocation.Response.View[0].Result; // Array of objects
          const locationObj = {};
          const addressList = [];
          for (let i = 0; i < searchResults.length; i++) {
            addressList.push(searchResults[i].Location.Address.Label);
            locationObj[searchResults[i].Location.Address.Label] = [
              searchResults[i].Location.DisplayPosition.Latitude,
              searchResults[i].Location.DisplayPosition.Longitude,
            ];
          }
          setChooseAddress(addressList);
          setAddressPairGeo(locationObj);
        } else {
          console.log("Unable to identify location");
        }
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [patientAddress]);

  useEffect(() => {
    if (loading === false && isUserCreated) {
      setSafeRedirect(true);
      history.push("/login");
    }
  }, [loading, isUserCreated, history, setSafeRedirect]);

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
                chooseAddress: chooseAddress,
                addressPairGeo: addressPairGeo,
                addressGeoLocation: addressGeoLocation,
                setAddressGeoLocation: setAddressGeoLocation,
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

export default PatientRegister;
