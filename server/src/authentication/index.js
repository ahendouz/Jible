const bcrypt = require("bcryptjs");

const createToken = require("../services/createToken");
const validateSignin = require("../validation/signin");
const validateSignup = require("../validation/signup");

// Modeles.
const User = require("../models/User");
const Rider = require("../models/Rider");
const Consumer = require("../models/Consumer");

const signup = async (
  { params: { type }, body: { name, email, password } },
  res
) => {
  const { errors, isValid } = validateSignup(name, email, password);

  // Validation.
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Profile = Rider || Consumer.
  let Profile;

  type === "rider"
    ? (Profile = Rider)
    : type === "consumer"
    ? (Profile = Consumer)
    : res.status(403).json({ msg: "Not a valid user type" });

  const user = await User.findOne({ email });

  // Check our db if we already have a user with that email.
  if (user) {
    return res.json({ msg: "Email already exists" });
  } else {
    // Save the new user to the database.
    const newUser = await new User({
      type,
      name,
      email,
      password
    }).save();

    // Save a new (Robio or Customer) profile.
    const newProfile = await new Profile({ user: { _id: newUser.id } }).save();
    // Return token.
    return res.status(200).json({
      token: `Bearer ${createToken({ user: newUser })}`
    });
  }
};

const signin = async ({ body: { email, password } }, res) => {
  // Validation.
  const { errors, isValid } = validateSignin(email, password);
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  // Find the user.
  const user = await User.findOne({ email });

  // If there is no user.
  if (!user) {
    return res.status(422).json("Email not found");
  }

  // Compear password.
  if (user.password) {
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      // Password is invalid.
      return res.status(422).json("Password is invalid");
    }
  } else {
    return res.status(400).json({ msg: "Please signin with facebook." });
  }

  // Respond with a token.
  return res.send({
    token: `Bearer ${createToken({ user })}`
  });
};

const facebookOAuth = async (
  {
    user: {
      _json: { name, email },
      photos: [value]
    },
    params: { type }
  },
  res
) => {
  // Profile = Rider || Consumer.
  let Profile;

  type === "rider"
    ? (Profile = Rider)
    : type === "consumer"
    ? (Profile = Consumer)
    : res.status(403).json({ msg: "Not a valid user type" });

  const user = await User.findOne({ email });
  if (user) {
    return res.send({
      token: `Bearer ${createToken({ user })}`
    });
  }
  const newUser = await new User({
    method: "facebook",
    type,
    name,
    email,
    avatar: value.value
  }).save();
  const newProfile = await new Profile({ user: { _id: newUser.id } }).save();
  return res.send({
    token: `Bearer ${createToken({ user: newUser })}`
  });
};

module.exports = { signup, signin, facebookOAuth };
