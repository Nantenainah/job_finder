"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recruiter_1 = __importDefault(require("../models/recruiter"));
const job_listing_1 = __importDefault(require("../models/job-listing"));
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recruiterData = req.body;
        const newRecruiter = new recruiter_1.default(recruiterData);
        yield newRecruiter.save();
        res.status(201).json(newRecruiter);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recruiters = yield recruiter_1.default.find();
        res.json(recruiters);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recruiter = yield recruiter_1.default.findById(req.params.id);
        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(recruiter);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedRecruiter = yield recruiter_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(updatedRecruiter);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedRecruiter = yield recruiter_1.default.findByIdAndRemove(req.params.id);
        if (!deletedRecruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(deletedRecruiter);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get("/:id/job-listings", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const recruiter = yield recruiter_1.default.findById(id);
        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        const jobListings = yield job_listing_1.default.find({ recruiter: id });
        res.json(jobListings);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.post("/:id/job-listings", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const jobListingData = req.body;
        const recruiter = yield recruiter_1.default.findById(id);
        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        jobListingData.recruiter = id;
        const newJobListing = new job_listing_1.default(jobListingData);
        yield newJobListing.save();
        res.status(201).json(newJobListing);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
exports.default = router;
