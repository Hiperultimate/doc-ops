import "./contactInfo.css";
import DisplayMap from "../../displayMap/DisplayMap.jsx";

function ContactInfo({
  contactDOB,
  contactEmail,
  contactPhone,
  contactAddress,
  contactAddressMap,
}) {
  return (
    <div className="contact-grid global-box-shadow">
      <div className="contact-grid-area">
        <div className="contact-info-container">
          <div className="contact-single-field">
            <span className="info-sub-head">Date of Birth:</span>
            <span className="info-res">{contactDOB}</span>
          </div>
          <div className="contact-single-field">
            <span className="info-sub-head">Email:</span>
            <span className="info-res">{contactEmail}</span>
          </div>
          <div className="contact-single-field">
            <span className="info-sub-head">Phone Number:</span>
            <span className="info-res">{contactPhone}</span>
          </div>
          <div className="contact-single-field">
            <span className="info-sub-head">Address:</span>
            <span className="info-res">{contactAddress}</span>
          </div>
        </div>
      </div>
      <div className="map-grid-area">
        <DisplayMap
          addressLatLong={contactAddressMap}
          mapBorderRadius={"0px 10px 10px 0px"}
        />
      </div>
    </div>
  );
}

export default ContactInfo;
