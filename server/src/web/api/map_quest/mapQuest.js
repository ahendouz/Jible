const axios = require("axios");

module.exports = axios.create({
  baseURL: "https://www.mapquestapi.com",
  params: {
    key: process.env.MAPQUEST_KEY
  }
});
