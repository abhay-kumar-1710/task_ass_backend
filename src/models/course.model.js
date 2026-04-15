const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  duration: String,
  fees: Number,
  description: String,
  thumbnail: String, 
  videoUrl: String, 
});

module.exports = mongoose.model("Course", courseSchema);
