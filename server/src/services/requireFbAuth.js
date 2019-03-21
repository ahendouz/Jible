const passport = require("passport");

const requireFbAuth = passport.authenticate("facebookToken", {
  session: false
});

module.exports = requireFbAuth;
