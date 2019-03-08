const express = require("express");
const router = express.Router();

// GET - api/profile/test - Test Users Route.
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
