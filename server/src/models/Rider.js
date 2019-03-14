const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const riderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  isConnected: {
    type: Boolean,
    default: true
  },
  bags: [{ type: Schema.Types.ObjectId, ref: "bags" }],
  coordinates: []
});

riderSchema.index({ coordinates: "2dsphere" });
module.exports = Rider = mongoose.model("rider", riderSchema);
