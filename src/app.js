const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(
  cors({
    origin: "https://dancing-snickerdoodle-fbb37b.netlify.app", 
    credentials: true,
  }),
);

// Routes
const authRoutes = require("./routes/auth.routes");
const courseRoutes = require("./routes/course.routes");
const trainerRoutes = require("./routes/trainer.routes");
const inquiryRoutes = require("./routes/inquiry.routes");

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/inquiries", inquiryRoutes);

module.exports = app;
