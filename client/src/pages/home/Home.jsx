import Navbar from "../../components/navbar/Navbar.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import Footer from "../../components/footer/Footer.jsx";
import DoctorCard from "../../components/doctorComponents/doctorCard/DoctorCard.jsx";
import "./home.css";

function Home() {
  // NOTE: doc1, doc2 are temporary for front-end development purposes
  // , use database entries as objects to pass in "users"

  const doc1 = {
    doctorName: "Kalameet The Dragon",
    clinicAddress: "Rotripur-2301 New Delhi",
    onlineConsulation: true,
    treatments: [
      "Wisdom tooth removal",
      "Plaq Cleaning",
      " Wonder tooth removal",
      "tendon surgery",
      "bone lengthening surgery",
      "plastic surgery",
    ],
    specialization: [
      "Surgeries",
      "Allergy & Clinical Immunology",
      "Anesthesiology",
      "Community Medicine/Public Health",
      "Dermatology, Venereology and Leprosy",
    ],
    consultationFee: 9000,
  };

  const doc2 = {
    doctorName: "Sekiro",
    clinicAddress: "Sempo Temple Column - 98123 ",
    onlineConsulation: false,
    treatments: ["Plastic Surgery"],
    specialization: ["Surgeries", "Allergy Immunology"],
    consultationFee: 700,
  };
  let doctorKey = 0;
  const doctorObjects = [doc1, doc2];
  return (
    <div className="home-page">
      <Navbar isFixed={true} />
      <MainContainer
        mainWrapperClass="main-container home-top-spacing"
        mainContainerStyle={{
          minHeight: "720px",
          width: "45vw",
          padding: "0.5em 0.5em",
        }}
        AddComponents={doctorObjects.map((doctor) => (
          <DoctorCard
            addCardClass={"added-item"}
            doctorObject={doctor}
            key={doctorKey++}
          />
        ))}
      />
      <Footer />
    </div>
  );
}

export default Home;
