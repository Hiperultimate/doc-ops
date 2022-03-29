import "./closeSessionBox.css";
import CrossBgSvg from "../../../../svgs/cross-bg.svg";

import { useEffect, useState } from "react";

import {
  doc,
  collection,
  orderBy,
  query,
  getDocs,
  limit,
  setDoc,
  arrayUnion,
  updateDoc,
  deleteDoc,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../../../firebase.js";

function CloseSessionBox({
  closeSessionPassState,
  closeSessionDiagnosisState,
  closeSessionCommentsState,
  prescriptionList,
  currentUserUID,
  selectedUserUID,
}) {
  const { closeSessionState, setCloseSessionState } = closeSessionPassState;
  const { closeSessionDiagnosis, setCloseSessionDiagnosis } =
    closeSessionDiagnosisState;
  const { closeSessionComments, setCloseSessionComments } =
    closeSessionCommentsState;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  // Takes in prescriptionList and accesses its objects
  const databaseDateToStringDate = (dbObj) => {
    let medicineFromDate = new Date(
      dbObj.prescriptionDetails.medicineDurationFrom.seconds * 1000
    );
    let medicineToDate = new Date(
      dbObj.prescriptionDetails.medicineDurationTo.seconds * 1000
    );
    let displayDate =
      medicineFromDate.getDate().toString() +
      " " +
      intToDate[medicineFromDate.getMonth() + 1] +
      " - " +
      medicineToDate.getDate().toString() +
      " " +
      intToDate[medicineToDate.getMonth() + 1]; // getMonth uses 0 based index, so we use +1

    return displayDate;
  };

  const closeSession = async (e) => {
    e.preventDefault();

    // Adds medical information to user profile only if prescription list is there.
    if(prescriptionList.length !== 0) {
      const storeData = {};
      storeData.DiseaseName = closeSessionDiagnosis;
      storeData.Comments = closeSessionComments;
      storeData.CureTimeTaken = `${startDate} - ${endDate}`;
      storeData.Medication = []; // list of medicine objects
      prescriptionList.map((prescriptionData) => {
        let displayDate = databaseDateToStringDate(prescriptionData);
        let medicineObj = {};
        medicineObj["medicineName"] =
          prescriptionData.prescriptionDetails.medicineName;
        medicineObj["medicineFrequency"] =
          prescriptionData.prescriptionDetails.medicineFrequency;
        medicineObj["medicineDuration"] = displayDate;
        storeData.Medication.push(medicineObj);
      });
      let saveObj = {};
      saveObj["medicalHistory"] = [storeData];
  
      await setDoc(
        doc(db, "users", selectedUserUID),
        { medicalHistory: arrayUnion(storeData) },
        { merge: true }
      );
    }

    // Delete chattingWith currentUserUID and selectedUserUID then reload page

    // Deleting chattingWith collection data
    // For selectedUserUID
    const selectedUserChattingWithRef = doc(db, "chattingWith",selectedUserUID);
    await updateDoc(selectedUserChattingWithRef, {
      unreadMessage: arrayRemove(currentUserUID),
      users: arrayRemove(currentUserUID),
    });
  
    // // For currentUserUID
    const currenUserChattingWithRef = doc(db, "chattingWith",currentUserUID);
    await updateDoc(currenUserChattingWithRef, {
      unreadMessage: arrayRemove(selectedUserUID),
      users: arrayRemove(selectedUserUID),
    });
  
    // Deleting every document inside sessions/chatRoomString/chat and sessions/chatRoomString/prescription
    const chatRoomString =
      currentUserUID > selectedUserUID
        ? `${currentUserUID + selectedUserUID}`
        : `${selectedUserUID + currentUserUID}`;
    
    const chatSnapshot = await getDocs(collection(db, "sessions",chatRoomString, "chat"));
    chatSnapshot.forEach(async (chatDoc) => {
      const chatDocumentInstance = doc(db, "sessions",chatRoomString, "chat", chatDoc.id);
      await deleteDoc(chatDocumentInstance);
    });

    const prescriptionSnapshot = await getDocs(collection(db, "sessions",chatRoomString, "prescription"));
    prescriptionSnapshot.forEach(async (presDoc) => {
      const chatDocumentInstance = doc(db, "sessions",chatRoomString, "prescription", presDoc.id);
      await deleteDoc(chatDocumentInstance);
    });

    window.location.reload(false);
  };

  const getChatCreatedDate = async () => {
    const chatRoomString =
      currentUserUID > selectedUserUID
        ? `${currentUserUID + selectedUserUID}`
        : `${selectedUserUID + currentUserUID}`;

    // Fetching chat messages
    const chatRoomRef = collection(db, "sessions", chatRoomString, "chat");
    const q = query(chatRoomRef, orderBy("createdAt", "asc"), limit(1));

    const getFirstCreatedDate = await getDocs(q);
    getFirstCreatedDate.forEach((doc) => {
      let startfullYear = new Date(
        doc.data().createdAt.seconds * 1000
      ).getFullYear();
      let startfullDate = new Date(
        doc.data().createdAt.seconds * 1000
      ).getDate();
      let startmonth =
        intToDate[new Date(doc.data().createdAt.seconds * 1000).getMonth()];
      setStartDate(`${startfullDate} ${startmonth}, ${startfullYear}`);
      setEndDate(
        `${new Date().getDate()} ${
          intToDate[new Date().getMonth()]
        }, ${new Date().getFullYear()}`
      );
    });

    return null;
  };

  // Initializes date on page load
  useEffect(() => {
    getChatCreatedDate();
  }, [selectedUserUID]);

  return (
    closeSessionState && (
      <>
        <form onSubmit={closeSession}>
          <div className="back-drop" />
          <div className="close-session-box">
            <img
              onClick={() => setCloseSessionState(false)}
              className="close-session-svg"
              src={CrossBgSvg}
              alt="cross-btn-svg"
            />
            <div className="close-session-grid">
              <div className="diagnosis-text">Diagnosis:</div>
              <div className="comments-text">Comments:</div>
              <div className="medication-text">Medication:</div>
              <div className="comment-input-container">
                <input
                  onChange={(e) =>
                    handleInputChange(e, setCloseSessionComments)
                  }
                  value={closeSessionComments}
                  className="close-session-input"
                  type="text"
                  placeholder="Additional notes..."
                  required
                />
              </div>
              <div className="diagnosis-input-container">
                <input
                  onChange={(e) =>
                    handleInputChange(e, setCloseSessionDiagnosis)
                  }
                  value={closeSessionDiagnosis}
                  className="close-session-input"
                  type="text"
                  placeholder="Enter diagnosis..."
                  required
                />
              </div>
              <div className="end-date-text">
                {startDate} - {endDate}
              </div>
              <div className="medication-list">
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Frequency</th>
                      <th>Amount</th>
                      <th>Duration</th>
                    </tr>
                    {prescriptionList !== null &&
                      prescriptionList.map((prescriptionObj, index) => {
                        let displayDate =
                          databaseDateToStringDate(prescriptionObj);
                        return (
                          <tr key={index}>
                            <td>
                              {prescriptionObj.prescriptionDetails.medicineName}
                            </td>
                            <td>
                              {
                                prescriptionObj.prescriptionDetails
                                  .medicineFrequency
                              }
                            </td>
                            <td>
                              {
                                prescriptionObj.prescriptionDetails
                                  .medicineAmount
                              }
                            </td>
                            <td>{displayDate}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="close-without-diagnosis-btn">
                <button
                  onClick={() => setCloseSessionState(false)}
                  className="global-box-shadow diagnosis-btn-right"
                >
                  Close Session Without Diagnosis
                </button>
              </div>
              <div className="session-close-btn">
                <button type="submit" className="global-box-shadow">
                  Close Session
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    )
  );
}

export default CloseSessionBox;
