const express = require("express");
const router = express.Router();

const requireAuth = require("../../services/requireAuth");
const {
  editProfile,
  getUser,
  changeStatus,
  addLocation,
  getLocations,
  getStatus
} = require("../../controllers/profile");

// GET - api/profile/test - Test Users Route.
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// POST => PRIVATE <= api/porfile/edit_profile - edit user's profile.
router.post("/edit_profile", requireAuth, editProfile);

// GET - api/profile/:user_id - get user information.
router.get("/user/:_id", getUser);

// POST => PRIVATE <= - api/profile/change_status - change the state of the rider from connected to desconected.
router.post("/change_status", requireAuth, changeStatus);

// GET => PRIVATE <= - api/profile/get_status - get the status of the rider.
router.get("/get_status", requireAuth, getStatus);

// POST => PRIVATE <= - api/profile/add_location - add a location
router.post("/add_location", requireAuth, addLocation);

// GET => PRIVATE <= - api/profile/get_locations - get a locations of the user.
router.post("/get_locations", requireAuth, getLocations);

module.exports = router;
