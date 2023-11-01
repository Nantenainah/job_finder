import { faker } from "@faker-js/faker";
import Recruiter from "../models/recruiter";
import JobListing, { JOB_SECTOR, JOB_TYPES } from "../models/job-listing";
import Admin from "../models/admin";
import Applicant from "../models/applicant";

export const generateFakeApplicants = (count: number = 1) => {
    const fakeApplicants = [];

    for (let i = 0; i < count; i++) {
        const fakeApplicant = {
            email: faker.internet.email(),
            username: faker.internet.userName(),
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            password: faker.internet.password(),
            phoneNumber: faker.phone.number(),
            address: faker.location.city(),
            resume: faker.internet.url(),
            coverLetter: faker.lorem.paragraph(),
            jobPreference: faker.person.jobType(),
        };

        fakeApplicants.push(fakeApplicant);
    }

    return fakeApplicants;
};

export const generateFakeAdmins = (count: number = 1) => {
    const fakeAdmins = [];

    for (let i = 0; i < count; i++) {
        const fakeAdmin = {
            email: faker.internet.email(),
            username: faker.internet.userName(),
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            password: faker.internet.password(),
            fullName: faker.person.fullName(),
        };

        fakeAdmins.push(fakeAdmin);
    }

    return fakeAdmins;
};

export const generateFakeRecruiterAndJobListings = (count: number = 1) => {
    const fakeData = [];

    for (let i = 0; i < count; i++) {
        const fakeRecruiter = {
            email: faker.internet.email(),
            username: faker.internet.userName(),
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            password: faker.internet.password(),
            companyName: faker.company.name(),
            phoneNumber: faker.phone.number(),
            companyDescription: faker.company.catchPhrase(),
            websiteUrl: faker.internet.url(),
            logo: faker.image.url(),
        };

        const recruiter = new Recruiter(fakeRecruiter);

        const jobListings = [];
        const numJobListings = faker.number.int({ min: 1, max: 5 });
        let title = faker.person.jobTitle();
        let changeTitleOn = faker.number.int({ min: 1, max: 8 });

        for (let j = 0; j < numJobListings; j++) {
            if (j % changeTitleOn === 0) {
                title = faker.person.jobTitle();
                changeTitleOn = faker.number.int({ min: 1, max: 8 });
            }

            const fakeJobListing = {
                title: title,
                description: faker.lorem.paragraph(),
                requirements: faker.lorem.sentence(),
                companyName: fakeRecruiter.companyName,
                companyLogo: fakeRecruiter.logo,
                location: faker.location.city(),
                industry: faker.company.buzzPhrase(),
                applicationDeadline: faker.date.future().toLocaleDateString(),
                employmentStartDate: faker.date.future().toLocaleDateString(),
                skills: faker.lorem.words(),
                responsibility: faker.lorem.paragraph(),
                type: JOB_TYPES[
                    faker.number.int({ min: 0, max: JOB_TYPES.length })
                ],
                sector: JOB_SECTOR[
                    faker.number.int({ min: 0, max: JOB_SECTOR.length })
                ],
                experience: {
                    min: faker.number.int({ min: 0, max: 3 }),
                    max: faker.number.int({ min: 2, max: 8 }),
                },
                salary: {
                    min: faker.finance.amount(1000000, 5000000, 0),
                    max: faker.finance.amount(1000000, 5000000, 0),
                },
            };

            const jobListing = new JobListing({
                recruiter: recruiter._id,
                ...fakeJobListing,
            });
            jobListings.push(jobListing);
        }

        fakeData.push({ recruiter, jobListings });
    }

    return fakeData;
};

const generateAllFakeData = async () => {
    await Admin.deleteMany();
    await Applicant.deleteMany();
    await JobListing.deleteMany();
    await Recruiter.deleteMany();

    const fakeAdmins = generateFakeAdmins(2);
    const fakeApplicants = generateFakeApplicants(10);
    await Admin.insertMany(fakeAdmins);
    await Applicant.insertMany(fakeApplicants);

    const fakeRecruitersAndJobListings =
        generateFakeRecruiterAndJobListings(10);
    for (const { recruiter, jobListings } of fakeRecruitersAndJobListings) {
        await recruiter.save();
        await JobListing.insertMany(jobListings);
    }

    await Applicant.create({
        email: "applicant@gmail.com",
        username: faker.internet.userName(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        password: "12345678",
        phoneNumber: faker.phone.number(),
        address: faker.location.city(),
        resume: faker.internet.url(),
        coverLetter: faker.lorem.paragraph(),
        jobPreference: faker.person.jobType(),
    });
    await Recruiter.create({
        email: "recruiter@gmail.com",
        username: faker.internet.userName(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        password: "12345678",
        companyName: faker.company.name(),
        phoneNumber: faker.phone.number(),
        companyDescription: faker.company.catchPhrase(),
        websiteUrl: faker.internet.url(),
        logo: faker.image.url(),
    });
};

export default generateAllFakeData;
