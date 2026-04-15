const express = require("express");
const {
  registerUserController,
  loginUserController,
  getCurrentUser,
  getUserCount,
  logoutUserController,
} = require("../controllers/auth.controller");
const { authUser } = require("../middlewares/auth.middleware");
const {isAdmin} = require("../middlewares/admin.middleware"); 

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.post("/logout", logoutUserController);

router.get("/me", authUser, getCurrentUser);


router.get("/users/count", authUser, isAdmin, getUserCount);

module.exports = router;
