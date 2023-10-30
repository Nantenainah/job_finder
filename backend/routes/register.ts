import express from "express";
import User from "../models/user";
const router = express.Router();
const app = express();


app.post('/sign-up', async (req, res) => {
    const { email, password } = req.body
    const data = {
        email: email,
        password: password
    }
    try {
        const check = await User.findOne({ email: email })
        if (check) {
            res.status(400).json({ message: "user already exixte" })
        } else {
            await User.insertMany([data])
            res.status(200).json({ message: 'user insert succssefully' })
        }
    } catch (err) {
        res.status(500).json({ err: err })
    }

})