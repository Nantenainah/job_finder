import express from "express";
import Applicant from "../../models/applicant";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const applicantData = req.body;
        const newApplicant = new Applicant(applicantData);
        await newApplicant.save();
        res.status(201).json(newApplicant);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const applicants = await Applicant.find();
        res.json(applicants);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const applicant = await Applicant.findById(req.params.id);
        if (!applicant) {
            return res.status(404).json({ message: "Applicant not found" });
        }
        res.json(applicant);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedApplicant = await Applicant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedApplicant) {
            return res.status(404).json({ message: "Applicant not found" });
        }
        res.json(updatedApplicant);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedApplicant = await Applicant.findByIdAndRemove(
            req.params.id
        );
        if (!deletedApplicant) {
            return res.status(404).json({ message: "Applicant not found" });
        }
        res.json(deletedApplicant);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
