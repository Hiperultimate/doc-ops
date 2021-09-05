import "./doctorAbout.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import DoctorDetails from "../../components/doctorComponents/doctorDetails/DoctorDetails.jsx";
import DoctorClinicDetails from "../../components/doctorComponents/doctorClinicDetails/DoctorClinicDetails.jsx";

function DoctorAbout() {
  return (
    <div className="doctor-about">
      <Navbar />
      <MainHeading titleName={"About"} />
      <div className="main-container">
        <MainContainer
          AddComponents={[
            <MainContHead titleName="Alanakov Banovoichi" key={1} />,
            <DoctorDetails
              experience={"1+ Years"}
              email={"alanokovTheDoctor@gmail.com"}
              phoneNumber={"981273591"}
              specialization={"Surgeries, Anesthetics, Valorant, Punjabi"}  //Might need to parse according to the input later on
              treatments={
                "Wisdom tooth removal, Plaq Cleaning, Ear Destroyer, Stomach Remover"
              }
              consultationFee={"2100"}
              key={2}
            />,
            <DoctorClinicDetails clinicName={"ATS Doctors"}
            clinicAddress={"Rotripur-2301 New Delhi"}
            onlineConsultation={true} //Check if value is in string or bool - if yes, then add change in DoctorClinicDetails component as well
            openingHours={"Monday - Friday 12PM - 8PM"} key={3}/>,
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default DoctorAbout;
