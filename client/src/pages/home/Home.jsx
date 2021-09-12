import "./home.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import Footer from "../../components/footer/Footer.jsx";
import DoctorCard from "../../components/doctorComponents/doctorCard/DoctorCard.jsx";
import Search from "../../components/search/Search.jsx";

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

  // States for Search.jsx
  const [SortOption, SwitchSortOption] = useState(false);
  const [FilterOption, SwitchFilterOption] = useState(false);
  const [SortByVal, ChangeSortBy] = useState("");

  //States for FilterSearch.jsx
  const [locationVal, locationChange] = useState("");
  const [feeValue, changeFee] = useState([0, 500]);

  //State for MultiSelect.jsx in FilterSearch.jsx
  const fetchSpecializations = [
    "Cancer Specialist",
    "Anesthesiology",
    "Cardiologists",
    "Dermatologists",
    "Family Physicians",
  ];
  const fetchTreatments = [
    "Anesthesiologists",
    "Cardiologists",
    "Dermatologists",
    "Endocrinologists",
    "Gastroenterologists",
    "Geriatric Medicine Specialists",
  ];
  //Fetch data from database in these values.
  const [specializations, EditSpecializations] = useState([]);
  const [treatments, EditTreatments] = useState([]);

  return (
    <div className="home-page">
      <Navbar isFixed={true} />
      <div style={{ paddingBottom: "3em" }} />
      <Search
        searchStyle={{
          width: "45vw",
        }}
        SortState={{
          SortOption: SortOption,
          SwitchSortOption: SwitchSortOption,
        }}
        FilterState={{
          FilterOption: FilterOption,
          SwitchFilterOption: SwitchFilterOption,
        }}
        SortValState={{
          SortByVal: SortByVal,
          ChangeSortBy: ChangeSortBy,
        }}
        LocationState={{
          locationVal: locationVal,
          locationChange: locationChange,
        }}
        FeeState={{
          feeValue: feeValue,
          changeFee: changeFee,
        }}
        SpecializationState={{
          specializations: specializations,
          EditSpecializations: EditSpecializations,
        }}
        TreatmentState={{
          treatments: treatments,
          EditTreatments: EditTreatments,
        }}
        SpecializationsData={fetchSpecializations}
        TreatmentsData={fetchTreatments}
      />
      <div style={{ paddingBottom: "1em" }} />
      <MainContainer
        mainWrapperClass="main-container"
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
