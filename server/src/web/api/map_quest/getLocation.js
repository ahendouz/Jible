const mapQuest = require("./mapQuest");

const getLocation = async location => {
  const response = await mapQuest.get("/geocoding/v1/address", {
    params: { location: location }
  });
  const { lat, lng } = response.data.results[0].locations[0].latLng;
  return [lat, lng];
};

module.exports = getLocation;
