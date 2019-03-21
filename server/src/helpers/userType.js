const Rider = require("../models/Rider");
const Consumer = require("../models/Consumer");

const userType = type => {
  if (type === process.env.RIDER) {
    return Rider;
  } else if (type === process.env.CONSUMER) {
    return Consumer;
  } else {
    return false;
  }
};

module.exports = userType;
