const express = require("express");
require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");

// The routes.
const users = require("./routes/api/users");
const request = require("./routes/api/request");
const profile = require("./routes/api/profile");

const app = express();

// Middlewares.
app.use(require("./middleware"));

// Connecting to our database.
const db = require("./database");
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 4000;
// Use our routes.
app.use("/api/users", users);

app.listen(port, () => console.log(`Server is running on port ${port} 🚀🚀🚀`));
