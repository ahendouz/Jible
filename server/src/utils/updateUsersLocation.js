const User = require("../models/User");
const Rider = require("../models/Rider");

const updateUsersLocation = server => {
  const io = require("socket.io")(server);
  io.on("connection", socket => {
    console.log("You are connected✅ ");
    socket.on("location", async ({ riderId, location }) => {
      console.log("Location of the user is =>", location);
      // const rider = await Rider.findOneAndUpdate(
      //   { user: { _id: riderId } },
      //   { $set: { location: { coordinates: location } } },
      //   { new: true }
      // );
      // console.log(rider);
    });
  });
};

module.exports = updateUsersLocation;
