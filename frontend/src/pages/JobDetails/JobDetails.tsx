import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import {
    getAllJobListings,
    getJobListing,
    getRecruiter,
    searchJobListings,
} from "../../lib/api";
import { JobListing, Recruiter } from "../../types";

const RoundedText = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="mx-3 px-5 py-1 border border-gray-500 text-gray-500 rounded-full mt-3">
            {children}
        </span>
    );
};

type RelatedJobsProps = {
    jobs: JobListing[];
};
const RelatedJobs = ({ jobs }: RelatedJobsProps) => {
    return (
        <aside className="border border-gray-200 bg-white order-2 lg:order-1 lg:w-1/4 p-5">
            <h1 className="font-semibold mt-5">Emplois similaires</h1>
            <hr className="bg-border-200 my-5" />
            <div className="flex flex-col space-y-4">
                {jobs.map((job, index) => {
                    return (
                        <div
                            className="flex items-start"
                            key={"related-jobs-" + index}
                        >
                            <img className="bg-gray-500 w-[45px] h-[45px] mr-5 mt-1" />
                            <div className="flex-1">
                                <h1 className="font-medium">{job.title}</h1>
                                <h2 className="text-sm text-gray-400">
                                    {job.companyName}, {job.createdAt}
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
};

const JobInformations = ({
    title,
    description,
    responsibility,
}: JobListing) => {
    return (
        <div className="p-5 lg:w-3/4 lg:border-r border-gray-200">
            <div className="flex items-center">
                <img className="bg-gray-500 w-[50px] h-[50px] mr-5" />
                <div>
                    <h1 className="text-lg font-medium">{title}</h1>
                    <h2 className="text-gray-400">Société e-varotra</h2>
                </div>
            </div>
            <hr className="my-5" />
            <h1 className="font-semibold">Description du poste : </h1>
            <p className="text-gray-500">{description}</p>
            <h1 className="font-semibold mt-5">Responsabilités : </h1>
            <p className="text-gray-500">{responsibility}</p>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                laboriosam harum, delectus corporis voluptates recusandae
                laborum nemo provident ut libero aliquam, possimus nam
                repellendus in, animi sapiente commodi quos! Excepturi?
            </p>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                laboriosam harum, delectus corporis voluptates recusandae
                laborum nemo provident ut libero aliquam, possimus nam
                repellendus in, animi sapiente commodi quos! Excepturi?
            </p>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                laboriosam harum, delectus corporis voluptates recusandae
                laborum nemo provident ut libero aliquam, possimus nam
                repellendus in, animi sapiente commodi quos! Excepturi?
            </p>
            <h1 className="font-semibold mt-5">Compétences requis : </h1>
            <div className="flex flex-wrap items-center">
                <RoundedText>Créativité</RoundedText>
                <RoundedText>Communication</RoundedText>
                <RoundedText>Analyse</RoundedText>
                <RoundedText>Stratégie</RoundedText>
            </div>
        </div>
    );
};

type RecruiterInformationsProps = {
    recruiter: Recruiter;
    job: JobListing;
};
const RecruiterInformations = ({
    recruiter,
    job,
}: RecruiterInformationsProps) => {
    const { firstName, lastName, createdAt } = recruiter;
    const { location } = job;

    const inputDate = new Date(createdAt);
    const name = firstName + " " + lastName;

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = inputDate.toLocaleDateString(
        "fr-FR",
        options as Intl.DateTimeFormatOptions
    );

    console.log(name);

    return (
        <div className="p-5 lg:w-1/4 flex flex-col">
            <div className="flex-1">
                <h1 className="font-semibold">A propos du client</h1>
                <div className="mt-5">
                    <h2>Nom du client : </h2>
                    <h3 className="text-gray-500">{name}</h3>
                </div>
                <div className="mt-5">
                    <h2>Membre depuis : </h2>
                    <h3 className="text-gray-500">{formattedDate}</h3>
                </div>
                <div className="mt-5">
                    <h2>Adresse</h2>
                    <h3 className="text-gray-500">{location}</h3>
                </div>
                <hr className="my-5" />
                <h1 className="font-semibold mb-5">Autres informations</h1>
                <div>
                    <h2 className="">Secteurs d'activités : </h2>
                    <div className="mb-3 flex flex-wrap items-center justify-start">
                        <RoundedText>Créativité</RoundedText>
                        <RoundedText>Communication</RoundedText>
                        <RoundedText>Analyse</RoundedText>
                        <RoundedText>Stratégie</RoundedText>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <Link
                to={"/apply/" + job._id}
                className="w-full rounded-sm text-center bg-blueColor text-white py-3"
            >
                Postuler
            </Link>
            <button className="w-full rounded-sm border border-black py-3 mt-3">
                Enregistrer
            </button>
        </div>
    );
};

function JobDetails() {
    const [job, setJob] = useState<JobListing>({} as JobListing);
    const [recruiter, setRecruiter] = useState<Recruiter>({} as Recruiter);
    const [relatedJobs, setRelatedJobs] = useState<JobListing[]>([]);

    const { jobID } = useParams();
    useEffect(() => {
        const fetchJobListings = async () => {
            try {
                const job = await getJobListing(jobID as string);
                const recruiter = await getRecruiter(job.recruiter);
                const relatedJobs = await searchJobListings({
                    sector: job.sector,
                });
                setRecruiter(recruiter);
                setJob(job);
                setRelatedJobs(relatedJobs);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des offres d'emploi :",
                    error
                );
            }
        };
        fetchJobListings();
    }, []);

    return (
        <Container>
            <div className="flex flex-col lg:space-x-5 lg:flex-row my-10">
                <RelatedJobs jobs={relatedJobs} />
                <div className="order-1 lg:order-2 lg:w-3/4 bg-white border border-gray-200 rounded-t-lg">
                    <img
                        src={"https://picsum.photos/1280/720"}
                        alt=""
                        className="h-[80px] w-full bg-gray-600 rounded-t-lg"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="flex flex-col lg:flex-row">
                        <JobInformations {...job} />
                        <RecruiterInformations
                            job={job}
                            recruiter={recruiter}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default JobDetails;
