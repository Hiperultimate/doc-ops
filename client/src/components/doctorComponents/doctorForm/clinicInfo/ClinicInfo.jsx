import "./clinicInfo.css";
import InputField from "../../../inputField/InputField.jsx";
import MainButton from "../../../mainButton/MainButton.jsx";
import Combobox from "react-widgets/Combobox";
import DisplayMap from "../../../displayMap/DisplayMap.jsx";
import DropdownList from "react-widgets/DropdownList";
import MultiSelect from "../../../multiSelect/MultiSelect.jsx";

// Have to set name for Multiselect field for forms
function ClinicInfo({
  clinicNameHook = {},
  clinicAddressHook = {},
  clinicConsultationFeeHook = {},
  clinicOnlineConsultationHook = {},
  treatmentsOfferedHook = {},
  specializationHook = {},
  openingHoursHook = {},
  closingHoursHook = {},
  clinicPicturesHook = {},
}) {
  const { clinicName, setClinicName, clinicNameErrorMsg } = clinicNameHook;
  const {
    clinicAddress,
    setClinicAddress,
    chooseClinicAddress,
    clinicAddressPairGeo,
    clinicAddressGeoLocation,
    setClinicAddressGeoLocation,
    clinicAddressErrorMsg,
  } = clinicAddressHook;
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
  const {
    treatmentsOffered,
    setTreatmentsOffered,
    treatmentsErrorMsg,
    treatmentOptions,
  } = treatmentsOfferedHook;
  const {
    specialization,
    setSpecialization,
    specializationErrorMsg,
    specializationOptions,
  } = specializationHook;
  const { openingHours, setOpeningHours, openingHoursErrorMsg } =
    openingHoursHook;
  const { closingHours, setClosingHours, closingHoursErrorMsg } =
    closingHoursHook;
  const {
    clinicPictures,
    setClinicPictures,
    clinicPicturesErrorMsg,
    ValidateImage,
  } = clinicPicturesHook;

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
              {clinicNameErrorMsg && (
                <div className="error-msg">{clinicNameErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-address">
              <span className="input-heading">Address</span>
              <Combobox
                placeholder={"Enter your address"}
                filter={() => true}
                data={chooseClinicAddress}
                onChange={(value) => {
                  if (clinicAddressPairGeo[value]) {
                    setClinicAddressGeoLocation(clinicAddressPairGeo[value]);
                  } else {
                    setClinicAddressGeoLocation([0,0]);
                  } 
                  setClinicAddress(value);
                }}
                value={clinicAddress}
              />
              {clinicAddressErrorMsg && (
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
              {consultationFeeErrorMsg && (
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
              {onlineConsultationErrorMsg && (
                <div className="error-msg">{onlineConsultationErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-treatments-offered">
              <span className="input-heading">Treatments Offered</span>
              <div className="input-container">
                <MultiSelect
                  options={treatmentOptions}
                  placeholder={"Enter Treatments"}
                  stateValue={treatmentsOffered}
                  handleState={setTreatmentsOffered}
                />
              </div>
              {treatmentsErrorMsg && (
                <div className="error-msg">{treatmentsErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-specialization">
              <span className="input-heading">Specializations</span>
              <div className="input-container">
                <MultiSelect
                  options={specializationOptions}
                  placeholder={"Enter Specializations"}
                  stateValue={specialization}
                  handleState={setSpecialization}
                />
              </div>
              {specializationErrorMsg && (
                <div className="error-msg">{specializationErrorMsg[0]}</div>
              )}
            </div>
            <div className="clinic-opening-hours">
              <div className="opening-hours-form">
                <InputField
                  wrapperClass={"input-dimension"}
                  heading={"Enter Opening Hours"}
                  placeholder={"Enter Opening Hours"}
                  type={"time"}
                  fieldName={"openingHours"}
                  setChange={setOpeningHours}
                  value={openingHours}
                />
                {openingHoursErrorMsg && (
                  <div className="error-msg">{openingHoursErrorMsg[0]}</div>
                )}
                <InputField
                  wrapperClass={"input-dimension"}
                  heading={"Enter Closing Hours"}
                  placeholder={"Enter Closing Hours"}
                  type={"time"}
                  fieldName={"closingHours"}
                  setChange={setClosingHours}
                  value={closingHours}
                />
                {closingHoursErrorMsg && (
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
                  onChange={ValidateImage}
                  accept="image/*"
                  multiple
                />
              </div>
              {clinicPicturesErrorMsg && (
                <div className="error-msg">{clinicPicturesErrorMsg[0]}</div>
              )}
            </div>
          </div>
        </div>
        <div className="map-part">
          <DisplayMap
            addressLatLong={clinicAddressGeoLocation}
            mapBorderRadius={"0px 10px 10px 0px"}
          />
        </div>
      </div>
    </div>
  );
}

export default ClinicInfo;
