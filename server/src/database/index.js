const mongoose = require("mongoose");

// Connecting to our database.
const db = mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("DB is connected ✓"))
  .catch(e => console.error(e));

module.exports = db;
