import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from './models/Property.js'; // Import the Property model

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000 // 45 seconds
})
  .then(async () => {
    console.log('Database connected successfully');
    await Property.createIndexes(); // Ensure indexes are created
    console.log('Indexes created successfully');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});