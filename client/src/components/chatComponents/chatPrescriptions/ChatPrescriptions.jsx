import "./chatPrescriptions.css";
import PlusSvg from "../../../svgs/plus.svg";
import MedicineBox from "../../../svgs/medicine-box.svg";
import PrescriptionCard from "./prescriptionCard/PrescriptionCard.jsx";

import { useEffect, useState } from "react";

import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase.js";

const DisplayType = Object.freeze({
  DOCTOR: 1,
  PATIENT: 2,
});

function ChatPrescriptions({
  displayType,
  setCloseSessionState,
  setAddPrescriptionState,
  prescriptionList,
  currentUserUID,
  selectedUserUID,
  setPrescriptionList
}) {
  // Dummy data
  let fetchPrescriptionData = [
    {
      medicineName: "Painkiller 2",
      frequency: "1 Cup / 50ml",
      quantity: "Once a day",
      duration: "31 Sep - 5 Oct",
      id: 1,
    },
    {
      medicineName: "Afro Maker",
      frequency: "5 Tablets",
      quantity: "Once a day",
      duration: "31 Sep - 5 Oct",
      id: 2,
    },
    {
      medicineName: "Sleep Medicine",
      frequency: "3 Cups with 200ml Water",
      quantity: "Twice a day",
      duration: "31 Sep - 5 Oct",
      id: 3,
    },
  ];

  const [prescriptionData, setPrescriptionData] = useState([]);

  useEffect(()=> {
    const chatRoomString =
      currentUserUID > selectedUserUID
        ? `${currentUserUID + selectedUserUID}`
        : `${selectedUserUID + currentUserUID}`;
    
    // Note : This block of code does not create a collection in firebase.
    // Fetches existing prescription data for selected chat user for live data showcase.
    const prescriptionRef = collection(
      db,
      "sessions",
      chatRoomString,
      "prescription"
      );
    const q2 = query(prescriptionRef, orderBy("createdAt", "asc"));
      
    const unSubscribe = onSnapshot(q2, (querySnapshot) => {
      let tempPrescription = [];
      querySnapshot.forEach((doc) => {
        let prescriptionData = doc.data();
        prescriptionData.prescriptionDetails["id"] = doc.id;
        tempPrescription.push(prescriptionData);
      });
      setPrescriptionList(tempPrescription);
    });

    return () => {unSubscribe()}
  }, [selectedUserUID, currentUserUID])
  
  // Formatting Prescription Data before displaying
  useEffect(() => {
    const intToDate = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sept",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };

    if(prescriptionList.length === 0){
      setPrescriptionData([]);
    }else{
      let prescriptionDataList = [];
      for (let i = 0; i < prescriptionList.length; i++) {
        let prescriptionObject = {};
        let medicineFromDate = new Date(
          prescriptionList[i].prescriptionDetails.medicineDurationFrom.seconds *
            1000
        );
        let medicineToDate = new Date(
          prescriptionList[i].prescriptionDetails.medicineDurationTo.seconds *
            1000
        );
        let displayDate =
          medicineFromDate.getDate().toString() +
          " " +
          intToDate[medicineFromDate.getMonth() + 1] +
          " - " +
          medicineToDate.getDate().toString() +
          " " +
          intToDate[medicineToDate.getMonth() + 1]; // getMonth uses 0 based index, so we use +1
        prescriptionObject["medicineName"] = prescriptionList[i].prescriptionDetails.medicineName;
        prescriptionObject["frequency"] = prescriptionList[i].prescriptionDetails.medicineFrequency;
        prescriptionObject["quantity"] = prescriptionList[i].prescriptionDetails.medicineAmount;
        prescriptionObject["duration"] = displayDate;
        prescriptionObject["durationFrom"] = medicineFromDate;
        prescriptionObject["durationTo"] = medicineToDate;
        prescriptionObject["id"] = prescriptionList[i].prescriptionDetails.id;
        prescriptionDataList.push(prescriptionObject);
      }
      setPrescriptionData(prescriptionDataList);
    }

  }, [prescriptionList]);

  // create edit prescription data 
  return (
    <div>
      <div className="prescription-heading-container">
        <span className="prescription-heading">Prescriptions</span>
        <span className="prescription-line-seperator" />
      </div>
      <div className="prescription-container">
        {prescriptionData.length === 0 ? (
          <div className="empty-prescription-list">
            <img src={MedicineBox} alt="medicine-box-svg" />
            {displayType === DisplayType.DOCTOR ? (
              <span>Add Prescription</span>
            ) : (
              <span>Empty prescription list</span>
            )}
          </div>
        ) : (
          prescriptionData.map((prescription) => {
            return (
              <PrescriptionCard
                medicineName={prescription.medicineName}
                frequency={prescription.frequency}
                quantity={prescription.quantity}
                displayDuration={prescription.duration}
                durationFrom={prescription.durationFrom}
                durationTo={prescription.durationTo}
                displayType={displayType}
                currentUserUID={currentUserUID}
                selectedUserUID={selectedUserUID}
                prescriptionID={prescription.id}  // Firebase collection id to select data
                key={prescription.id} // React key
              />
            );
          })
        )}
      </div>
      {displayType === DisplayType.DOCTOR && selectedUserUID !== null && (
        <div className="session-option-container">
          <span className="session-line-seperator" />

          <div className="chat-options">
            <button
              onClick={() => setCloseSessionState(true)}
              className="close-session-btn global-box-shadow"
            >
              <span>Close Session</span>
            </button>
            <button
              onClick={() => setAddPrescriptionState(true)}
              className="add-prescription-btn global-box-shadow"
            >
              <img className="plus-icon-svg" src={PlusSvg} alt="plus-svg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatPrescriptions;
