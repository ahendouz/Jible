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
const Rider = require("../../models/Rider");

// GET - api/request/test - Test Request Route.

router.post(
  "/request_bag",
  // requireAuth,
  async ({ body: { description, items, from, to } }, res) => {
    // Check the validation of description, items, from, to
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
      success: true,
      shapePoints: shapePoints,
      ridePrice,
      time,
      distance
    });

    // send to the c some info proce

    // calculate the price of ride according to the hourse and price.
  }
);

router.post("/add_bag", async ({ body: { from, to } }, res) => {
  // Find all the possible routes
  // const data = await possibleRoutes(from, to);

  // get locatoin lat & lag
  const location = await getLocation(from);

  // Find the nearest rider to the bag.
  const rider = await Rider.find(
    {
      coordinates: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [location.lat, location.lng]
          }
        }
      }
    },
    { limit: 1 }
  ).select("bags");

  console.log("🚙🚙🚙🚙🚙", rider[0].bags);

  // This should be a function that will be called each time we want to assign A bag to a rider.
  // Check if the Rider has already a bag.
  if (rider[0].bags.length > 0) {
    // The rider already has a bag, Send a shared bag reqest to the bag's owner.
    // send a request bag share to the owners of the bag.
    // if they reject than we assign the bag to another rider.
    // assign it to a rider that does not have any bag
    // If they accept of 3min pass we assign it to this rider
    // Assign the bag to him. + Add the bag
  } else {
    // The rider doesnt have any bag
    // Check if the rider is active of nah.
    // Assign the bag to him. + Add the bag
  }

  return res.json({ from });
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
