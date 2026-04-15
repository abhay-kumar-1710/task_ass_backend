const express = require("express");
const controller = require("../controllers/trainer.controller");

const router = express.Router();

router.post("/", controller.createTrainer);
router.get("/", controller.getTrainers);

module.exports = router;
