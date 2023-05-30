const express = require('express')
const router = express.Router()
const User = require('./model')

/**
 * Get all users
 */
router.get('/', async (req, res) => {
	const users = await User.find()
	res.json(users)
})

/**
 * Get a user
 */
router.get('/:userId', async (req, res) => {
	try {
		// user found
		const user = await User.findById(req.params.userId)
		return res.json(user)
	} catch {
		// user not found
		return res.sendStatus(404)
	}
})

/**
 * Create a user
 */
router.post('/', async (req, res) => {
	const { name, firstName, role } = req.body
	if ([name, firstName, role].includes(undefined)) {
		return res.sendStatus(400)
	}
	if (!['admin', 'applicant', 'recruiter'].includes(role)) {
		return res.sendStatus(400)
	}
	const user = await User.create({
		name,
		firstName,
		role,
	})
	return res.json(user)
})

module.exports = router
