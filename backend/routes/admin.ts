import express from "express";
import Admin from "../models/admin";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const adminData = req.body;
        const newAdmin = new Admin(adminData);
        await newAdmin.save();
        res.status(201).json(newAdmin);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json(admin);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json(updatedAdmin);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndRemove(req.params.id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json(deletedAdmin);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
