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

  
  const { clinicName, setClinicName } = clinicNameHook;
  const { clinicAddress, setClinicAddress } = clinicAddressHook;
  const { clinicConsultationFee, setClinicConsultationFee } =
    clinicConsultationFeeHook;
  const { clinicOnlineConsultation, setClinicOnlineConsultation } =
    clinicOnlineConsultationHook;
  const { treatmentsOffered, setTreatmentsOffered } = treatmentsOfferedHook;
  const { specilization, setSpecilization } = specilizationHook;
  const { openingHours, setOpeningHours } = openingHoursHook;
  const { clinicPictures, setClinicPictures } = clinicPicturesHook;

  return (
    <div className="clinic-info global-box-shadow">
      <div className="map-grid">
        <div className="clinic-form-part">
          <div className="clinic-grid">
            <div className="clinic-name">
              <InputField
                wrapperClass={"input-dimention"}
                heading={"Name"}
                placeholder={"Enter clinic's name"}
                type={"text"}
                fieldName={"clinicName"}
                setChange={setClinicName}
                value={clinicName}
              />
            </div>
            <div className="clinic-address">
              <InputField
                wrapperClass={"input-dimention"}
                heading={"Address"}
                placeholder={"Enter address"}
                type={"text"}
                fieldName={"clinicAddress"}
                setChange={setClinicAddress}
                value={clinicAddress}
              />
            </div>
            <div className="clinic-consultation-fee">
              <InputField
                wrapperClass={"input-dimention"}
                heading={"Consultation Fee"}
                placeholder={"Enter consultation fee"}
                type={"number"}
                scaleText={"₹"}
                scaleTextPos={"left"}
                fieldName={"consultationFee"}
                setChange={setClinicConsultationFee}
                value={clinicConsultationFee}
              />
            </div>
            <div className="clinic-online-consultation">
              <span className="input-heading">Online Consultation</span>
              <div className="input-container">
                <DropdownList
                  defaultValue={"False"}
                  data={["True", "False"]}
                  onChange={(value) => setClinicOnlineConsultation(value)}
                />
              </div>
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
            </div>
            <div className="clinic-opening-hours">
              <div className="opening-hours-form">
                <span className="btn-left-text">Opening Hours</span>
                <MainButton
                  buttonText="Enter Opening Hours"
                  arrow={true}
                  btnStyle={{ width: "200px", marginLeft: "7px" }}
                  onClickHander
                />
              </div>
            </div>
            <div className="clinic-pictures">
              <div className="clinic-pictures-form">
                <span className="btn-left-text">Clinic Pictures</span>
                <label htmlFor="myfile">Select Images</label>
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
