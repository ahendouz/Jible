import mongoose from "mongoose";
require("dotenv").config();

// Connecting to our database.
const db = mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("DB is connected ✓"))
  .catch(e => console.error(e));

export default db;
