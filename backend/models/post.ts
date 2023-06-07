import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	salary: {
		type: Number,
		required: false,
	},
	requirements: {
		type: Array,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	entreprise: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
})

const model = mongoose.model('Post', schema)

export default model
