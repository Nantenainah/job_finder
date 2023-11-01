import { FiEdit2 } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { useAuth } from "../../hooks/auth";
import { getJobByRecruiterID } from "../../lib/api";
import { useEffect, useState } from "react";
import { JobListing } from "../../types";
import { Link } from "react-router-dom";

const RecruiterPage = () => {
    const [jobs, setJobs] = useState<JobListing[]>([]);
    const { user } = useAuth();
    useEffect(() => {
        console.log(user);
        if (Object.keys(user).length > 0) {
            const fetchJobListings = async () => {
                try {
                    const data = await getJobByRecruiterID(user._id);
                    setJobs(data);
                } catch (error) {
                    console.error(
                        "Erreur lors de la récupération des offres d'emploi :",
                        error
                    );
                }
            };
            fetchJobListings();
        }
    }, [user]);

    return (
        <div className="p-10 px-20 h-[80vh]">
            {jobs.map((job: JobListing) => {
                return (
                    <Link
                        to={"/jobs/" + job._id}
                        key={job._id}
                        className="bg-lightColor p-10 cursor-pointer hover:bg-slate-100 transition duration-100  my-2 flex justify-between items-center"
                    >
                        <div>
                            <h1 className="text-lg">{job.title}</h1>
                            <h2 className="text-gray-500">{job.companyName}</h2>
                        </div>
                        <div className="flex gap-4 justify-end">
                            <button
                                onClick={() => {}}
                                className="border-2 p-2 py-1 w-fit rounded-md bg-red-500 text-white cursor-pointer"
                            >
                                Supprimer
                            </button>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default RecruiterPage;
