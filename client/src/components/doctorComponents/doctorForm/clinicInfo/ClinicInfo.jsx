import "./clinicInfo.css";
import InputField from "../../../inputField/InputField.jsx";
import MainButton from "../../../mainButton/MainButton.jsx";
import DisplayMap from "../../../displayMap/DisplayMap.jsx";
import DropdownList from "react-widgets/DropdownList";
import MultiSelect from "../../../multiSelect/MultiSelect.jsx";

// Have to set name for Multiselect field for forms
function ClinicInfo({
  clinicNameHook,
  clinicAddressHook,
  clinicConsultationFeeHook,
  clinicOnlineConsultationHook,
  treatmentsOfferedHook,
  specilizationHook,
  openingHoursHook,
  closingHoursHook,
  clinicPicturesHook,
}) {
  const treatments = [
    "Wisdom tooth removal",
    "Plaq Cleaning",
    " Wonder tooth removal",
    "tendon surgery",
    "bone lengthening surgery",
    "plastic surgery",
  ];
  const specialization = [
    "Surgeries",
    "Allergy & Clinical Immunology",
    "Anesthesiology",
    "Community Medicine/Public Health",
    "Dermatology, Venereology and Leprosy",
  ];

  const { clinicName, setClinicName, clinicNameErrorMsg } = clinicNameHook;
  const { clinicAddress, setClinicAddress, clinicAddressErrorMsg } =
    clinicAddressHook;
  const {
    clinicConsultationFee,
    setClinicConsultationFee,
    consultationFeeErrorMsg,
  } = clinicConsultationFeeHook;
  const {
    clinicOnlineConsultation,
    setClinicOnlineConsultation,
    onlineConsultationErrorMsg,
  } = clinicOnlineConsultationHook;
  const { treatmentsOffered, setTreatmentsOffered, treatmentsErrorMsg } =
    treatmentsOfferedHook;
  const { specilization, setSpecilization, specializationErrorMsg } =
    specilizationHook;
  const { openingHours, setOpeningHours, openingHoursErrorMsg } =
    openingHoursHook;
  const { closingHours, setClosingHours, closingHoursErrorMsg } =
    closingHoursHook;
  const { clinicPictures, setClinicPictures, clinicPicturesErrorMsg } =
    clinicPicturesHook;

  return (
    <div className="clinic-info global-box-shadow">
      <div className="map-grid">
        <div className="clinic-form-part">
          <div className="clinic-grid">
            <div className="clinic-name">
              <InputField
                wrapperClass={"input-dimension"}
                heading={"Name"}
                placeholder={"Enter clinic's name"}
                type={"text"}
                fieldName={"clinicName"}
                setChange={setClinicName}
                value={clinicName}
              />
            {clinicNameErrorMsg.length !== 0 && (
                <div className="error-msg">{clinicNameErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-address">
              <InputField
                wrapperClass={"input-dimension"}
                heading={"Address"}
                placeholder={"Enter address"}
                type={"text"}
                fieldName={"clinicAddress"}
                setChange={setClinicAddress}
                value={clinicAddress}
              />
            {clinicAddressErrorMsg.length !== 0 && (
                <div className="error-msg">{clinicAddressErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-consultation-fee">
              <InputField
                wrapperClass={"input-dimension"}
                heading={"Consultation Fee"}
                placeholder={"Enter consultation fee"}
                type={"number"}
                scaleText={"₹"}
                scaleTextPos={"left"}
                fieldName={"consultationFee"}
                setChange={setClinicConsultationFee}
                value={clinicConsultationFee}
              />
            {consultationFeeErrorMsg.length !== 0 && (
                <div className="error-msg">{consultationFeeErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-online-consultation">
              <span className="input-heading">Online Consultation</span>
              <div className="consultation-input-container">
                <DropdownList
                  defaultValue={"False"}
                  data={["True", "False"]}
                  onChange={(value) => setClinicOnlineConsultation(value)}
                />
              </div>
            {onlineConsultationErrorMsg.length !== 0 && (
                <div className="error-msg">{onlineConsultationErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-treatments-offered">
              <span className="input-heading">Treatments Offered</span>
              <div className="input-container">
                <MultiSelect
                  options={[...treatments]}
                  placeholder={"Enter Treatments"}
                  stateValue={treatmentsOffered}
                  handleState={setTreatmentsOffered}
                />
              </div>
            {treatmentsErrorMsg.length !== 0 && (
                <div className="error-msg">{treatmentsErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-specialization">
              <span className="input-heading">Specializations</span>
              <div className="input-container">
                <MultiSelect
                  options={[...specialization]}
                  placeholder={"Enter Specializations"}
                  stateValue={specilization}
                  handleState={setSpecilization}
                />
              </div>
            {specializationErrorMsg.length !== 0 && (
                <div className="error-msg">{specializationErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-opening-hours">
              <div className="opening-hours-form">
                <InputField
                  wrapperClass={"input-dimension"}
                  heading={"Enter Opening Hours"}
                  placeholder={"Enter Opening Hours"}
                  type={"date"}
                  fieldName={"openingHours"}
                  setChange={setOpeningHours}
                  value={openingHours}
                  />
                  {openingHoursErrorMsg.length !== 0 && (
                  <div className="error-msg">{openingHoursErrorMsg[0]}</div>
                )}
                <InputField
                  wrapperClass={"input-dimension"}
                  heading={"Enter Closing Hours"}
                  placeholder={"Enter Closing Hours"}
                  type={"date"}
                  fieldName={"closingHours"}
                  setChange={setClosingHours}
                  value={closingHours}
                />
                {closingHoursErrorMsg.length !== 0 && (
                <div className="error-msg">{closingHoursErrorMsg[0]}</div>
              )}
              </div>
            </div>
            <div className="clinic-pictures">
              <div className="clinic-pictures-form">
                <span className="btn-left-text">Clinic Pictures</span>
                <label htmlFor="myfile">Upload Pictures</label>
                <input
                  type="file"
                  className="file-input"
                  id="myfile"
                  name="myfile"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="map-part">
          <DisplayMap
            addressLatLong={[1.3521, 103.8198]}
            mapBorderRadius={"0px 10px 10px 0px"}
          />
        </div>
      </div>
    </div>
  );
}

export default ClinicInfo;
