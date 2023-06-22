const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "Please add userName"] },
    email: {
      type: String,
      required: [true, "Please add unique E-mail"],
      unique: [true, "email address allready taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user Password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
