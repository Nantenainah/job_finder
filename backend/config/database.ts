import mongoose from 'mongoose'
import User from '../users/model'

function config(callback: () => void) {
	mongoose
		.connect(process.env.DATABASE_URL as string)
		.then(async () => {
			console.log('Connected to mongodb')
			// Migrations
			await User.deleteMany()
			callback()
		})
		.catch(() => {
			console.log('Cannot connect to mongodb')
		})
}

export { config }
