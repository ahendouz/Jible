const User = require("../models/User");

const updateUsersLocation = server => {
  const io = require("socket.io")(server);
  io.on("connection", socket => {
    console.log("You are connected✅ ");
    socket.on("location", async ({ riderId, location }) => {
      console.log("Location of the user is =>", location);
      const user = await User.findOneAndUpdate(
        { _id: riderId },
        { $set: { location: { coordinates: location } } },
        { new: true }
      );
    });
  });
};

module.exports = updateUsersLocation;
