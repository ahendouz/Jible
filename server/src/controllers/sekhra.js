const validateRequestSekhra = require("../validation/request_sekhra");
const isValidLocation = require("../web/api/map_quest/isValidLocation");
const getRideInfo = require("../web/api/map_quest/getRideInfo");
const getLocation = require("../web/api/map_quest/getLocation");
const formatTime = require("../helpers/formatTime");
const assignSekhraToRider = require("../helpers/assignSekhraToRider");
const { SUCCESS } = require("../constants/httpstatuses");

const Consumer = require("../models/Consumer");

// Request a sekhra.
const requistSekhra = async (
  { body: { description, items, from, to } },
  res
) => {
  // Check the validation of description, items, from, to
  const { errors, isValid } = validateRequestSekhra(
    description,
    items,
    from,
    to
  );
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check if the location is valid.
  if (!(await isValidLocation(from)) || !(await isValidLocation(to))) {
    return res.json({ msg: "please pass a valid location" });
  }

  // Find all the possible routes.
  const rideInfo = await getRideInfo(from, to);

  from = await getLocation(from);
  to = await getLocation(to);

  // TODO => convert it to a valid time.
  const ridePrice = `${Math.floor(
    30 + rideInfo.distance * rideInfo.distance
  )}dh`;
  const time = formatTime(rideInfo.formattedTime);
  const distance = parseInt(rideInfo.distance);

  return res.json({
    from,
    to,
    ridePrice,
    time,
    distance
  });
};

// Add a skhra, this is will happen after the user reqistSekhra.
const addSekhra = async (
  {
    user: { id: ownerID },
    body: { from, to, description, items, cost, duration, distance }
  },
  res
) => {
  from = await getLocation(from);
  to = await getLocation(to);
  console.log("💩💩💩💩💩💩💩", duration);

  await assignSekhraToRider(
    from,
    to,
    items,
    description,
    cost,
    duration,
    distance,
    ownerID
  );

  return res.status(SUCCESS).json({ msg: "success" });
};

// Requist consumer's sekhras.
const mySekhras = async ({ user: { id: consumerID } }, res) => {
  const mySekhras = await Sekhra.find({
    owner: { _id: consumerID }
  }).populate("rider", ["name", "phoneNumber", "avatar"]);

  return res.status(SUCCESS).json({ mySekhras });
};

// Rider Sekhras TODO
const sekhraTodo = async ({ user: { id: riderID } }, res) => {
  const sekhraTodo = await Sekhra.find({
    rider: { _id: riderID }
  }).populate("owner", ["name", "phoneNumber", "avatar"]);

  return res.status(SUCCESS).json(sekhraTodo);
};

module.exports = { requistSekhra, addSekhra, mySekhras, sekhraTodo };
