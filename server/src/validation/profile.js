const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateProfile(name, email) {
  let errors = {};

  name = !isEmpty(name) ? name : "";
  email = !isEmpty(email) ? email : "";

  if (!Validator.isLength(name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(name)) {
    errors.name = "Name field is required";
  }
  if (!Validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(email)) {
    errors.email = "Email field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
