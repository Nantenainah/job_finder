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
		const admin = await User.create({
			name: 'super',
			firstName: 'admin',
			role: 'admin',
		})
		const applicant = await User.create({
			name: 'super',
			firstName: 'applicant',
			role: 'applicant',
		})
		const recruiter = await User.create({
			name: 'super',
			firstName: 'recruiter',
			role: 'recruiter',
		})
	})
	.catch((err) => console.log('Cannot connect to MongoDB', err))
