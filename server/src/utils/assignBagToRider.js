const Bag = require("../models/Bag");
const Rider = require("../models/Rider");

const io = require("../index");

const assign = async (bagId, riderId) => {
  // Assign the bag to him.
  const rider = await Rider.findOneAndUpdate(
    { riderId },
    { $push: { bags: { _id: bagId } } },
    { new: true }
  );
  // Add the rider id to the bag
  const bag = await Bag.findOneAndUpdate(
    { _id: bagId },
    { $set: { rider: { _id: riderId } } },
    { new: true }
  );
};

const assignBagToRider = async (
  bagOwner,
  fromCoordinates,
  toCoordinates,
  description,
  items,
  server
) => {
  // Find the nearest rider to the bag.
  const rider = await Rider.find(
    {
      coordinates: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [fromCoordinates.lat, fromCoordinates.lng]
          }
        }
      }
    },
    { limit: 1 }
  ).select("bags isConnected");

  const { _id, isConnected, bags } = rider[0];

  // Add new bag.
  const bag = await new Bag({
    owner: { _id: bagOwner.id },
    description,
    items,
    from: [fromCoordinates.lat, fromCoordinates.lng],
    to: [toCoordinates.lat, toCoordinates.lng]
  }).save();

  const { _id: bagId } = bag;
  // This should be a function that will be called each time we want to assign A bag to a rider.
  // Check if the Rider has already a bag.
  if (bags.length > 0 && isConnected) {
    // The rider already has a bag, Send a shared bag reqest to the bag's owner.
    // send a request bag share to the owners of the bag.
    // if they reject than we assign the bag to another rider.
    // assign it to a rider that does not have any bag
    // If they accept of 3min pass we assign it to this rider
    // Assign the bag to him. + Add the bag
    assign(bagId, rider._id);
  } else {
    // The rider doesnt have any bag
    // Check if the rider is active of nah.
    if (isConnected) {
      // send to the rider new assignment request.
      assign(bagId, rider._id);
    }
  }
};

module.exports = assignBagToRider;
