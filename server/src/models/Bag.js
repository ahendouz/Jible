const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BagSchema = {
  owner: { type: Schema.Types.ObjectId, ref: "users" },
  state: { type: String, default: "Waiting someone to pick" },
  description: { type: String, required: true },
  items: [{ type: String, required: true }],
  from: [],
  to: [],
  rider: { type: Schema.Types.ObjectId, ref: "users" }
};

module.exports = Bag = mongoose.model("bags", BagSchema);
