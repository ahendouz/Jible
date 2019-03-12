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

module.exports = router;
