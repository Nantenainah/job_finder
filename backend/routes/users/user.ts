import express from "express";
import User from "../../models/users/user";

const router = express.Router();

// Create a new user
router.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific user by ID
router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Update a user by ID
router.put("/:userId", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a user by ID
router.delete("/:userId", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(deletedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
