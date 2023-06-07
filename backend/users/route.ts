import express from 'express'
import User from './model'
import bcrypt from 'bcrypt'
import postsRoute from "../posts/route"

const router = express.Router()

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
	const { name, firstName, email, password, role } = req.body
	if ([name, firstName, role, email, password].includes(undefined)) {
		// Data invalid
		return res.sendStatus(400)
	}
	if (!['admin', 'applicant', 'recruiter'].includes(role)) {
		// Role invalid
		return res.sendStatus(400)
	}
	const duplicate = await User.findOne({ email })
	if (duplicate !== null) {
		// Email already used
		return res.sendStatus(409)
	}

	const hashedPassword = await bcrypt.hash(password, 10)
	const user = await User.create({
		name,
		firstName,
		role,
		email,
		password: hashedPassword,
	})

	return res.status(201).json(user)
})


/**
 * Posts Route
 * Test if valid user
 */
router.use('/:userId', async (req, res, next) => {
	try {
		const user = await User.findById(req.params.userId)
		next()
	} catch {
		res.sendStatus(400)
	}
})
router.use('/:userId/posts', postsRoute)

export default router
