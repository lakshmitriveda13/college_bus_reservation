const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollno: String,
  name: String,
  dept: String,
  location: String,
  password: String,
});

module.exports = mongoose.model('Student', studentSchema);