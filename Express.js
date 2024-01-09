const express = require('express');
const mongodb = require('mongodb');
const app = express();
const MongoClient = mongodb.MongoClient;

const mongoURI = "mongodb+srv://ejballer7282:<password>@cluster0.0ibxytm.mongodb.net/?retryWrites=true&w=majority"; // Update with your MongoDB connection string
const dbName = 'database1_name'; // Update with your database name

MongoClient.connect(mongoURI, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  const db = client.db(dbName);

  // Define endpoint to handle job applications
  app.post('/apply', express.json(), (req, res) => {
    const { name, email, resumeLink, position } = req.body;
    // Validate and process job application data
    // Insert data into MongoDB collection
    db.collection('jobApplications').insertOne({ name, email, resumeLink, position }, (err, result) => {
      if (err) {
        console.error('Error inserting document:', err);
        res.status(500).send('Error submitting application');
        return;
      }
      res.status(200).send('Application submitted successfully');
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
