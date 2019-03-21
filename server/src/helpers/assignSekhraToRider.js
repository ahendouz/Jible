const addNewSekhra = require("../helpers/addNewSekhra");

const assignSekhraToRider = async (
  from,
  to,
  items,
  description,
  cost,
  duration,
  distance,
  ownerID
) => {
  //   1. Find the nearest rider to the sekhra.
  const rider = await Rider.find(
    {
      coordinates: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: from
          }
        }
      }
    },
    { limit: 1 }
  ).select("currentSekhras isConnected");
  console.log(rider);

  const [{ _id: riderID, isConnected, currentSekhras }] = rider;
  const sekhra = await addNewSekhra(
    from,
    to,
    items,
    description,
    cost,
    duration,
    distance,
    riderID,
    ownerID
  );
  return sekhra;

  // The algorithm that chooses a rider.
  //   if (isConnected) {
  // Check if the Rider has already a sekhra.
  //     if (currentSekhras.length < 1) {
  //       // The rider doesnt have any sekhra
  //       // Add the sekhra + Assign this sekhra to the rider.
  //       const sekhra = await addNewSekhra(
  //         from,
  //         to,
  //         items,
  //         description,
  //         cost,
  //         duration,
  //         distance,
  //         riderID,
  //         owner
  //       );
  //       return sekhra;
  //     } else {
  //       // The rider already has a sekhra, Send a shared sekhra reqest to the sekhra's owner.
  //       // TODO: send a request sekhra share to the owners of the sekhra.
  //       //   if (accept || 3min pass) {
  //       //   } else {
  //       // TODO: if they reject than we assign the sekhra to another rider.
  //       // assignSekhraToRider (fromCoordinates, toCoordinates)
  //       //   }
  //     }
  //   }
};

module.exports = assignSekhraToRider;
