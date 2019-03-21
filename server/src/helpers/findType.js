const Rider = require("../models/Rider");
const Consumer = require("../models/Consumer");

const findType = async (email, id) => {
  let rider, consumer;
  // Find the user.
  if (email) {
    rider = await Rider.findOne({ email });
    consumer = await Consumer.findOne({ email });
  }
  if (id) {
    rider = await Rider.findById({ _id: id });
    consumer = await Consumer.findById({ _id: id });
  }

  if (rider) {
    return rider;
  } else if (consumer) {
    return consumer;
  } else {
    // If there is no user.
    return false;
  }
};

module.exports = findType;
