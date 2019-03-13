const express = require("express");
require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");

// The routes.
const users = require("./routes/api/users");
const request = require("./routes/api/request");
const profile = require("./routes/api/profile");
const location = require("./routes/api/location");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

// Middlewares.
app.use(require("./middleware"));

// Connecting to our database.
const db = require("./database");
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const port = process.env.PORT || 4000;
// Use our routes.
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/request", request);
app.use("/api/location", location);

server.listen(port, () =>
  console.log(`Server is running on port ${port} 🚀🚀🚀`)
);

const updateUsersLocation = require("./utils/updateUsersLocation");

updateUsersLocation(server);
