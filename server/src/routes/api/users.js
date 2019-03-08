const express = require("express");
const router = express.Router();

const { signup } = require("../../authentication");

// GET - api/users/test - Test Users Route.
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

router.post("/signup/:type", signup);

module.exports = router;
