import React from 'react';

const PostCardLoading: React.FC = () => {
    return (
        <div className="flex flex-col bg-lightColor border-[1px] w-full rounded-md animate-pulse">
            <div className="flex flex-col justify-between h-full gap-2 px-2 py-4 rounded-sm bg-gray-300">
                <div className="flex gap-2 px-2">
                    <div className="h-14 w-16 bg-gray-400 rounded-md animate-pulse"></div>
                    <div>
                        <div className="h-6 w-40 bg-gray-400 rounded-md animate-pulse"></div>
                        <div className="h-6 w-20 my-2 bg-gray-400 rounded-md animate-pulse"></div>
                    </div>
                </div>
                <div className="mx-2 h-12 bg-gray-400 rounded-md animate-pulse"></div>
                <div className="flex justify-between items-center gap-1 px-2 bg-gray-300">
                    <div className="h-6 w-20 bg-gray-400 rounded-md animate-pulse"></div>
                    <div className="h-6 w-20 bg-gray-400 rounded-md animate-pulse"></div>
                    <div className="h-6 w-20 bg-gray-400 rounded-md animate-pulse"></div>
                </div>
                <div className="flex justify-between text-center gap-2 px-2">
                    <div className='bg-blueColor text-lightColor p-2 w-full rounded-sm animate-pulse'>
                        Chargement...
                    </div>
                    <div className='bg-gray-200 text-blue-950 p-2 w-full rounded-sm animate-pulse'>
                        Chargement...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCardLoading;
