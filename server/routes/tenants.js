const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant'); // Assuming Tenant is a Mongoose model

// Get tenant by key and value
router.get('/tenant/:key/:value', async (req, res) => {
  const key = req.params.key;
  const value = req.params.value;

  // Check if the key is valid
  if (!Tenant.schema.path(key)) {
    return res.status(400).send('Invalid key');
  }

  // Find the tenant
  const tenant = await Tenant.findOne({ [key]: value });

  if (tenant) {
    res.json(tenant);
  } else {
    res.status(404).send('Tenant not found');
  }
});

module.exports = router;