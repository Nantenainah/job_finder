import express from 'express'
import * as userController from '../controllers/user'

const router = express.Router()

/**
 * Get all users
 */
router.get('/', userController.all)

/**
 * Get a user
 */
router.get('/:userId', userController.find)

/**
 * Create a user
 */
router.post('/', userController.create)

/**
 * Middle to test if it's a valid user before retrieving the posts
 */
router.use('/:userId', userController.invalidUser)

/**
 * Get all posts of a user
 */
router.get('/:userId/posts', userController.allPosts)

/**
 * Get one post of a user
 */
router.get('/:userId/posts/:postId', userController.findPost)

/**
 * Create a post of a user
 */
router.post('/:userId/posts', userController.createPost)

export default router
