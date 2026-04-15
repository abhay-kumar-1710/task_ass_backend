const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUserController(req, res) {
  try {
    const { username, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
}

async function loginUserController(req, res) {
 
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,       
      sameSite: "none",    
      path: "/",           
    });

    res.json({
      message: "Login success",
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
}

async function getCurrentUser(req, res) {
  try {
    const user = await userModel.findById(req.user.id).select("-password");

    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user" });
  }
}

async function getUserCount(req, res) {
  try {
    const count = await userModel.countDocuments({ role: "user" });
    res.json({ count });
  } catch {
    res.status(500).json({ message: "Error" });
  }
}

async function logoutUserController(req, res) {
  try {
   res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    res.json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Logout failed" });
  }
}

module.exports = {
  registerUserController,
  loginUserController,
  getCurrentUser,
  getUserCount,
  logoutUserController,
};
