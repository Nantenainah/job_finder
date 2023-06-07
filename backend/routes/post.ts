import express from 'express'
import Post from '../models/post'

const router = express.Router()

/**
 * Get all the posts
 */
router.get('/', async (req, res) => {
	const posts = await Post.find()
	res.json(posts)
})

/**
 * Get one post
 */
router.get('/:postId', async (req, res) => {
	try {
		const post = await Post.findById(req.params.postId)
		res.json(post)
	} catch {
		res.sendStatus(404)
	}
})

export default router
