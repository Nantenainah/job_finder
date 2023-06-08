import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user'
import Post from '../models/post'

async function all(req: Request, res: Response) {
	const users = await User.find()
	res.json(users)
}

async function find(req: Request, res: Response) {
	try {
		const user = await User.findById(req.params.userId)
		return res.json(user)
	} catch {
		// user not found
		return res.sendStatus(404)
	}
}

async function create(req: Request, res: Response) {
	const user = new User(req.body)
	try {
		// Data valid
		await user.validate()
		user.password = await bcrypt.hash(user.password, 10)
		await user.save()
		res.status(201).json(user)
	} catch (err) {
		// Data invalid
		res.status(400).send(err)
	}
}

async function invalidUser(req: Request, res: Response, next: NextFunction) {
	const user = await User.findById(req.params.userId)
	if (user === null) return res.sendStatus(400)
	next()
}

async function allPosts(req: Request, res: Response) {
	const posts = await Post.find({ owner: req.params.userId })
	res.json(posts)
}

async function findPost(req: Request, res: Response) {
	const post = await Post.findById(req.params.postId)
	res.json(post)
}

async function createPost(req: Request, res: Response) {
	const post = new Post({ ...req.body, owner: req.params.userId })
	try {
		await post.validate()
		await post.save()
		res.json(post)
	} catch (err) {
		res.status(400).send(err)
	}
}

export { find, all, create, allPosts, findPost, invalidUser, createPost }
