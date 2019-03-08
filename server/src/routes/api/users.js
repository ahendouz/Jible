const express = require("express");
const router = express.Router();

const { signup, signin } = require("../../authentication");

// GET - api/users/test - Test Users Route.
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// POST - api/users/signup/:type - Signup user (Rider / Consumer)
router.post("/signup/:type", signup);

// POST - api/users/signin/:type - Signin user
router.post("/signin", signin);

module.exports = router;
