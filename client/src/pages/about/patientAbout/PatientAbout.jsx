import "./patientAbout.css";
import Navbar from "../../../components/navbar/Navbar.jsx";
import MainHeading from "../../../components/mainHeading/MainHeading.jsx";
import MainContainer from "../../../components/mainContainer/MainContainer.jsx";
import MainContHead from "../../../components/mainContHead/MainContHead.jsx";
import ContactInfo from "../../../components/patientComponents/contactInfo/ContactInfo.jsx";
import MedicalInfo from "../../../components/patientComponents/medicalInfo/MedicalInfo.jsx";
import MedicalHistory from "../../../components/patientComponents/medicalHistory/MedicalHistory.jsx";
import Footer from "../../../components/footer/Footer.jsx";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useAuth } from "../../../contexts/AuthContext.js";

function PatientAbout() {
  const [aboutUserData, setAboutUserData] = useState({
    name: "loading...",
    dob: "loading...",
    email: "loading...",
    gender: "loading...",
    bloodgroup: "loading...",
    geoLocation: [],
    height: "loading...",
    phone: "loading...",
    type: "loading...",
    weight: "loading...",
    address: "loading...",
    allergies: "loading...",
    age: "loading...",
  });
  const history = useHistory();
  const { userData } = useAuth();
  let { UID } = useParams();

  useEffect(() => {
    const AboutUID = async () => {
      let fetchAboutData;
      try {
        fetchAboutData = await userData(UID);
        fetchAboutData.geoLocation = [
          fetchAboutData.geoLocation.latitude,
          fetchAboutData.geoLocation.longitude,
        ];
        fetchAboutData.age = (
          new Date().getFullYear() - fetchAboutData.dob.toDate().getFullYear()
        ).toString();
        fetchAboutData.dob = fetchAboutData.dob
          .toDate()
          .toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        setAboutUserData(fetchAboutData);
      } catch (err) {
        console.log(err.message);
        history.push(`/error`);
      }
      return fetchAboutData;
    };
    AboutUID();
  }, [UID, history, userData]);

  const fetchMedicalHistory = [
    {
      DiseaseName: "Blood Cancer",
      CureTimeTaken: "21 Sept, 2021 - 30 December 2022",
      Comments: "Severe cases of blood ...",
      Medication: [
        {
          medName: "Chemo",
          medFrequency: "Once a day",
          medDuration: "31 Oct - 30 Dec",
        },
        {
          medName: "Pain Killers",
          medFrequency: "Once a week",
          medDuration: "15 Oct - 30 Dec",
        },
        {
          medName: "Drug 2",
          medFrequency: "3 times a day",
          medDuration: "31 Sept - 30 Dec",
        },
      ],
    },
    {
      DiseaseName: "Common Cold",
      CureTimeTaken: "25 Jan, 2022 - 30 February 2022",
      Comments: "Winter cold, minor coughs.",
      Medication: [
        {
          medName: "Coldo",
          medFrequency: "Three times a day",
          medDuration: "25 Jan - 29 Jan",
        },
        {
          medName: "Sleeping Pills",
          medFrequency: "At night",
          medDuration: "15 Feb - 19 Feb",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar isFixed={true} />
      <div className="patient-about-content">
        <MainHeading titleName={"About"} />
        <MainContainer
          mainWrapperClass="main-container"
          AddComponents={[
            <MainContHead titleName={aboutUserData.name} key={1} />,
            <div style={{ paddingBottom: "3em" }} key={2}>
              <ContactInfo
                contactDOB={aboutUserData.dob.toString()}
                contactEmail={aboutUserData.email}
                contactPhone={aboutUserData.phone}
                contactAddress={aboutUserData.address}
                contactAddressMap={
                  aboutUserData.geoLocation.length === 0
                    ? [0, 0]
                    : aboutUserData.geoLocation
                }
              />
            </div>,
            <MainContHead titleName="Medical Info" key={3} />,
            <div style={{ paddingBottom: "3em" }} key={4}>
              <MedicalInfo
                patientGender={aboutUserData.gender}
                patientAge={aboutUserData.age}
                patientBloodgroup={aboutUserData.bloodgroup}
                patientHeight={aboutUserData.height}
                patientWeight={aboutUserData.weight}
                patientAllergies={[aboutUserData.allergies]}
              />
            </div>,
            <MainContHead titleName="Medical History" key={5} />,
            <div style={{ paddingBottom: "0em" }} key={6}>
              <MedicalHistory medicalHistory={fetchMedicalHistory} />
            </div>,
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default PatientAbout;
