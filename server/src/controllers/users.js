const createToken = require("../services/createToken");
const validateSignin = require("../validation/signin");
const validateSignup = require("../validation/signup");
const userType = require("../helpers/userType");
const findType = require("../helpers/findType");
const comparePassword = require("../helpers/comparePassword");
const {
  BAD_REQUEST,
  CONFLICT,
  SUCCESS,
  UNPROCESSABLE_ENTITY,
  FORBIDDEN
} = require("../constants/httpstatuses");

// Sign up.
const signup = async (
  { params: { type }, body: { name, email, password, phoneNumber } },
  res
) => {
  // Validation.
  const { errors, isValid } = validateSignup(name, email, password);
  if (!isValid) {
    return res.status(BAD_REQUEST).json(errors);
  }

  // Check the type of the user either a rider or a consumer.
  let User = userType(type);

  // If the type is not "rider" or a "consumer".
  if (!User) {
    return res.status(FORBIDDEN).json({ msg: "Not a valid user type" });
  }

  const user = await User.findOne({ email });
  // Check our db if we already have a user with that email.
  if (user) {
    return res.status(CONFLICT).json({ msg: "Email already exists" });
  } else {
    // Save the new user to the database.
    const newUser = await new User({
      name,
      email,
      password,
      phoneNumber
    }).save();
    // Return token.
    return res.status(SUCCESS).json({
      token: `Bearer ${createToken({ user: newUser })}`
    });
  }
};

// Sign in
const signin = async ({ body: { email, password } }, res) => {
  // Validation.
  const { errors, isValid } = validateSignin(email, password);
  if (!isValid) {
    return res.status(BAD_REQUEST).json({ errors });
  }

  // Find the type of the user.
  const user = await findType(email, undefined);
  // There's no user.
  if (!user) {
    return res.status(CONFLICT).json({ msg: "Email not found" });
  }

  // Compear password.
  const { done, msg, statusCode } = await comparePassword(
    (password1 = password),
    (password2 = user.password)
  );

  // Something went wrong.
  if (!done) {
    return res.status(statusCode).json({ msg: msg });
  }

  // Respond with a token.
  return res.send({
    token: `Bearer ${createToken({ user })}`
  });
};

// Auth via facebook.
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
  // Check the type of the user either a rider or a consumer.
  let User = userType(type);

  // If the type is not "rider" or a "consumer".
  if (!User) {
    return res.status(FORBIDDEN).json({ msg: "Not a valid user type" });
  }

  const user = await User.findOne({ email });
  // if there's a user sign the user in
  if (user) {
    return res.send({
      token: `Bearer ${createToken({ user })}`
    });
  }

  // if there's no user with that email, create new user.
  const newUser = await new User({
    method: "facebook",
    name,
    email,
    avatar: value.value
  }).save();
  return res.send({
    token: `Bearer ${createToken({ user: newUser })}`
  });
};

module.exports = { signup, signin, facebookOAuth };
