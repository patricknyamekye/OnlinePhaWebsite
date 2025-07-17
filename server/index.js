const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');

const UserModel = require('./models/User')


const app = express();


// Middleware to parse JSON
app.use(express.json());
app.use(cors())


const dbURI = 'mongodb://localhost:27017/client';


// Connect to MongoDB
mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('Failed to connect to MongoDB', err));


    app.post('/signUp', (req, res) =>{
        UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))

    })



 const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});