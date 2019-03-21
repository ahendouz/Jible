const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require("passport-facebook-token");

const findType = require("../helpers/findType");

// Set up Options for Jwt strategy.
const jwtOpts = {};
jwtOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOpts.secretOrKey = process.env.SECRET;

// Create our jwt strategy.
passport.use(
  "jwt",
  new JwtStrategy(jwtOpts, async (jwt_payload, done) => {
    const { _id } = await jwt_payload;
    // Find user type
    const user = await findType(undefined, _id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  })
);

// Facebook strategy.
passport.use(
  "facebookToken",
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const {
        _json: { name, email }
      } = profile;
      try {
        done(null, profile);
      } catch (err) {
        done(err, false, err.message);
      }
    }
  )
);
