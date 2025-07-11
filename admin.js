const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

router.post('/register', async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.json({ message: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Admin registration failed' });
  }
});

module.exports = router;