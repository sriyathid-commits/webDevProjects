const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  role: String,
  salary: Number,
  dateJoined: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
