import "./doctorAbout.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import MainHeading from "../../components/mainHeading/MainHeading.jsx";

function DoctorAbout() {
  return (
    <div className="doctor-about">
      <Navbar />
      <MainHeading titleName={"About"} />
      <div className="main-container">
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default DoctorAbout;
