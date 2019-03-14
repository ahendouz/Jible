const axios = require("axios");

const isValidLocation = async location => {
  const response = await axios.get(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${
      process.env.MAP_SECRET
    }&location=${location}`
  );
  // console.log("🦖", response.data.results[0].locations[0].latLng);
  const isValid =
    response.data.results[0].locations[0].geocodeQualityCode.split("X")
      .length <= 2;
  return isValid;
};

module.exports = isValidLocation;
