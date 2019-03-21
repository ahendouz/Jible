const mapQuest = require("./mapQuest");

const isValidLocation = async location => {
  const response = await mapQuest.get("/geocoding/v1/address", {
    params: {
      location
    }
  });

  // If there's more than one X than the location is not valid
  const isValid =
    response.data.results[0].locations[0].geocodeQualityCode.split("X")
      .length <= 2;

  // isValid = true || false
  return isValid;
};

module.exports = isValidLocation;
