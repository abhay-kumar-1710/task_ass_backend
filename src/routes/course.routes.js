const express = require("express");
const controller = require("../controllers/course.controller");
const { authUser } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");
const upload = require("../middlewares/upload.middleware");

const router = express.Router();

// PUBLIC
router.get("/", controller.getCourses);

// ADMIN ONLY
router.post(
  "/",
  authUser,
  isAdmin,
  upload.single("thumbnail"),
  controller.createCourse,
);
router.put("/:id", authUser, isAdmin, upload.single("thumbnail"), controller.updateCourse);
router.delete("/:id", authUser, isAdmin, controller.deleteCourse);

module.exports = router;
