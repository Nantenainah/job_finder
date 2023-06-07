import mongoose, { Schema } from 'mongoose'

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ['admin', 'applicant', 'recruiter'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	posts: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Post',
		},
	],
})

const User = mongoose.model('User', UserSchema)

export default User
