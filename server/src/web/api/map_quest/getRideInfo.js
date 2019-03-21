const mapQuest = require("./mapQuest");

const getRideInfo = async (from, to) => {
  const response = await mapQuest.get("/directions/v2/alternateroutes", {
    params: {
      from,
      to
    }
  });

  // Information.
  const {
    distance,
    formattedTime,
    shape: { shapePoints },
    shape,
    alternateRoutes
  } = response.data.route;

  return { distance, formattedTime, shapePoints, alternateRoutes };
};

module.exports = getRideInfo;
