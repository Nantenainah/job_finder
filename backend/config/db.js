const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/")
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Cannot connect to MongoDB"))