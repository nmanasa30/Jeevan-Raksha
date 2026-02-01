const mongoose = require("mongoose");



const RequestSchema = new mongoose.Schema({
  name: String,
  phone: String,
  issue: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Request", RequestSchema);