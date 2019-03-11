const axios = require("axios");

const getLocation = async locationOfBag => {
  const response = await axios.get(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${
      process.env.MAP_SECRET
    }&location=${locationOfBag}`
  );
  const location = response.data.results[0].locations[0].latLng;
  return location;
};

module.exports = getLocation;
