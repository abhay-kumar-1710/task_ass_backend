const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: String,
  role: String,
  expertise: String,
  experience: String,
  description: String,
  photo: String,
});

module.exports = mongoose.model("Trainer", trainerSchema);
