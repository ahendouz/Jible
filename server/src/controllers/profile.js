const {
  SUCCESS,
  NOT_FOUND,
  FORBIDDEN,
  BAD_REQUEST
} = require("../constants/httpstatuses");
const findType = require("../helpers/findType");
const userType = require("../helpers/userType");
const validateProfile = require("../validation/profile");
const isValidLocation = require("../web/api/map_quest/isValidLocation");
const getLocation = require("../web/api/map_quest/getLocation");
const Rider = require("../models/Rider");
const Consumer = require("../models/Consumer");

// Edit user's information.
const editProfile = async (
  { user: { id, type }, body: { name, email, password, avatar, phoneNumber } },
  res
) => {
  // Find the type of the user.
  const User = userType(type);

  const { errors, isValid } = validateProfile(name, email);
  // Validation.
  if (!isValid) {
    return res.status(BAD_REQUEST).json(errors);
  }

  const profileFields = {
    name,
    email,
    avatar,
    phoneNumber
  };
  const user = await User.findOneAndUpdate(
    { _id: id },
    { $set: profileFields },
    { new: true }
  );
  res.status(200).json({ msg: "Your profile is updated" });
};

// Get user's information.
const getUser = async ({ params: { _id } }, res) => {
  // Find the type of the user.
  const user = await findType(undefined, _id);
  if (user) {
    return res.status(SUCCESS).json({ user });
  }
  return res.status(NOT_FOUND).json({ msg: "User not fround" });
};

// Change the status of the rider from connected to desconected.
const changeStatus = async ({ user: { id }, body: { status } }, res) => {
  const rider = await Rider.findOneAndUpdate(
    { _id: id },
    { $set: { isConnected: status } },
    { new: true }
  );
  if (!rider) {
    return res.status(FORBIDDEN).json({ msg: "Not a rider" });
  }

  return res.status(SUCCESS).json(rider.isConnected);
};

// Get the status of a rider connected to desconected.
const getStatus = async ({ user: { id } }, res) => {
  const rider = await Rider.findOne({ _id: id });
  return res.status(SUCCESS).json(rider.isConnected);
};

// Add location.
const addLocation = async ({ user: { id }, body: { address } }, res) => {
  if (!(await isValidLocation(address))) {
    return res.status(BAD_REQUEST).json({ msg: "please pass a valid address" });
  }
  // address = await getLocation(address);

  const user = await Consumer.findOneAndUpdate(
    { _id: id },
    { $push: { locations: [address] } },
    { $new: true }
  );
  console.log(user);

  return res.status(SUCCESS).json(user);
};

// Get locations of the user.
const getLocations = async ({ user: { id } }, res) => {
  const user = await Consumer.findOne({ _id: id });
  res.status(SUCCESS).res(user.locations);
};

module.exports = {
  editProfile,
  getUser,
  changeStatus,
  getStatus,
  addLocation,
  getLocations
};
