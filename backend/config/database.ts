import mongoose from 'mongoose'
import User from '../models/user'
import * as seeds from './seeds'

function config(callback: () => void) {
	mongoose
		.connect(process.env.DATABASE_URL as string)
		.then(async () => {
			console.log('Connected to mongodb')
			// Migrations
			await User.deleteMany()
			await seeds.fakeUsers({ admin: 1, applicant: 10, recruiter: 7 })
			await seeds.fakePosts(25)
			callback()
		})
		.catch((err) => {
			console.log(err)
			console.log('Cannot connect to mongodb')
		})
}

export { config }
