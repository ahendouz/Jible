const {
  BAD_REQUEST,
  UNPROCESSABLE_ENTITY
} = require("../constants/httpstatuses");
const bcrypt = require("bcryptjs");

const comparePassword = async (password1, password2) => {
  if (password2) {
    const isValidPassword = await bcrypt.compare(password1, password2);
    if (!isValidPassword) {
      // Password is invalid.
      return {
        done: false,
        msg: "Password is invalid",
        statusCode: UNPROCESSABLE_ENTITY
      };
    }
  } else {
    return {
      done: false,
      msg: "Please signin with facebook.",
      statusCode: BAD_REQUEST
    };
  }
  return { done: true };
};

module.exports = comparePassword;
