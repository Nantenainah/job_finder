const express = require('express')
const app = express()
const usersRoute = require('./users/route')
const bodyParser = require('body-parser')

require('dotenv').config({ path: './config/.env' })
require('./config/db')

// middleware
app.use(bodyParser.json())

// routes
app.get('/', (req, res) => {
	res.send('Hello world')
})
app.use('/users', usersRoute)

// server listening
app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`)
})
