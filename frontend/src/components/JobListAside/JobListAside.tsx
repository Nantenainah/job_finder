import { JobListing } from "../../types";

interface Props {
    title: string;
    jobs: JobListing[];
}
function JobListAside(props: Props) {
    const { jobs, title } = props;

    return (
        <div className="border border-gray-200 bg-white w-full p-5">
            <h1 className="font-semibold mt-5">{title}</h1>
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
                                    {job.sector}
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default JobListAside;
