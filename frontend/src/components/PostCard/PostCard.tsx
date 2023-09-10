import React from 'react';
import { Link } from 'react-router-dom';

interface PostProps {
    recruiter: string;
    title: string;
    description: string;
}

const PostCard: React.FC<PostProps> = ({ recruiter, title, description }) => {
    return (
        <div className="flex flex-col bg-lightColor border-[1px] w-full rounded-md">
            <div className="flex flex-col justify-between h-full gap-2 px-2 py-4 rounded-sm">

                <div className="flex gap-2 px-2">
                    <img src="./recruiter_default_logo.png" height={30} width={40}
                        className="h-fit border-[1px] rounded-md" alt="Logo" />
                    <div>
                        <h1 className="font-semibold block">{title}</h1>
                        <h2 className="">Bocasay</h2>
                    </div>
                </div>

                <div className="px-2">
                    <div className="text-start line-clamp-3 text-gray-600">
                        {description}
                    </div>
                </div>

                <div className="flex justify-between items-center gap-1 px-2 
                 text-blueColor text-[.9em]">
                    <span className='bg-gray-100 px-2 py-1 rounded-md'>Full Time</span>
                    <span className='bg-gray-100 px-2 py-1 rounded-md'>Senior Level</span>
                    <span className='bg-gray-100 px-2 py-1 rounded-md'>Min 1 Year</span>
                </div>

                <div className="flex justify-between text-center gap-2 px-2">
                    <Link to={`/apply`}
                        className='bg-blueColor text-lightColor p-2 w-full rounded-sm'>
                        Postuler
                    </Link>
                    <Link to={`/jobs/${recruiter}`}
                        className='bg-gray-200 text-blue-950 p-2 w-full rounded-sm'>
                        Details
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default PostCard;
