const express = require('express');
const app = express();

require('dotenv').config({ path: './config/.env' })
require('./config/db')

// middleware


// routes


// server listening
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})