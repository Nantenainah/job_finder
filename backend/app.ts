import express from 'express'
import usersRoute from './users/route'
import bodyParser from 'body-parser'
import * as database from './config/database'
require('dotenv')

const app = express()

// middleware
app.use(bodyParser.json())

// routes
app.get('/', (req, res) => {
	res.send('Hello world')
})
app.use('/users', usersRoute)

// server listening
// Wait the database to connect before launching everything
database.config(() => {
	app.listen(process.env.PORT, () => {
		console.log(`Listening on port ${process.env.PORT}`)
	})
})
