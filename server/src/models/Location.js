const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  address: { type: String, required: true }
});

module.exports = Rider = mongoose.model("location ", locationSchema);
