import "./doctorAbout.css";
import Navbar from "../../../components/navbar/Navbar.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import MainContainer from "../../../components/mainContainer/MainContainer.jsx";
import MainHeading from "../../../components/mainHeading/MainHeading.jsx";
import MainContHead from "../../../components/mainContHead/MainContHead.jsx";
import DoctorDetails from "../../../components/doctorComponents/doctorDetails/DoctorDetails.jsx";
import DoctorClinicDetails from "../../../components/doctorComponents/doctorClinicDetails/DoctorClinicDetails.jsx";
import ImageSlider from "../../../components/imageSlider/ImageSlider.jsx";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useAuth } from "../../../utils/contexts/AuthContext.js";

function DoctorAbout() {
  const [aboutUserData, setAboutUserData] = useState({
    doctorName: "loading...",
    doctorPhone: "loading...",
    doctorEmail: "loading...",
    doctorExperience: "loading...",
    geoLocation: [],
    openingHours: "loading...",
    closingHours: "loading...",
    specialization: [],
    treatmentsOffered: [],
    clinicName: "loading...",
    clinicAddress: "loading...",
    clinicConsultationFee: "loading...",
    clinicOnlineConsultation: "loading...",
    clinicImgURLs: [],
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
        setAboutUserData(fetchAboutData);
      } catch (err) {
        console.log(err.message);
        history.push(`/error`);
      }
      return fetchAboutData;
    };
    AboutUID();
  }, [UID, history, userData]);

  return (
    <div className="doctor-about">
      <Navbar isFixed={true} />
      <div className="doctor-about-top-spacing" />
      <MainHeading titleName={"About"} />
      <MainContainer
        mainWrapperClass="main-container"
        AddComponents={[
          <MainContHead titleName={aboutUserData.doctorName} key={1} />,
          <DoctorDetails
            experience={aboutUserData.doctorExperience + " years"}
            email={aboutUserData.doctorEmail}
            phoneNumber={aboutUserData.doctorPhone}
            specialization={aboutUserData.specialization} //Might need to parse according to the input later on
            treatments={aboutUserData.treatmentsOffered}
            consultationFee={aboutUserData.clinicConsultationFee}
            key={2}
          />,
          <DoctorClinicDetails
            clinicName={aboutUserData.clinicName}
            clinicAddress={aboutUserData.clinicAddress}
            onlineConsultation={aboutUserData.clinicOnlineConsultation}
            openingHours={`${aboutUserData.openingHours} - ${aboutUserData.closingHours}`}
            key={3}
            addressLatLong={
              aboutUserData.geoLocation.length === 0
                ? [0, 0]
                : aboutUserData.geoLocation
            }
          />,
          <ImageSlider imageList={aboutUserData.clinicImgURLs} key={4} />,
        ]}
      />
      <div className="doctor-about-top-spacing" />
      <Footer />
    </div>
  );
}

export default DoctorAbout;
