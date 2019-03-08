const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require("passport-facebook-token");

const User = require("../models/User");

// Set up Options for Jwt strategy.
const jwtOpts = {};
jwtOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOpts.secretOrKey = process.env.SECRET;

// Create our jwt strategy.
passport.use(
  "jwt",
  new JwtStrategy(jwtOpts, async (jwt_payload, done) => {
    const { _id } = jwt_payload;

    // Check if the user id in the payload exists in our database.
    const user = await User.findById({ _id });
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  })
);
