// server.js
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Get the database instance
    const db = client.db(); // Use the default database specified in the URI
    console.log('Connected to database:', db.databaseName);

    // List collections in the database
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections.map(col => col.name));
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});