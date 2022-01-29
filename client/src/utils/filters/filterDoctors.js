import distanceBetweenGeoPoints from "../functions/GeoDistance.js";

function withinFee(feeValue, doctorFee) {
  return doctorFee <= feeValue[1] && doctorFee >= feeValue[0];
}

function hasSpecialization(filterSpecialization, doctorSpecialization) {
  if (filterSpecialization.length === 0) {
    return true;
  }
  for (let i = 0; i < filterSpecialization.length; i++) {
    if (!doctorSpecialization.includes(filterSpecialization[i])) {
      return false;
    }
  }
  return true;
}

function hasTreatment(filterTreatment, doctorTreatment) {
  if (filterTreatment.length === 0) {
    return true;
  }
  for (let i = 0; i < filterTreatment.length; i++) {
    if (!doctorTreatment.includes(filterTreatment[i])) {
      return false;
    }
  }
  return true;
}

function filterDoctors(
  currentUser,
  currentUserData,
  searchDoctor,
  doctorList,
  location,
  feeValue,
  specializations,
  treatments,
  SortBy
) {
  const doctorCount = doctorList.length;
  const filteredList = [];

  for (let i = 0; i < doctorCount; i++) {
    const filterDoc = doctorList[i];
    if (
      !searchDoctor === "" ||
      !filterDoc.clinicAddress.toLowerCase().includes(location.toLowerCase()) ||
      !filterDoc.doctorName
        .toLowerCase()
        .includes(searchDoctor.toLowerCase()) ||
      !withinFee(feeValue, filterDoc.consultationFee) ||
      !hasSpecialization(specializations, filterDoc.specialization) ||
      !hasTreatment(treatments, filterDoc.treatments)
    ) {
      continue;
    }
    filteredList.push(filterDoc);
  }

  if (SortBy === "Lowest") {
    filteredList.sort(function (first, second) {
      return first.consultationFee - second.consultationFee;
    });
  }

  if (SortBy === "Nearest" && currentUser) {
    const userLatitude = currentUserData.geoLocation._lat;
    const userLongitude = currentUserData.geoLocation._lat;

    filteredList.sort((first, second) => {
      return (
        distanceBetweenGeoPoints(
          userLatitude,
          userLongitude,
          first.geoLocation._lat,
          first.geoLocation._long,
          "N"
        ) -
        distanceBetweenGeoPoints(
          userLatitude,
          userLongitude,
          second.geoLocation._lat,
          second.geoLocation._long,
          "N"
        )
      );
    });
  }

  return filteredList;
}

export default filterDoctors;
