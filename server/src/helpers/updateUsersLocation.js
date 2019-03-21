const Rider = require("../models/Rider");

const updateUsersLocation = server => {
  const io = require("socket.io")(server);
  io.on("connection", socket => {
    console.log("You are connected✅ ");
    socket.on("location", async ({ riderId, location }) => {
      socket.emit("test", "hello");
      // console.log("Location of the user is =>", location, riderId);
      const rider = await Rider.findOneAndUpdate(
        { _id: riderId },
        { $set: { coordinates: location } },
        { new: true }
      );
    });
  });
};

module.exports = updateUsersLocation;