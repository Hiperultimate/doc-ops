function withinFee(feeValue, doctorFee){
    if(doctorFee <= feeValue[1] && doctorFee >= feeValue[0]){
        return true;
    } else {
        return false;
    }
}

function hasSpecialization(filterSpecialization, doctorSpecialization){
    if(filterSpecialization.length === 0){
        return true;
    }
    for(let i = 0 ; i < filterSpecialization.length ; i++ ){
        if(!doctorSpecialization.includes(filterSpecialization[i])){
            return false;
        };
    }
    return true;
}

function hasTreatment(filterTreatment, doctorTreatment){
    if(filterTreatment.length === 0){
        return true;
    }
    for(let i = 0 ; i < filterTreatment.length ; i++ ){
        if(!doctorTreatment.includes(filterTreatment[i])){
            return false;
        };
    }
    return true;
}

function filterDoctors(
  doctorList,
  location,
  feeValue,
  specializations,
  treatments,
) {
    const doctorCount = doctorList.length;
    const filteredList = [];

    for(let i = 0 ; i < doctorCount; i++) {
        const filterDoc = doctorList[i];
        if(!withinFee(feeValue, filterDoc.consultationFee)){
            continue;
        }
        if(!hasSpecialization(specializations,filterDoc.specialization)){
            continue;
        }
        if(!hasTreatment(treatments, filterDoc.treatments)){
            continue;
        }
        filteredList.push(filterDoc);
    }

    return filteredList;
}

export default filterDoctors;
