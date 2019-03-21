const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sekhraSchema = {
  from: { type: [Number], maxlength: 2 },
  to: { type: [Number], maxlength: 2 },
  items: [{ type: String, required: true }],
  description: { type: String, required: true },
  status: { type: String, default: "pending" },
  cost: { type: String },
  duration: {
    type: String
  },
  distance: {
    type: String
  },
  rider: { type: Schema.Types.ObjectId, ref: "rider" },
  owner: { type: Schema.Types.ObjectId, ref: "consumer" }
};

module.exports = Sekhra = mongoose.model("sekhra", sekhraSchema);
