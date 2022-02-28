const router = require('express').Router();
const Shoe = require('../../models/Shoe')

router.get('/', async (req, res) => {
  console.log('am i here')
  try {
    const shoeData = await Shoe.findAll();
    res.status(200).json(shoeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; 