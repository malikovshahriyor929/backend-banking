const { Schema, model } = require("mongoose");

const UserModel = new Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("User", UserModel);
