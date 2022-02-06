import "./doctorDetails.css";
import MainButton from "../../mainButton/MainButton.jsx";
import { useHistory } from "react-router-dom";

import { db } from "../../../firebase.js";
import {
  setDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";

import { useAuth } from "../../../utils/contexts/AuthContext.js";

function DoctorDetails({
  experience,
  email,
  phoneNumber,
  specialization,
  treatments,
  consultationFee,
  docUID,
}) {
  const { currentUser } = useAuth();
  const history = useHistory();

  const onClickHandler = async () => {
    // Creates a firebase collection and redirecting it to the sessions page
    const userUID = currentUser.uid;

    // Creating chat instance for logged in user in firebase
    await setDoc(
      doc(db, "chattingWith", userUID),
      { users: arrayUnion(docUID) },
      { merge: true }
    );

    // Creating chat instance for targeted user in firebase
    await setDoc(
      doc(db, "chattingWith",docUID ),
      { users: arrayUnion(userUID) },
      { merge: true }
    );
    history.push("/sessions");
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
          <span>{specialization.join(", ")}</span>
        </div>
        <div className="treatments custom-info-padding">
          <span className="semi-title">Treatments:</span>
          <br />
          <span>{treatments.join(", ")}</span>
        </div>
        <div className="chat-btn custom-info-padding">
          <span className="semi-title">
            <MainButton
              buttonText="Chat Now"
              onClickHandler={onClickHandler}
              arrow={false}
            />
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
