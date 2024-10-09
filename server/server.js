// server.js

// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Create an Express application
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database connected successfully');
  console.log(`Connected to database: ${mongoose.connection.name}`);
})
.catch(err => {
  console.error('Database connection error:', err);
  process.exit(1); // Exit the process with failure
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});