const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const consumerSchema = new Schema({
  type: { type: String, default: "consumer" },
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
  sekhras: [{ type: Schema.Types.ObjectId, ref: "sekhras" }],
  locations: [],
  date: { type: Date, default: Date.now }
});

// Before saving to DB encrypt the password.
consumerSchema.pre("save", function(next) {
  const consumer = this;
  // Check if you are wanna auth with fb or normally.
  if (consumer.method === "local") {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(consumer.password, salt, (err, hash) => {
        if (err) throw err;
        consumer.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

module.exports = Consumer = mongoose.model("consumer", consumerSchema);
