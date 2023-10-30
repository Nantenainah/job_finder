import express from "express";
const app = express()
import User from "../models/user";
const router = express.Router();

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    res.send("my login oo")
})