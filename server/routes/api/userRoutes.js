const router = require('express').Router();

const User = require('../../models/UserModel')

router.get('/', async (req, res) => {
  console.log('am i here')
  try {
    const userData = await User.findAll();
    console.log(userData)
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; 