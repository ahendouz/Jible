const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  type: { type: String, required: true },
  method: { type: String, enum: ["local", "facebook"], default: "local" },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true, lowercase: true },
  password: { type: String },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/ahendouz/image/upload/v1545928173/avatar-.jpg"
  },
  date: { type: Date, default: Date.now }
});
module.exports = User = mongoose.model("users", userSchema);
