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
const applicant_1 = __importDefault(require("../models/applicant"));
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applicantData = req.body;
        const newApplicant = new applicant_1.default(applicantData);
        yield newApplicant.save();
        res.status(201).json(newApplicant);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applicants = yield applicant_1.default.find();
        res.json(applicants);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applicant = yield applicant_1.default.findById(req.params.id);
        if (!applicant) {
            return res.status(404).json({ message: "Applicant not found" });
        }
        res.json(applicant);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedApplicant = yield applicant_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedApplicant) {
            return res.status(404).json({ message: "Applicant not found" });
        }
        res.json(updatedApplicant);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedApplicant = yield applicant_1.default.findByIdAndRemove(req.params.id);
        if (!deletedApplicant) {
            return res.status(404).json({ message: "Applicant not found" });
        }
        res.json(deletedApplicant);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
