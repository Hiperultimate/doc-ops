import "./clinicInfo.css";
import InputField from "../../../inputField/InputField.jsx";
import MainButton from "../../../mainButton/MainButton.jsx";
import DisplayMap from "../../../displayMap/DisplayMap.jsx";

function ClinicInfo() {
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
                fieldName={"clinic-name"}
              />
            </div>
            <div className="clinic-address">
              <InputField
                wrapperClass={"input-dimention"}
                heading={"Address"}
                placeholder={"Enter address"}
                type={"text"}
                fieldName={"clinic-address"}
              />
            </div>
            <div className="clinic-consultation-fee">
              <InputField
                wrapperClass={"input-dimention"}
                heading={"Consultation Fee"}
                placeholder={"Enter consultation fee"}
                type={"text"}
                fieldName={"consultation-fee"}
              />
            </div>
            <div className="clinic-online-consultation">
              <InputField
                wrapperClass={"input-dimention"}
                heading={"Online Consultation"}
                placeholder={"This will be a drop down field"}
                type={"text"}
                fieldName={"online-consultation"}
              />
            </div>
            <div className="clinic-treatments-offered">
              <InputField
                wrapperClass={"input-dimention"}
                heading={"Treatments Offered"}
                placeholder={"this will be a multi select field"}
                type={"text"}
                fieldName={"doctor-treatments"}
              />
            </div>
            <div className="clinic-specialization">
              <InputField
                wrapperClass={"input-dimention"}
                heading={"Specializations"}
                placeholder={"this will be a multi select field"}
                type={"text"}
                fieldName={"doctor-specializations"}
              />
            </div>
            <div className="clinic-opening-hours">
              <div className="opening-hours-form">
                <span className="btn-left-text">Opening Hours</span>
                <MainButton
                  buttonText="Enter Opening Hours"
                  arrow={true}
                  btnStyle={{ width: "200px" , marginLeft: "7px"}}
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
