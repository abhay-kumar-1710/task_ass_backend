const express = require("express");
const controller = require("../controllers/inquiry.controller");
const { authUser } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");

const router = express.Router();


router.post("/",  controller.createInquiry);
router.get("/", authUser, isAdmin, controller.getInquiries);

module.exports = router;
