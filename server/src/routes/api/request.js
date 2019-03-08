const express = require("express");
const router = express.Router();

// GET - api/request/test - Test Request Route.
router.get("/test", (req, res) => res.json({ msg: "Request Works" }));

module.exports = router;
