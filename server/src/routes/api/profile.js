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
  async ({ user: { id }, body: { name, email, password, avatar } }, res) => {
    const { errors, isValid } = validateProfile(name, email, password);
    console.log("🧩😘", errors);
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
          avatar
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

module.exports = router;
