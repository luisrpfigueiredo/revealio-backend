const mongoose = require("mongoose");
const { Schema } = mongoose;

const secretSchema = new Schema({
  link: String,
  value: String,
});

const Secret = mongoose.model("Secret", secretSchema);

module.exports = Secret;
