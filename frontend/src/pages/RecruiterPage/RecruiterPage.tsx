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
    const [applications, setApplications] = useState<any[]>([]);
    const [showApplications, setShowApplications] = useState({
        value: false,
        index: -1,
    });

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

    async function onDelete(id: string) {
        try {
            const res = await fetch(
                "http://localhost:8000/job-listings/" + id,
                {
                    method: "DELETE",
                }
            );
            const resJson = await res.json();
            alert("Suppression avec succès");
        } catch (error) {
            console.log(error);
            alert("Une erreur est survenue lors de la suppression du post");
        }
    }

    async function onShowApplications(jobID: string) {
        try {
            const res = await fetch(
                "http://localhost:8000/job-listings/" + jobID + "/applications"
            );
            const resJson = await res.json();
            console.log(resJson);
            setApplications(resJson);
        } catch {}
    }

    return (
        <div className="p-10 px-20 h-[80vh]">
            {jobs.length !== 0 ? null : (
                <h1 className="mt-10 text-lg text-center">Pas de posts</h1>
            )}
            {jobs.map((job: JobListing, jobIndex) => {
                return (
                    <div key={job._id}>
                        <div className="bg-lightColor p-10  my-2 flex justify-between items-center">
                            <div>
                                <h1 className="text-lg">{job.title}</h1>
                                <h2 className="text-gray-500">
                                    {job.companyName}
                                </h2>
                            </div>
                            <div className="flex gap-4 justify-end">
                                <Link
                                    to={"/jobs/" + job._id}
                                    className="border-2 p-2 py-1 px-5 rounded-md hover:bg-slate-100 transition duration-100"
                                >
                                    Voir la publication
                                </Link>
                                <button
                                    className="border-2 p-2 py-1 px-5 rounded-md hover:bg-slate-100 transition duration-100"
                                    onClick={() => {
                                        setShowApplications({
                                            value:
                                                showApplications.value &&
                                                showApplications.index ===
                                                    jobIndex
                                                    ? false
                                                    : true,
                                            index: jobIndex,
                                        });

                                        onShowApplications(job._id);
                                    }}
                                >
                                    {showApplications.value &&
                                    showApplications.index === jobIndex
                                        ? "Cacher les demandes"
                                        : "Voir les demandes"}
                                </button>
                                <button
                                    onClick={() => onDelete(job._id)}
                                    className="border-2 p-2 py-1 w-fit rounded-md bg-red-500 text-white cursor-pointer"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                        {showApplications.value &&
                        showApplications.index === jobIndex ? (
                            <div className="my-5">
                                {applications.map((application) => {
                                    return (
                                        <div
                                            key={application._id}
                                            className="mx-7 py-5 border px-5"
                                        >
                                            <h1 className="font-bold">
                                                {application.fullName}
                                            </h1>
                                            <a
                                                href=""
                                                className="text-blue-500 underline"
                                            >
                                                {application.cv}
                                            </a>
                                            <br />
                                            <a
                                                href=""
                                                className="text-blue-500 underline"
                                            >
                                                {application.cv}
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default RecruiterPage;
