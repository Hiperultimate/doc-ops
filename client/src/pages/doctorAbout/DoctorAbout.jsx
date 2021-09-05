import "./doctorAbout.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";
import MainContHead from "../../components/mainContHead/MainContHead.jsx";
import DoctorDetails from "../../components/doctorComponents/doctorDetails/DoctorDetails.jsx";

function DoctorAbout() {
  return (
    <div className="doctor-about">
      <Navbar />
      <MainHeading titleName={"About"} />
      <div className="main-container">
        <MainContainer
          AddComponents={[
            <MainContHead titleName="Alanakov Banovoichi" key={1}/>,
            <DoctorDetails key={2}/>,
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default DoctorAbout;
