const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const middleware = Router();

middleware.use(bodyParser.urlencoded({ extended: false }));
middleware.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
middleware.use(cors());

module.exports = middleware;
