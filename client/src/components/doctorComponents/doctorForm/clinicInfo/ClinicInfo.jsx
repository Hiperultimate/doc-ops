import "./clinicInfo.css";
import InputField from "../../../inputField/InputField.jsx";
import MainButton from "../../../mainButton/MainButton.jsx";

function ClinicInfo() {
  return (
    <div className="clinic-info global-box-shadow">
      <InputField
        wrapperClass={"input-dimention"}
        heading={"Name"}
        placeholder={"Enter clinic's name"}
        type={"text"}
        fieldName={"clinic-name"}
      />
      <InputField
        wrapperClass={"input-dimention"}
        heading={"Address"}
        placeholder={"Enter address"}
        type={"text"}
        fieldName={"clinic-address"}
      />
      <InputField
        wrapperClass={"input-dimention"}
        heading={"Consultation Fee"}
        placeholder={"Enter consultation fee"}
        type={"text"}
        fieldName={"consultation-fee"}
      />
      <InputField
        wrapperClass={"input-dimention"}
        heading={"Online Consultation"}
        placeholder={"This will be a drop down field"}
        type={"text"}
        fieldName={"online-consultation"}
      />
      <InputField
        wrapperClass={"input-dimention"}
        heading={"Treatments Offered"}
        placeholder={"this will be a multi select field"}
        type={"text"}
        fieldName={"doctor-treatments"}
      />
      <InputField
        wrapperClass={"input-dimention"}
        heading={"Specializations"}
        placeholder={"this will be a multi select field"}
        type={"text"}
        fieldName={"doctor-specializations"}
      />
      <div className="opening-hours">
        <span className="btn-left-text">Opening Hours</span>
        <MainButton
          buttonText="Enter Opening Hours"
          arrow={true}
          onClickHander
        />
      </div>
      <div className="opening-hours">
        <span className="btn-left-text">Clinic Pictures</span>
        {/* <MainButton buttonText="Upload" onClickHander /> */}
        <label htmlFor="myfile">Select Images</label> 
        <input type="file" className="file-input" id="myfile" name="myfile"/>
      </div>
    </div>
  );
}

export default ClinicInfo;
