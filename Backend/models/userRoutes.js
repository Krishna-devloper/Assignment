const express = require('express');
const router = express.Router();
const User = require('../models/User');
const History = require('../models/History');

router.get('/users', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
});

router.post('/users', async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.json(newUser);
});

router.post('/claim/:userId', async (req, res) => {
  const { userId } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  user.totalPoints += randomPoints;
  await user.save();

  const history = new History({ userId, points: randomPoints });
  await history.save();

  res.json({ user, points: randomPoints });
});

router.get('/history', async (req, res) => {
  const history = await History.find().populate('userId');
  res.json(history);
});

module.exports = router;