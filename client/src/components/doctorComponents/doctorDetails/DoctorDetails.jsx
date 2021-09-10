import "./doctorDetails.css";
import MainButton from "../../mainButton/MainButton.jsx";

function DoctorDetails({experience, email, phoneNumber,specialization,treatments,consultationFee}) {

  // Write function to reach to doctor chat here
  const onClickHandler = () => {
    console.log("Redirect to chat room session");
  };
  return (
    <div className="added-item doc-details global-box-shadow">
      <div className="doctor-detail-container">
        <div className="experience info-padding">
          <span className="semi-title">Experience:</span>
          <br />
          <span>{experience}</span>
        </div>
        <div className="email info-padding">
          <span className="semi-title">Email:</span>
          <br />
          <span>{email}</span>
        </div>
        <div className="phone-number info-padding">
          <span className="semi-title">Phone number:</span>
          <br />
          <span>{phoneNumber}</span>
        </div>
        <div className="specialization info-padding">
          <span className="semi-title">Specialization:</span>
          <br />
          <span>{specialization}</span>
        </div>
        <div className="treatments custom-info-padding">
          <span className="semi-title">Treatments:</span>
          <br />
          <span>
            {treatments}
          </span>
        </div>
        <div className="chat-btn custom-info-padding">
          <span className="semi-title">
            <MainButton buttonText="Chat Now" onClickHandler={onClickHandler} arrow={false}/>
          </span>
        </div>
        <div className="consultation-fee info-padding">
          <span className="semi-title">Consultation Fee:</span>
          <br />
          <span className="fee">₹ {consultationFee}</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
