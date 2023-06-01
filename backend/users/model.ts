import mongoose from 'mongoose'

/* 
    Role: 
    "admin": administrator 
    "applicant": user who wants to apply to jobs 
    "recruiter": user who post jobs 
*/

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
})

const User = mongoose.model('User', UserSchema)

export default User
