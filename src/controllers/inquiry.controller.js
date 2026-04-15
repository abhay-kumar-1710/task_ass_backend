const Inquiry = require("../models/inquiry.model");

async function createInquiry(req, res) {
  const inquiry = await Inquiry.create(req.body);
  res.json({ message: "Inquiry submitted", inquiry });
}

async function getInquiries(req, res) {
  const inquiries = await Inquiry.find();
  res.json(inquiries);
}

module.exports = {
  createInquiry,
  getInquiries,
};
