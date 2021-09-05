import "./doctorDetails.css";
import MainButton from "../../mainButton/MainButton.jsx";

function DoctorDetails() {
  const onClickHandler = () => {
    console.log("henlo");
  };
  return (
    <div className="added-item doc-details global-box-shadow">
      <div className="doctor-detail-container">
        <div className="experience info-padding">
          <span className="semi-title">Experience:</span>
          <br />
          <span>1+ Years</span>
        </div>
        <div className="email info-padding">
          <span className="semi-title">Email:</span>
          <br />
          <span>alanokovTheDoctor@gmail.com</span>
        </div>
        <div className="phone-number info-padding">
          <span className="semi-title">Phone number:</span>
          <br />
          <span>981273591</span>
        </div>
        <div className="specialization info-padding">
          <span className="semi-title">Specialization:</span>
          <br />
          <span>Surgeries, Anesthetics, Valorant, Punjabi</span>
        </div>
        <div className="treatments info-padding">
          <span className="semi-title">Treatments:</span>
          <br />
          <span>
            Wisdom tooth removal, Plaq Cleaning, Ear Destroyer, Stomach Remover.
          </span>
        </div>
        <div className="chat-btn info-padding">
          <span className="semi-title">
            <MainButton buttonText="Chat Now" onClickHandler={onClickHandler} />
          </span>
        </div>
        <div className="consultation-fee info-padding">
          <span className="semi-title">Consultation Fee:</span>
          <br />
          <span className="fee">Rs. 500</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
