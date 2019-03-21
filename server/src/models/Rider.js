const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const riderSchema = new Schema({
  type: { type: String, default: "rider" },
  method: { type: String, default: "local" },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true, lowercase: true },
  phoneNumber: { type: Number, unique: true },
  password: { type: String },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/ahendouz/image/upload/v1545928173/avatar-.jpg"
  },
  currentSekhras: [{ type: Schema.Types.ObjectId, ref: "sekhras" }],
  isConnected: {
    type: Boolean,
    default: true
  },
  coordinates: [],
  date: { type: Date, default: Date.now }
});

riderSchema.index({ coordinates: "2dsphere" });

// Before saving to DB encrypt the password.
riderSchema.pre("save", function(next) {
  const rider = this;
  // Check if you are wanna auth with fb or normally.
  if (rider.method === "local") {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(rider.password, salt, (err, hash) => {
        if (err) throw err;
        rider.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

module.exports = Rider = mongoose.model("rider", riderSchema);
