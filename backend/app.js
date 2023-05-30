const express = require('express')
const app = express()
const usersRoute = require('./users/route')

require('dotenv').config({ path: './config/.env' })
require('./config/db')

// middleware

// routes
app.get('/', (req, res) => {
	res.send('Hello world')
})
app.use('/users', usersRoute)

// server listening
app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`)
})
