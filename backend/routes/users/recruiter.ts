import express from "express";
import Recruiter from "../../models/recruiter";

const router = express.Router();

router.post("/recruiters", async (req, res) => {
    try {
        const recruiterData = req.body;
        const newRecruiter = new Recruiter(recruiterData);
        await newRecruiter.save();
        res.status(201).json(newRecruiter);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/recruiters", async (req, res) => {
    try {
        const recruiters = await Recruiter.find();
        res.json(recruiters);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/recruiters/:id", async (req, res) => {
    try {
        const recruiter = await Recruiter.findById(req.params.id);
        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(recruiter);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/recruiters/:id", async (req, res) => {
    try {
        const updatedRecruiter = await Recruiter.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedRecruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(updatedRecruiter);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/recruiters/:id", async (req, res) => {
    try {
        const deletedRecruiter = await Recruiter.findByIdAndRemove(
            req.params.id
        );
        if (!deletedRecruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(deletedRecruiter);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
