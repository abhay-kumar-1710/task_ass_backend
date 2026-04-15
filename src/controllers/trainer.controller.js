const Trainer = require("../models/trainer.model");

async function createTrainer(req, res) {
  const trainer = await Trainer.create(req.body);
  res.json(trainer);
}

async function getTrainers(req, res) {
  const trainers = await Trainer.find();
  res.json(trainers);
}

module.exports = {
  createTrainer,
  getTrainers,
};
