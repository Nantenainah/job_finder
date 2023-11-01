import { useEffect, useState } from "react";
import JobListAside from "../../components/JobListAside/JobListAside";
import JobTypeChar from "../../components/JobTypeChar/JobTypeChar";
import SectorStats from "../../components/sectorStack/SectorStack";
import { StatsResponse } from "../../types";

type PropsTotal = {
    title: string;
    count: number;
    bgColor?: string;
    textColor?: string;
};
function Total({
    title,
    count = 0,
    bgColor = "white",
    textColor = "black",
}: PropsTotal) {
    return (
        <div
            className={
                "shadow-sm rounded-sm text-center p-10 text-gray-700 flex items-center justify-center flex-col"
            }
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <h1 className="text-xl font-bold uppercase">{title}</h1>
            <span className="text-lg">{count}</span>
        </div>
    );
}

function Stats() {
    const [data, setData] = useState<StatsResponse>({} as StatsResponse);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                "http://localhost:8000/stats?year=2023&month=11"
            );
            const d: StatsResponse = await response.json();
            setData(d);
        })();
    }, []);

    return (
        <div className="min-h-screen w-screen container mx-auto mt-10 mb-10">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4 lg:order-2 lg:ml-4">
                    <JobListAside
                        title="Top Postes le plus recherche"
                        jobs={data.topMostWantedJobs || []}
                    />
                </div>
                <div className="flex-1 flex flex-col items-start">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 justify-between">
                        <Total
                            title="Total des offres"
                            count={data.jobListingsCount || 0}
                            bgColor="#005b96"
                            textColor="white"
                        />
                        <Total
                            title="Total de recruteur"
                            count={data.recruitersCount || 0}
                            bgColor="#6497b1"
                            textColor="white"
                        />
                        <Total
                            title="Total des utilisateurs"
                            bgColor="#b3cde0"
                            count={
                                data.applicantsCount + data.recruitersCount || 0
                            }
                        />
                    </div>
                    <h1 className="text-xl ms-10 mb-7 mt-5 font-bold">
                        Secteurs d’activité
                    </h1>
                    <div className="h-[500px] w-full">
                        <SectorStats data={data.jobSectorStats || []} />
                    </div>
                    <h1 className="text-xl ms-10 mt-10 font-bold">
                        Top type d'emploi
                    </h1>
                    <div className="h-[350px] w-full">
                        <JobTypeChar data={data.jobTypeStats || []} />
                    </div>
                </div>
            </div>
        </div>
    );

    // return (
    //     <div className="h-screen w-screen container mx-auto mt-10 bg-blue-500">
    //         <div className="w-full min-h-max justify-between flex flex-col lg:flex-row lg:space-x-5 mb-10">
    //             <div className=" h-full w-full lg:w-3/4 px-5 shadow-sm">
    //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 justify-between">
    //                     <Total
    //                         title="Total des offres"
    //                         count={data.jobListingsCount || 0}
    //                         bgColor="#005b96"
    //                         textColor="white"
    //                     />
    //                     <Total
    //                         title="Total de recruteur"
    //                         count={data.recruitersCount || 0}
    //                         bgColor="#6497b1"
    //                         textColor="white"
    //                     />
    //                     <Total
    //                         title="Total des utilisateurs"
    //                         bgColor="#b3cde0"
    //                         count={
    //                             data.applicantsCount + data.recruitersCount || 0
    //                         }
    //                     ></Total>
    //                 </div>
    //                 <div className="h-[400px] w-full bg-white px-5 py-10 shadow-sm">
    //                     <h1 className="text-xl ms-10 mb-7 font-bold">
    //                         Secteurs d'activite
    //                     </h1>
    //                     <SectorStats data={data.jobSectorStats || []} />
    //                     <div className="grid grid-cols-1 lg:grid-cols-3">
    //                         <div className="h-[350px] w-full bg-white shadow-sm p-10">
    //                             <h1 className="text-xl font-bold">
    //                                 Top type d'emploi
    //                             </h1>
    //                             <JobTypeChar data={data.jobTypeStats || []} />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="bg-blue-500 h-full w-full lg:w-1/4">
    //                 <JobListAside
    //                     title="Top Postes le plus recherche"
    //                     jobs={data.topMostWantedJobs || []}
    //                 />
    //             </div>
    //         </div>

    //         {/* <div className="flex bg-red-500">
    //             <div className="bg-white rounded-md p-10 h-[500px] w-1/2">
    //             </div>
    //             <div className="w-1/4">
    //             </div>
    //         </div>
    //         <div>
    //             <JobTypeChar />
    //         </div> */}
    //     </div>
    // );
}

export default Stats;
