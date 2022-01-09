import "./patientForm.css";
import { useState, useEffect } from "react";
import MainContainer from "../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../components/mainContHead/MainContHead.jsx";
import PatientBasicInfo from "../../../components/patientComponents/patientBasicInfo/PatientBasicInfo.jsx";
import PatientMedicalInfo from "../../../components/patientComponents/patientMedicalInfo/PatientMedicalInfo.jsx";
import { ToastContainer, toast } from "react-toastify";
import { searchToAddressResults } from "../../../utils/contexts/MapContext.js";
import "react-toastify/dist/ReactToastify.css";

import { doc, getDoc, setDoc, GeoPoint } from "firebase/firestore";
import { db } from "../../../firebase.js";
import { userType } from "../../../utils/constants/dataModel.js";
import { useAuth } from "../../../utils/contexts/AuthContext.js";
import inputValidation from "../../../utils/validations/inputValidation.js";

function PatientForm() {
  const [patientName, setPatientName] = useState("");
  const [patientDOB, setPatientDOB] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [chooseAddress, setChooseAddress] = useState([]);
  const [addressGeoLocation, setAddressGeoLocation] = useState([0, 0]);
  const [addressPairGeo, setAddressPairGeo] = useState({});
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

  const { currentUser, currentUserData } = useAuth();
  const [loading, setLoading] = useState(false);
  const successMsg = () => toast("Updated Successfully");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const inputFields = {
      patientName: patientName,
      patientDOB: patientDOB,
      patientAddress: patientAddress,
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
        await setDoc(doc(db, "users", userID), newUserData, { merge: true });
        successMsg();
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    return;
  };

  useEffect(() => {
    async function fetchOldPatientData() {
      try {
        const retrievedData = currentUserData;
        setPatientName(retrievedData.name);
        setPatientDOB(
          new Date(
            new Date("1970-01-01 00:00:00".replace(/-/g, "/")).setSeconds(
              retrievedData.dob.seconds
            )
          )
            .toISOString()
            .split("T")[0]
        );
        setPatientAddress(retrievedData.address);
        setAddressGeoLocation([
          retrievedData.geoLocation._lat,
          retrievedData.geoLocation._long,
        ]);
        setPatientPhone(retrievedData.phone);
        setPatientWeight(retrievedData.weight);
        setPatientHeight(retrievedData.height);
        setPatientGender(retrievedData.gender);
        setPatientBloodgroup(retrievedData.bloodgroup);
        setPatientAllergies(retrievedData.allergies);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchClinicOptions() {
      try {
        let retrievedData = await getDoc(doc(db, "formInputs", "patientForm"));
        setAllergyOptions(retrievedData.data().allergies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOldPatientData();
    fetchClinicOptions();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      // Send request here
      if (patientAddress) {
        const getAddressResult = await searchToAddressResults(patientAddress);
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
          setAddressGeoLocation([0,0]);
        }
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [patientAddress]);

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
                addressGeoLocation: addressGeoLocation,
                chooseAddress:chooseAddress,
                addressPairGeo:addressPairGeo,
                setPatientAddress: setPatientAddress,
                setAddressGeoLocation: setAddressGeoLocation,
                addressErrorMsg: errorList.patientAddress,
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
              Update
            </button>,
          ]}
        />
      </div>
    </form>
  );
}

export default PatientForm;
