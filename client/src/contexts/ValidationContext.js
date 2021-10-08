function ValidationContext(schema, inputFields) {
  if (schema !== undefined && inputFields !== undefined) {
    const errorList = {};
    Object.keys(inputFields).forEach((key) => {
      errorList[key] = [];
      schema[key].forEach((partSchema) => {
        switch (partSchema.split(" ")[0]) {
          case "required":
            if (inputFields[key].length === 0) {
              errorList[key].push("This field is required");
            }
            break;
          case "integer":
            if (!/^\d+$/.test(inputFields[key])) {
              errorList[key].push("This field must contain numbers only");
            }
            break;
          case "email":
            const checkEmailRegex =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!checkEmailRegex.test(inputFields[key])) {
              errorList[key].push("Input needs to be an email");
            }
            break;
          case "BeforeCurrentDate":
            const currentDate = new Date();
            const inputDate = new Date(inputFields[key]);
            if (inputDate > currentDate) {
              errorList[key].push(
                "This field cannot have a date from the future"
              );
            }
            break;
          case "lengthEqual":
            const toLen = Number(partSchema.split(" ").at(-1));
            if (inputFields[key].length !== toLen) {
              errorList[key].push(
                `This field should be ${toLen} character long`
              );
            }
            break;
          case ">":
            const greaterThan = Number(partSchema.split(" ").at(-1));
            if (inputFields[key] <= greaterThan) {
              errorList[key].push(
                `Value should be greater than ${greaterThan}`
              );
            }
            break;
          case "<=":
            const lessThanEqual = Number(partSchema.split(" ").at(-1));
            if (inputFields[key].length < lessThanEqual) {
              errorList[key].push(
                `This field should contain characters greater than or equal to ${lessThanEqual}`
              );
            }
            break;
          case "matchPassword":
            if (inputFields["password"] !== inputFields["confirmPassword"]) {
              errorList[key].push("Passwords do not match");
            }
            break;
          default:
        }
      });
    });
    return errorList;
  }
}

export default ValidationContext;
