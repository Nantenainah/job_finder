import { BiBriefcase, BiCreditCard, BiSearch } from "react-icons/bi";
import { GrLocation, GrMoreVertical } from 'react-icons/gr';
import "./Search.module.css";

const Search = () => {
    return (
        <form method="post" className="search flex gap-4 w-full bg-lightColor rounded-md border-[1px] border-gray-200">
            <div className="flex flex-col gap-2 items-center w-full px-4 md:px-0 md:flex-row">
                <label htmlFor="jobTitle" className="border-b md:border-r  w-full md:ml-3 md:p-4 md:h-full md:w-[30%]">
                    <BiSearch size={25} />
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="Titre de l'emploi"
                        className="bg-transparent w-full ml-2 flex-grow focus:outline-none"
                    />
                    <GrMoreVertical size={21} className="cursor-pointer" />
                </label>
                <div className="flex flex-col items-center gap-4 h-full w-full md:gap-2 md:flex-row md:w-[40%]">
                    <label htmlFor="location" className='h-full border-b w-full md:border-r md:w-1/2'>
                        <GrLocation size={20} />
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Ville/Localisation"
                            className="bg-transparent w-full ml-2 flex-grow focus:outline-none"
                        />
                    </label>
                    <label htmlFor="jobType" className='h-full border-b w-full md:border-r md:w-1/2'>
                        <BiBriefcase size={22} />
                        <input
                            type="text"
                            id="jobType"
                            name="jobType"
                            placeholder="Type d'emploi"
                            className="bg-transparent w-full ml-2 flex-grow focus:outline-none"
                        />
                    </label>
                </div>
                <div className='flex items-center h-full justify-around w-full md:w-[30%]'>
                    <label htmlFor="minSalary" className='flex items-center h-full py-4 border-b-0 w-full'>
                        <BiCreditCard size={25} />
                        <input
                            type="text"
                            id="minSalary"
                            name="minSalary"
                            placeholder="Salaire minimum"
                            className=" bg-transparent w-full ml-2 flex-grow focus:outline-none"
                        />
                    </label>
                    <button type="submit" className="items-center ml-auto gap-1 bg-blueColor h-full p-3 
                    text-lightColor rounded-r-md hidden sm:flex hover:bg-blue-400">
                        Rechercher
                    </button>
                </div>
            </div>
        </form >
    );
};

export default Search;
