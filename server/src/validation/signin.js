const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateSignin = (email, password) => {
  let errors = {};

  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";

  if (!Validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateSignin;
