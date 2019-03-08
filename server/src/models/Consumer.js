const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const consumerSchema = new Schema({
  user: { type: Schema.Types, ref: "users" }
});
module.exports = Consumer = mongoose.model("consumer", consumerSchema);
