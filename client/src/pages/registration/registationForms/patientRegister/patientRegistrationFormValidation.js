function patientRegistrationFormValidation(
  patientDOB,
  patientPhone,
  patientWeight,
  patientHeight,
  patientGender,
  patientBloodgroup,
  password,
  confirmPassword
) {
    const errorList = [];
    const currentDate = new Date();
    patientDOB = new Date(patientDOB); // Converts date string to type:Date

    if(patientDOB > currentDate){
        errorList.push("Date of Birth field cannot have a date from the future");
    }
    if(patientPhone.length !== 10){
        errorList.push("Phone number should be of 10 characters");
    }
    if(patientWeight <= 0){
        errorList.push("Weight should be greater than 0");
    }
    if(patientHeight <= 0){
        errorList.push("Height should be greater than 0");
    }
    if(!patientGender){
        errorList.push("Gender field is empty");
    }
    if(!patientBloodgroup){
        errorList.push("Bloodgroup field is empty");
    }
    if(password.length < 8){
        errorList.push("Password should be at least 8 characters long")
    }
    if(password !== confirmPassword){
        errorList.push("Password field and Confirm password field do not match");
    }

    return errorList;
}

export default patientRegistrationFormValidation;