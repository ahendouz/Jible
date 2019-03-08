const { Router } = require("express");
const bodyParser = require("body-parser");

const middleware = Router();

middleware.use(bodyParser.urlencoded({ extended: false }));
middleware.use(bodyParser.json());

module.exports = middleware;
