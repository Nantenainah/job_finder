import express from "express"
import Post from "./model"
const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await Post.find()
    return res.json(posts)
})

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        return res.json(post)
    } catch {
        return res.sendStatus(404)
    }
})

router.post('/', async (req, res) => {
    const post = new Post(req.body)
    try {
        await post.validate
        post.save()
        return res.json(post)
    } catch {
        return res.sendStatus(400)
    }
})

export default router