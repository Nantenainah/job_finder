import express from 'express'
import userRoute from './routes/user'
import postRoute from './routes/post'
import bodyParser from 'body-parser'
import * as database from './config/database'
require('dotenv').config({ path: './.env' })

const app = express()

// middleware
app.use(bodyParser.json())

// routes
app.get('/', (req, res) => {
	res.send('Hello world')
})
app.use('/users', userRoute)
app.use('/posts', postRoute)

// server listening
// Wait the database to connect before launching everything
database.config(() => {
	app.listen(process.env.PORT, () => {
		console.log(`Listening on port ${process.env.PORT}`)
	})
})
