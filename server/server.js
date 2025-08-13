// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const sendEmail = require('./controllers/email');


const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

// MongoDB connection string from .env file
const dbURI = 'mongodb://localhost:27017/Adwaso';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is the Adwaso backend!');
});

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// require the products routes
const productRoutes = require('./routes/productRoute')
app.use("/api", productRoutes)

// require the user routes
const userRoutes = require('./routes/userRoute')
app.use("/api", userRoutes)


// Define the POST route for sending an email
app.post('/send-email', async (req, res) => {
  const { email, name, subject, message } = req.body;

  try {
    await sendEmail(email, name, subject, message);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});