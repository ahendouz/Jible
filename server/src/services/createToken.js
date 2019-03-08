const jwt = require("jsonwebtoken");

const createToken = ({ user: { _id } }) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: 3600 * 24 * 7 });
};

module.exports = createToken;
