const Course = require("../models/course.model");

async function createCourse(req, res) {
  try {
    const { title, duration, fees, description, videoUrl } = req.body;

    const thumbnail = req.file?.path; 

    const course = await Course.create({
      title,
      duration,
      fees,
      description,
      videoUrl,
      thumbnail,
    });

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Error creating course" });
  }
}

async function getCourses(req, res) {
  const courses = await Course.find();
  res.json(courses);
}

async function updateCourse(req, res) {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.thumbnail = req.file.path;
    }

    const course = await Course.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed" });
  }
}

async function deleteCourse(req, res) {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
}

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};
