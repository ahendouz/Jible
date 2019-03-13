const express = require("express");
const router = express.Router();

const isValidLocation = require("../../utils/isValidLocation");
const requireAuth = require("../../utils/requireAuth");
const getLocation = require("../../utils/getLocation");
const Location = require("../../models/Location");

router.post(
  "/save_address",
  requireAuth,
  async ({ body: { address } }, res) => {
    console.log("🍑🧠😁💕💩🦖", address);
    if (!(await isValidLocation(address))) {
      return res.json({ msg: "please pass a valid address" });
    }

    // save to the db
    // const location = await new Location({
    //   address
    // });

    // const getLoca = await getLocation(address);

    return res.status(200).json({ address });
  }
);
// res.vonnection.server = server

router.post("/users_location", requireAuth, async (req, res) => {
  return res.json(req.body);
});

console.log(router);
// const server = require("http").Server(app);
// const io = require("socket.io")(server);

// io.on("connection", socket => {
//   console.log("connected is🙄is🙄is🙄is🙄is🙄is🙄 happened ");
//   socket.on("location", data => {
//     console.log(data);
//   });
// });

module.exports = router;
