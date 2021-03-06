import "./doctorClinicDetails.css";
import DisplayMap from "../../displayMap/DisplayMap.jsx";
import CheckSvg from "../../../svgs/check.svg";
import CrossSvg from "../../../svgs/cross.svg";
import LocationSvg from "../../../svgs/map-pin.svg";

function DoctorClinicDetails({
  clinicName,
  clinicAddress,
  onlineConsultation,
  openingHours,
  addressLatLong,
}) {
  return (
    <div className="clinic-details global-box-shadow added-item">
      <div className="doctor-components-grid">
        <div className="clinic-details-grid">
          <div className="clinic-part">
            <div className="clinic-name">
              <span className="bold">Clinic:</span>
              <br />
              <span className="actual-clinic-name">{clinicName}</span>
            </div>
            <div className="clinic-address">
              <img
                src={LocationSvg}
                style={{ position: "relative", bottom: "-6px", left: "-2px" }}
                alt="location-icon"
              />
              {clinicAddress}
            </div>
            <div className="online-consultation">
              <span className="bold">Online Consultation:</span>
              {onlineConsultation ? (
                <img
                  src={CheckSvg}
                  style={{ marginLeft: "4px" }}
                  className="align-check-cross"
                  alt="check-icon"
                />
              ) : (
                <img
                  src={CrossSvg}
                  style={{ marginLeft: "4px" }}
                  className="align-check-cross"
                  alt="cross-icon"
                />
              )}
            </div>
            <div className="opening-hours">
              <span className="bold">Opening Hours:</span>
              <br />
              {openingHours}
            </div>
          </div>
        </div>
        <div className="display-full-map">
          <DisplayMap
            addressLatLong={addressLatLong}
            mapBorderRadius={"0 10px 10px 0"}
          />
        </div>
      </div>
    </div>
  );
}

export default DoctorClinicDetails;
