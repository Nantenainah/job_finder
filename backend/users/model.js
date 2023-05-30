const mongoose = require('mongoose')

/* 
    Role: 
    "admin": administrator 
    "applicant": user who wants to apply to jobs 
    "recruiter": user who post jobs 
*/

const UserSchema = new mongoose.Schema({
	name: String,
	firstName: String,
	role: {
		type: String,
		enum: ['admin', 'applicant', 'recruiter'],
	},
})

const User = mongoose.model('User', UserSchema)

module.exports = User
