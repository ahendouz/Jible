const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BagSchema = {
  owner: { type: Schema.Types.ObjectId, ref: "users" },
  state: { type: String },
  description: { type: String, required: true },
  items: { type: String, required: true },
  coordinates: { type: Number },
  from: { type: String, required: true },
  to: { type: String, required: true },
  rider: { type: Schema.Types.ObjectId, ref: "users" },
  location: { type: { type: String }, coordinates: [] }
};

module.exports = Bug = mongoose.model("bug", BagSchema);
