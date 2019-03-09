const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportService = require("../../services/passport");

const { signup, signin, facebookOAuth } = require("../../authentication");

const requireFbAuth = passport.authenticate("facebookToken", {
  session: false
});

// GET - api/users/test - Test Users Route.
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// POST - api/users/signup/:type - Signup user (Rider / Consumer)
router.post("/signup/:type", signup);

// POST - api/users/signin/:type - Signin user
router.post("/signin", signin);

// POST - api/users/oauth/facebook/:type - Authorize user via facebook.
router.post("/oauth/facebook/:type", requireFbAuth, facebookOAuth);

module.exports = router;
