import express from "express";
import Application from "../models/application";

const router = express.Router();

// Get all applications
router.get("/", async (req, res) => {
    try {
        const applications = await Application.find();
        res.json(applications);
    } catch (error) {
        res.status(400).json({ error: "Failed to retrieve applications" });
    }
});
export default router;
