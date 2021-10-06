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
  const errorList = {
    patientDOB: [],
    patientPhone: [],
    patientWeight: [],
    patientHeight: [],
    patientGender: [],
    patientBloodgroup: [],
    password: [],
    confirmPassword: [],
  };

  const currentDate = new Date();
  patientDOB = new Date(patientDOB); // Converts date string to type:Date

  if (patientDOB > currentDate) {
    errorList.patientDOB.push("Date of Birth field cannot have a date from the future");
  }
  if (patientPhone.length !== 10) {
    errorList.patientPhone.push("Phone number should be of 10 characters");
  }
  if (patientWeight <= 0) {
    errorList.patientWeight.push("Weight field should contain a positive number");
  }
  if (patientHeight <= 0) {
    errorList.patientHeight.push("Height field should contain a positive number");
  }
  if (!patientGender) {
    errorList.patientGender.push("Gender field is required");
  }
  if (!patientBloodgroup) {
    errorList.patientBloodgroup.push("Bloodgroup field is required");
  }
  if (password.length < 8) {
    errorList.password.push("Password should be at least 8 characters long");
  }
  if (password !== confirmPassword) {
    errorList.confirmPassword.push("Password field and Confirm password field do not match");
  }

  return errorList;
}

export default patientRegistrationFormValidation;
