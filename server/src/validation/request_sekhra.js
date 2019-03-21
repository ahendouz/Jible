const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateRequestSekhra = (description, items, from, to) => {
  let errors = {};

  description = !isEmpty(description) ? description : "";
  items = !isEmpty(items) ? items : "";
  from = !isEmpty(from) ? from : "";
  to = !isEmpty(to) ? to : "";

  if (Validator.isEmpty(description)) {
    errors.description = "description field is required";
  }

  if (Validator.isEmpty(items)) {
    errors.items = "Items field is required";
  }

  if (Validator.isEmpty(from)) {
    errors.from = "from field is required";
  }

  if (Validator.isEmpty(to)) {
    errors.to = "to field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateRequestSekhra;
