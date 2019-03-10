const express = require("express");
const router = express.Router();

const requireAuth = require("../../utils/requireAuth");
const Bag = require("../../models/Bag");

// GET - api/request/test - Test Request Route.

// TODO - change the state of the bag from (picked, delivered).
router.post(
  "/request_bag",
  requireAuth,
  async ({ user: { id }, body: { description, items, from, to } }, res) => {
    console.log("🧩🚎");
    // save a new user.
    const newBag = await new Bag({
      owner: { _id: id },
      description,
      items,
      from,
      to
    }).save();
    return res.json({ newBag });
  }
);

module.exports = router;
