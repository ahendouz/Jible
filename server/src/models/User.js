const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  type: { type: String, required: true },
  method: { type: String, enum: ["local", "facebook"], default: "local" },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true, lowercase: true },
  number: { type: Number, unique: true },
  password: { type: String },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/ahendouz/image/upload/v1545928173/avatar-.jpg"
  },
  isConnected: {
    type: Boolean,
    default: true
  },
  location: { type: { type: String }, coordinates: [] },
  date: { type: Date, default: Date.now }
});

// Before saving to DB encrypt the password.
userSchema.pre("save", function(next) {
  const users = this;
  // Check if you are wanna auth with fb or normally.
  if (users.method === "local") {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(users.password, salt, (err, hash) => {
        if (err) throw err;
        users.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

module.exports = User = mongoose.model("users", userSchema);
