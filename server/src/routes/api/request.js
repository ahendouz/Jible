const express = require("express");
const router = express.Router();
const validateRequestBag = require("../../validation/request_bag");

const isValidLocation = require("../../utils/isValidLocation");
const possibleRoutes = require("../../utils/possibleRoutes");
const getLocation = require("../../utils/getLocation");
const formatShapePoints = require("../../utils/formatShapePoints");
const reduceShapePoints = require("../../utils/reduceShapePoints");

const requireAuth = require("../../utils/requireAuth");
const Bag = require("../../models/Bag");

// GET - api/request/test - Test Request Route.

router.post(
  "/request_bag",
  // requireAuth,
  async ({ body: { description, items, from, to } }, res) => {
    // TODO - Check the validation of description, items, from, to
    const { errors, isValid } = validateRequestBag(
      description,
      items,
      from,
      to
    );
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Check if the location is valid
    if (!(await isValidLocation(from)) || !(await isValidLocation(to))) {
      return res.json({ msg: "please pass a valid  location" });
    }

    // Find all the possible routes
    const data = await possibleRoutes(from, to);

    const ridePrice = `${Math.floor(30 + data.distance * data.distance)} dh`;
    const time = `${data.formattedTime} min`;
    const distance = parseInt(data.distance);

    let shapePoints = formatShapePoints(data.shapePoints);
    if (shapePoints.length > 50) {
      shapePoints = reduceShapePoints(shapePoints);
    }
    console.log("🧠", shapePoints.length);

    return res.json({
      shapePoints: shapePoints,
      ridePrice,
      time,
      distance
    });

    // send to the c some info proce

    // calculate the price of ride according to the hourse and price.
  }
);

router.post("/add_bag", async (req, res) => {
  //  Check the validation of description, items, from, to

  // Check if the location is valid
  if (!(await isValidLocation(from)) || !(await isValidLocation(to))) {
    return res.json({ msg: "please pass a valid  location" });
  }

  // Find all the possible routes
  const data = await possibleRoutes(from, to);

  // get locatoin lat & lag
  const location = await getLocation(from);

  // Assign the bag to the nearest Rider.
  const rider = await Rider.find(
    {
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [location.lat, location.lng]
          }
        }
      }
    },
    { limit: 1 }
  );

  // TODO: Check if the Rider has already a bag.
  // TODO: If yes send a request to the owner of the bag a shared bag reqest.
  // TODO: if he acespt than we assign it to that Rider.
  // TODO: if he doesnt accept we call function Assign the bag to another Rider except the last one.
});

//   // assign lih other bags.
//   // check

//   // TODO - validation ford escription, items, from, to
//   // save a new user.
//   // const newBag = await new Bag({
//   //   owner: { _id: id },
//   //   description,
//   //   items,
//   //   from,
//   //   to
//   // }).save();
//   // return res.json({ newBag });
// }

// TODO - Get owners bug
// Check if any rider acesspt to dilever the bag.
//

// TODO - change the state of the bag from (picked, delivered).

module.exports = router;
