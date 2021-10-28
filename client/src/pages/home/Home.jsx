import "./home.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import Footer from "../../components/footer/Footer.jsx";
import DoctorCard from "../../components/doctorComponents/doctorCard/DoctorCard.jsx";
import Search from "../../components/search/Search.jsx";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

import filterDoctors from "../../utils/filters/filterDoctors.js";

function Home() {
  let doctorKey = 0;
  const doctorPerPage = 4;

  // States for Search.jsx
  const [SortOption, SwitchSortOption] = useState(false);
  const [FilterOption, SwitchFilterOption] = useState(false);
  const [SortBy, setSortBy] = useState("");

  //States for FilterSearch.jsx
  const [location, setLocation] = useState("");
  const [feeValue, changeFee] = useState([0, 500]);

  //Fetch data from database in these values.
  const [specializations, setSpecializations] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [doctorList, setDoctorList] = useState([]); // Stores doctors in the format which homepage needs
  const [filterList, setFilterList] = useState([]);  // Used to add filtered data from doctorList
  const [displayList, setDisplayList] = useState([]); // Used to display all filtered data
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(doctorPerPage);

  const handleList = (e) => {
    const buttonName = e.target.name;
    const totalDoctors = doctorList.length;
    if (buttonName === "high") {
      if (high + doctorPerPage > totalDoctors + doctorPerPage) {
        return;
      } else {
        setHigh(high + doctorPerPage);
        setLow(low + doctorPerPage);
      }
    } else if (buttonName === "low") {
      if (low === 0 || low < 0) {
        return;
      } else {
        setHigh(high - doctorPerPage);
        setLow(low - doctorPerPage);
      }
    }
  };

  useEffect(() => {
    async function fetchDoctorList() {
      try {
        const doctorObjects = [];
        let doctorArray = await getDoc(doc(db, "search", "doctorList"));
        doctorArray = doctorArray.data().doctors;
        for (let i = 0; i < doctorArray.length; i++) {
          const docUID = doctorArray[i];
          let doctor = await getDoc(doc(db, "users", docUID));
          const {
            doctorName,
            clinicAddress,
            clinicOnlineConsultation,
            clinicConsultationFee,
            treatmentsOffered,
            specialization,
          } = doctor.data();
          const doctorCardData = {
            doctorName: doctorName,
            clinicAddress: clinicAddress,
            onlineConsulation: clinicOnlineConsultation,
            consultationFee: clinicConsultationFee,
            treatments: treatmentsOffered,
            specialization: specialization,
          };
          doctorObjects.push(doctorCardData);
        }
        setDoctorList(doctorObjects);
        setFilterList(doctorObjects);
      } catch (error) {
        console.log("Error fetching doctor data. ", error);
      }
    }
    fetchDoctorList();
  }, []);

  useEffect(() => {
    const getFilteredData = filterDoctors(
      doctorList,
      location,
      feeValue,
      specializations,
      treatments
    );

    setFilterList(getFilteredData);
  }, [doctorList, location, feeValue, specializations, treatments]);

  useEffect(() => {
    if (filterList.length !== 0) {
      setDisplayList(filterList.slice(low, high));
    }
  }, [low, high, filterList]);

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
          setSpecializations: setSpecializations,
        }}
        TreatmentState={{
          treatments: treatments,
          setTreatments: setTreatments,
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
        AddComponents={
          displayList.length &&
          displayList.map((doctor) => (
            <DoctorCard
              addCardClass={"added-item"}
              doctorObject={doctor}
              key={doctorKey++}
            />
          ))
        }
      />
      <div className="adjust-doctor-list">
        <button type="button" name="low" onClick={handleList}>
          &lt;
        </button>
        <span>
          {low}-{high}
        </span>
        <button type="button" name="high" onClick={handleList}>
          &gt;
        </button>
      </div>
      <div style={{ paddingBottom: "5em" }} />
      <Footer />
    </div>
  );
}

export default Home;
