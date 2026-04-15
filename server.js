require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

// DB connect
connectDB();

app.get("/", (req, res) => {
  res.send("Training Institute API Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
