import express from "express"
import Post from "./model"
const router = express.Router()

/**
 * Get one all posts
 */
router.get('/', async (req, res) => {
    const posts = await Post.find()
    return res.json(posts)
})

/**
 * Get one post
 */
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        return res.json(post)
    } catch {
        return res.sendStatus(404)
    }
})

/**
 * Create one post
 */
router.post('/', async (req, res) => {
    const post = new Post(req.body)
    try {
<<<<<<< HEAD
        await post.validate
=======
        await post.validate()
>>>>>>> 1838c9f52d116937748f321f6705c559931c689d
        post.save()
        return res.json(post)
    } catch {
        return res.sendStatus(400)
    }
})

export default router