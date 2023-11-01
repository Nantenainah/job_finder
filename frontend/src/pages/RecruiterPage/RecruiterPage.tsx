import {FiEdit2} from "react-icons/fi"
import {LiaTimesSolid} from "react-icons/lia"
import { useAuth } from "../../hooks/auth"
import { getJobByRecruiterID } from "../../lib/api";
import { useEffect, useState } from "react";
import { JobListing } from "../../types";

const RecruiterPage = () => {

    const [jobs, setJobs] = useState<JobListing[]>([]); 
    const { user}  =   useAuth();
    useEffect(() => {
        console.log(user);
        if (Object.keys(user).length >0) {

            const fetchJobListings = async () => {
                try {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
            
            const data = await getJobByRecruiterID(user._id);
            console.log(data);
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
    <div className='p-10 px-20'>

    {jobs.map((job:JobListing)=>{
        return(
          <div 
          key={job._id}
          className='bg-lightColor p-8 grid grid-cols-4 my-2'>
                  <div>
                      {job.companyName}
                  </div>
                  <div>
                      {job.sector} 
                  </div>
                  <div>
                      {job.industry} 
                  </div>
                  <div className="flex gap-4 justify-end">
                      <h1 className="border-2 p-2 py-1 w-fit rounded-md bg-red-500 text-white cursor-pointer">
                      Cloturer
                    </h1>
                      <h1 className="border-2 p-2 w-fit rounded-full bg-slate-100 cursor-pointer">
                      <FiEdit2 />
                      </h1>
                      <h1 className="border-2 p-2 w-fit rounded-full bg-slate-100 cursor-pointer">
                      <LiaTimesSolid />
                      </h1>
                  </div>
                  
              </div>
        )
    } )}
    </div>
  )
}

export default RecruiterPage
