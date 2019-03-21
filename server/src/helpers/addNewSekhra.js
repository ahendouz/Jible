const Sekhra = require("../models/Sekhra");
const Rider = require("../models/Rider");

// Add new bag.
const addNewSekhra = async (
  from,
  to,
  items,
  description,
  cost,
  duration,
  distance,
  riderID,
  ownerID
) => {
  const sekhra = await new Sekhra({
    from,
    to,
    items,
    description,
    status: "picked",
    cost,
    duration,
    distance,
    rider: riderID,
    owner: ownerID
  }).save();
  //  Assign the bag to him.
  const rider = await Rider.findOneAndUpdate(
    { _id: riderID },
    { $push: { currentSekhras: { _id: sekhra.id } } },
    { new: true }
  );
  const owner = await Consumer.findOneAndUpdate(
    { _id: ownerID },
    { $push: { sekhras: { _id: sekhra.id } } },
    { new: true }
  );
  return { sekhra, rider, owner };
};

module.exports = addNewSekhra;
