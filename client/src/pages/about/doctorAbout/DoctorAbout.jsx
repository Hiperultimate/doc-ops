import "./doctorAbout.css";
import Navbar from "../../../components/navbar/Navbar.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import MainContainer from "../../../components/mainContainer/MainContainer.jsx";
import MainHeading from "../../../components/mainHeading/MainHeading.jsx";
import MainContHead from "../../../components/mainContHead/MainContHead.jsx";
import DoctorDetails from "../../../components/doctorComponents/doctorDetails/DoctorDetails.jsx";
import DoctorClinicDetails from "../../../components/doctorComponents/doctorClinicDetails/DoctorClinicDetails.jsx";
import ImageSlider from "../../../components/imageSlider/ImageSlider.jsx";

function DoctorAbout() {
  return (
    <div className="doctor-about">
      <Navbar isFixed={true} />
      <div className="doctor-about-top-spacing" />
      <MainHeading titleName={"About"} />
      <MainContainer
        mainWrapperClass="main-container"
        AddComponents={[
          <MainContHead titleName="Alanakov Banovoichi" key={1} />,
          <DoctorDetails
            experience={"1+ Years"}
            email={"alanokovTheDoctor@gmail.com"}
            phoneNumber={"981273591"}
            specialization={"Surgeries, Anesthetics, Valorant, Punjabi"} //Might need to parse according to the input later on
            treatments={
              "Wisdom tooth removal, Plaq Cleaning, Ear Destroyer, Stomach Remover"
            }
            consultationFee={"2100"}
            key={2}
          />,
          <DoctorClinicDetails
            clinicName={"ATS Doctors"}
            clinicAddress={"Rotripur-2301 New Delhi"}
            onlineConsultation={true} //Check if value is in string or bool - if yes, then add change in DoctorClinicDetails component as well
            openingHours={"Monday - Friday 12PM - 8PM"}
            key={3}
            addressLatLong={[28.6394, 77.3653]}
          />,
          <ImageSlider
            imageList={[
              "https://images.unsplash.com/photo-1485348616965-15c926318fbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
              "https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
              "https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
              "https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
              "https://images.unsplash.com/photo-1606824722920-4c652a70f348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
            ]}
            key={4}
          />,
        ]}
      />
      <div className="doctor-about-top-spacing" />
      <Footer />
    </div>
  );
}

export default DoctorAbout;
