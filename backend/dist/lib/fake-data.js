"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.generateFakeRecruiterAndJobListings = exports.generateFakeAdmins = exports.generateFakeApplicants = void 0;
const faker_1 = require("@faker-js/faker");
const recruiter_1 = __importDefault(require("../models/recruiter"));
const job_listing_1 = __importStar(require("../models/job-listing"));
const admin_1 = __importDefault(require("../models/admin"));
const applicant_1 = __importDefault(require("../models/applicant"));
const generateFakeApplicants = (count = 1) => {
    const fakeApplicants = [];
    for (let i = 0; i < count; i++) {
        const fakeApplicant = {
            email: faker_1.faker.internet.email(),
            username: faker_1.faker.internet.userName(),
            lastName: faker_1.faker.person.lastName(),
            firstName: faker_1.faker.person.firstName(),
            password: faker_1.faker.internet.password(),
            phoneNumber: faker_1.faker.phone.number(),
            address: faker_1.faker.location.city(),
            resume: faker_1.faker.internet.url(),
            coverLetter: faker_1.faker.lorem.paragraph(),
            jobPreference: faker_1.faker.person.jobType(),
        };
        fakeApplicants.push(fakeApplicant);
    }
    return fakeApplicants;
};
exports.generateFakeApplicants = generateFakeApplicants;
const generateFakeAdmins = (count = 1) => {
    const fakeAdmins = [];
    for (let i = 0; i < count; i++) {
        const fakeAdmin = {
            email: faker_1.faker.internet.email(),
            username: faker_1.faker.internet.userName(),
            lastName: faker_1.faker.person.lastName(),
            firstName: faker_1.faker.person.firstName(),
            password: faker_1.faker.internet.password(),
            fullName: faker_1.faker.person.fullName(),
        };
        fakeAdmins.push(fakeAdmin);
    }
    return fakeAdmins;
};
exports.generateFakeAdmins = generateFakeAdmins;
const generateFakeRecruiterAndJobListings = (count = 1) => {
    const fakeData = [];
    for (let i = 0; i < count; i++) {
        const fakeRecruiter = {
            email: faker_1.faker.internet.email(),
            username: faker_1.faker.internet.userName(),
            lastName: faker_1.faker.person.lastName(),
            firstName: faker_1.faker.person.firstName(),
            password: faker_1.faker.internet.password(),
            companyName: faker_1.faker.company.name(),
            phoneNumber: faker_1.faker.phone.number(),
            companyDescription: faker_1.faker.company.catchPhrase(),
            websiteUrl: faker_1.faker.internet.url(),
            logo: faker_1.faker.image.url(),
        };
        const recruiter = new recruiter_1.default(fakeRecruiter);
        const jobListings = [];
        const numJobListings = faker_1.faker.number.int({ min: 1, max: 5 });
        for (let j = 0; j < numJobListings; j++) {
            const fakeJobListing = {
                title: faker_1.faker.person.jobTitle(),
                description: faker_1.faker.lorem.paragraph(),
                requirements: faker_1.faker.lorem.sentence(),
                companyName: fakeRecruiter.companyName,
                companyLogo: fakeRecruiter.logo,
                location: faker_1.faker.location.city(),
                industry: faker_1.faker.company.buzzPhrase(),
                applicationDeadline: faker_1.faker.date.future().toLocaleDateString(),
                employmentStartDate: faker_1.faker.date.future().toLocaleDateString(),
                skills: faker_1.faker.lorem.words(),
                responsibility: faker_1.faker.lorem.paragraph(),
                type: job_listing_1.JOB_TYPES[faker_1.faker.number.int({ min: 0, max: job_listing_1.JOB_TYPES.length })],
                sector: job_listing_1.JOB_SECTOR[faker_1.faker.number.int({ min: 0, max: job_listing_1.JOB_SECTOR.length })],
                experience: {
                    min: faker_1.faker.number.int({ min: 0, max: 1 }),
                    max: faker_1.faker.number.int({ min: 2, max: 8 }),
                },
                salary: {
                    min: faker_1.faker.finance.amount(1000000, 5000000, 0),
                    max: faker_1.faker.finance.amount(1000000, 5000000, 0),
                },
            };
            const jobListing = new job_listing_1.default(Object.assign({ recruiter: recruiter._id }, fakeJobListing));
            jobListings.push(jobListing);
        }
        fakeData.push({ recruiter, jobListings });
    }
    return fakeData;
};
exports.generateFakeRecruiterAndJobListings = generateFakeRecruiterAndJobListings;
const generateAllFakeData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield admin_1.default.deleteMany();
    yield applicant_1.default.deleteMany();
    yield job_listing_1.default.deleteMany();
    yield recruiter_1.default.deleteMany();
    const fakeAdmins = (0, exports.generateFakeAdmins)(2);
    const fakeApplicants = (0, exports.generateFakeApplicants)(10);
    yield admin_1.default.insertMany(fakeAdmins);
    yield applicant_1.default.insertMany(fakeApplicants);
    const fakeRecruitersAndJobListings = (0, exports.generateFakeRecruiterAndJobListings)(10);
    for (const { recruiter, jobListings } of fakeRecruitersAndJobListings) {
        yield recruiter.save();
        yield job_listing_1.default.insertMany(jobListings);
    }
});
exports.default = generateAllFakeData;
