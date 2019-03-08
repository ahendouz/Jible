const bcrypt = require("bcryptjs");

const createToken = require("../services/createToken");

// Modeles.
const User = require("../models/User");
const Rider = require("../models/Rider");
const Consumer = require("../models/Consumer");

const signup = async (
  { params: { type }, body: { name, email, password } },
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
      seccess: true,
      token: `Bearer ${createToken({ user: newUser })}`
    });
  }
};

module.exports = { signup };