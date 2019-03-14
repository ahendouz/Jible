const express = require("express");
const router = express.Router();
const validateRequestBag = require("../../validation/request_bag");

const isValidLocation = require("../../utils/isValidLocation");
const possibleRoutes = require("../../utils/possibleRoutes");
const getLocation = require("../../utils/getLocation");
const formatShapePoints = require("../../utils/formatShapePoints");
const reduceShapePoints = require("../../utils/reduceShapePoints");
const assignBagToRider = require("../../utils/assignBagToRider");

const requireAuth = require("../../utils/requireAuth");
const Bag = require("../../models/Bag");
const Rider = require("../../models/Rider");

// GET - api/request/test - Test Request Route.

router.post(
  "/request_bag",
  // requireAuth,
  async ({ socket, body: { description, items, from, to } }, res) => {
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
    // console.log("🧠", shapePoints.length);

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

router.post(
  "/add_bag",
  requireAuth,
  async (
    { connection, user: bagOwner, body: { from, to, description, items } },
    res
  ) => {
    // get locatoin lat & lag
    const fromCoordinates = await getLocation(from);
    const toCoordinates = await getLocation(to);

    assignBagToRider(
      bagOwner,
      fromCoordinates,
      toCoordinates,
      description,
      items,
      connection.server
    );

    return res.json({ from });
    // TODO: if he doesnt accept we call function Assign the bag to another Rider except the last one.
  }
);

// TODO - change the state of the bag from (picked, delivered).

module.exports = router;
