import "./home.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import Footer from "../../components/footer/Footer.jsx";
import DoctorCard from "../../components/doctorComponents/doctorCard/DoctorCard.jsx";
import Search from "../../components/search/Search.jsx";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

function Home() {
  let doctorKey = 0;

  // States for Search.jsx
  const [SortOption, SwitchSortOption] = useState(false);
  const [FilterOption, SwitchFilterOption] = useState(false);
  const [SortBy, setSortBy] = useState("");

  //States for FilterSearch.jsx
  const [location, setLocation] = useState("");
  const [feeValue, changeFee] = useState([0, 500]);

  //Fetch data from database in these values.
  const [specializations, EditSpecializations] = useState([]);
  const [treatments, EditTreatments] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [displayDoctors, setDisplayDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctorList() {
      try {
        const doctorObjects = [];
        let doctorArray = await getDoc(doc(db, "search", "doctorList"));
        doctorArray = doctorArray.data().doctors;
        for(let i = 0 ; i < doctorArray.length; i++){
          const docUID = doctorArray[i] 
          let doctor = await getDoc(doc(db, "users", docUID));
          doctorObjects.push(doctor.data());
        }
        setDoctorList(doctorObjects);
      } catch (error) {
        console.log("Error fetching doctor data. ", error);
      }
    }
    fetchDoctorList();
  }, []);

  useEffect(() => {
    const setDoctors = [];
    for(let i = 0 ; i < doctorList.length; i++){
      const doctorObject = doctorList[i];
      const {
        doctorName,
        clinicAddress,
        clinicOnlineConsultation,
        clinicConsultationFee,
        treatmentsOffered,
        specialization,
      } = doctorObject;
      const doctorCardData = {doctorName : doctorName,
        clinicAddress : clinicAddress,
        onlineConsulation : clinicOnlineConsultation,
        consultationFee : clinicConsultationFee,
        treatments : treatmentsOffered,
        specialization : specialization,
      };
      setDoctors.push(doctorCardData);
    }
    setDisplayDoctors(setDoctors);
  }, [doctorList]);


  return (
    <div className="home-page">
      <Navbar isFixed={true} />
      <div style={{ paddingBottom: "5em" }} />
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
          SortBy: SortBy,
          setSortBy: setSortBy,
        }}
        LocationState={{
          location: location,
          setLocation: setLocation,
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
      />
      <div style={{ paddingBottom: "1em" }} />
      <MainContainer
        mainWrapperClass="main-container"
        mainContainerStyle={{
          minHeight: "720px",
          width: "75vw",
          padding: "0.5em 0.5em",
        }}
        
        AddComponents={displayDoctors.length && displayDoctors.map((doctor) => (
          <DoctorCard
            addCardClass={"added-item"}
            doctorObject={doctor}
            key={doctorKey++}
          />
        ))}
      />
      <div style={{ paddingBottom: "5em" }} />
      <Footer />
    </div>
  );
}

export default Home;
