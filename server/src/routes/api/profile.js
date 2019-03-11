const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const requireAuth = require("../../utils/requireAuth");

const validateProfile = require("../../validation/profile");

// GET - api/profile/test - Test Users Route.
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// POST = PRIVATE = api/porfile/edit_profile - edit user's profile.
router.post(
  "/edit_profile",
  requireAuth,
  async (
    { user: { id }, body: { name, email, password, avatar, number } },
    res
  ) => {
    // TODO: CHECK IF THE METHOD IS FB OR LOCAL
    const { errors, isValid } = validateProfile(name, email, password);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err;
        // Hashong the new version
        password = hash;

        const profileFields = {
          name,
          email,
          password,
          avatar,
          number
        };
        const user = await User.findOneAndUpdate(
          { _id: id },
          { $set: profileFields },
          { new: true }
        );
        res.status(200).json({ msg: "Your profile is updated" });
      });
    });
  }
);

router.get("/user/:user_id", async ({ params: { user_id: _id } }, res) => {
  // find user by it's id.
  try {
    const user = await User.findOne({ _id });
    if (user) {
      return res.status(200).json({ user });
    }
  } catch (err) {
    return res.json({ msg: "User not fround" });
  }
});

module.exports = router;
