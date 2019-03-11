const axios = require("axios");

const possibleRoutes = async (from, to) => {
  const response = await axios.get(
    `http://www.mapquestapi.com/directions/v2/alternateroutes?key=${
      process.env.MAP_SECRET
    }&from=${from}&to=${to}&maxRoutes=5&generalize=500`
  );
  const {
    distance,
    formattedTime,
    shape: { shapePoints },
    shape,
    alternateRoutes
  } = response.data.route;
  return { distance, formattedTime, shapePoints, alternateRoutes };
};

module.exports = possibleRoutes;
