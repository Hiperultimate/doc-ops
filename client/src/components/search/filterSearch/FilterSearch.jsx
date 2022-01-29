import "./filterSearch.css";
import { useState, useEffect } from "react";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MapIconSvg from "../../../svgs/map-pin.svg";
import FilterArrowSvg from "../../../svgs/filter-arrow.svg";
import Button from "../../mainButton/MainButton.jsx";
import MultiSelect from "../../multiSelect/MultiSelect.jsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.js";

const ThemedSlider = withStyles({
  root: {
    color: "var(--green)",
    height: 8,
  },
})(Slider);

function FilterSearch({
  FilterState,
  SortState,
  SortByState,
  LocationState,
  FeeState,
  SpecializationState,
  TreatmentState,

}) {
  const { FilterOption, SwitchFilterOption } = FilterState;
  const { SwitchSortOption } = SortState;
  const { location, setLocation } = LocationState;
  const { feeValue, changeFee } = FeeState;
  const { specializations, setSpecializations } = SpecializationState;
  const { treatments, setTreatments } = TreatmentState;
  const [treatmentOptions, setTreatmentOptions] = useState([]);
  const [specializationOptions, setSpecializationOptions] = useState([]);
  
  const locationChangeHandler = (e) => {
    setLocation(e.currentTarget.value);
  };

  const feeChangeHandler = (e, newFee) => {
    changeFee(newFee);
  };

  const onClickHandler = () => {
    SwitchFilterOption(!FilterOption);
    SwitchSortOption(false);
  };

  useEffect(() => {
    async function fetchClinicOptions() {
      try {
        let retrievedData = await getDoc(doc(db, "formInputs", "doctorForm"));
        setTreatmentOptions(retrievedData.data().treatments);
        setSpecializationOptions(retrievedData.data().specializations);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClinicOptions();
  }, []);

  return (
    <div className="filter-search-container">
      <Button
        onClickHandler={onClickHandler}
        buttonText={"Filter Search"}
        btnStyle={{
          width: "200px",
          padding: "0.5em",
          position: "relative",
          right: "-8px",
        }}
        arrow={true}
      />

      {FilterOption && (
        <div className="filter-search-menu global-box-shadow">
          <div className="location-text">
            <span className="semi-title-style">Location</span>
          </div>
          <div className="consultation-fee-text">
            <span className="semi-title-style">Consultation Fee</span>
          </div>
          <div className="specialization-text">
            <span className="semi-title-style">Specializations</span>
          </div>
          <div className="treatment-text">
            <span className="semi-title-style">Treatments</span>
          </div>
          <div className="location-input">
            <div className="location-row input-bg-style">
              <label htmlFor="location-text-box">
                <img src={MapIconSvg} alt="map-ico" />
              </label>
              <input
                className="input-field-style"
                id="location-text-box"
                type="text"
                placeholder="Enter Location..."
                value={location}
                onChange={locationChangeHandler}
              />
              <img src={FilterArrowSvg} alt="arrow-ico" />
            </div>
          </div>
          <div className="consultation-fee-input">
            <div className="slider-container">
              <ThemedSlider
                value={feeValue}
                max={5000}
                step={50}
                valueLabelDisplay="auto"
                onChange={feeChangeHandler}
                marks={[
                  { value: 0, label: "₹ 0" },
                  { value: 5000, label: "₹ 5000" },
                ]}
              />
            </div>
          </div>
          <div className="specialization-input">
            <div className="specialization-row input-bg-style">
              <MultiSelect
                options={specializationOptions}
                placeholder={"Enter Specialization..."}
                stateValue={specializations}
                handleState={setSpecializations}
              />
            </div>
          </div>
          <div className="treatment-input">
            <div className="treatment-row input-bg-style">
              <MultiSelect
                options={treatmentOptions}
                placeholder={"Enter Treatments..."}
                stateValue={treatments}
                handleState={setTreatments}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterSearch;
