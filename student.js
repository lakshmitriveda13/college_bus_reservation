const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.post('/register', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
});

module.exports = router;