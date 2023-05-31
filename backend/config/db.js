const mongoose = require('mongoose')
const User = require('../users/model')

// Please change the localhost url depending on your environment
mongoose
	.connect('mongodb://0.0.0.0:27017/job_finder')
	.then(async () => {
		console.log('Connected to mongoDB')

		// Migrations
		// Not important
		// Just Fake data
		await User.deleteMany()
	})
	.catch((err) => console.log('Cannot connect to MongoDB', err))
