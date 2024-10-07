const express = require('express');
const router = express.Router();
const { Property } = require('../models');

// Get all properties
router.get('/', async (req, res) => {
  const properties = await Property.findAll();
  res.json(properties);
});

// Get property by address
router.get('/:address', async (req, res) => {
  const property = await Property.findOne({ where: { propertyAddress: req.params.address } });
  if (property) {
    res.json(property);
  } else {
    res.status(404).send('Property not found');
  }
});

// Add more routes as needed...

module.exports = router;