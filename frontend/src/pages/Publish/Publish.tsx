import { useEffect, useState } from "react";
import { JobListing } from "../../types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

function Publish() {
    const navigate = useNavigate();
    // const { isAuthenticated, role } = useAuth();

    const [isClicked, setIsClicked] = useState([false, false, false, false]);

    const [data, setData] = useState<JobListing>({} as JobListing);

    useEffect(() => {
        // if (!isAuthenticated || role !== "recruiter") {
        //     navigate("/");
        // }
    }, []);

    const handleDataChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        if (name === "minSalary") {
            setData({
                ...data,
                salary: {
                    ...data.salary,
                    min: parseInt(value),
                },
            });
            return;
        }
        if (name === "maxSalary") {
            setData({
                ...data,
                salary: {
                    ...data.salary,
                    max: parseInt(value),
                },
            });
            return;
        }
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleJobTypeSelect = (
        e: React.SyntheticEvent<HTMLInputElement, Event>
    ) => {
        setData({
            ...data,
            type: e.currentTarget.value,
        });
    };

    const handleSubmit = async () => {
        try {
            await fetch("http://localhost:8000/job-listings", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            alert("Post publie");
            navigate("/");
        } catch (error) {
            alert("Echec de publication. ressayer plus tard");
            console.log(error);
        }
    };

    const handleChangeColor =
        (index: number) => (e: React.MouseEvent<HTMLParagraphElement>) => {
            setIsClicked(
                isClicked.map((clicked, i) =>
                    i === index ? !clicked : clicked
                )
            );
        };

    return (
        <>
            <div className="bg-lightColor flex justify-center items-center border-b-[1px] mt-[0.02rem] py-[1rem] px-[2rem] md:px-[5rem]">
                <form className="search flex gap-4 w-full py-2 bg-lightColor rounded-full border-[1px] border-gray-200">
                    <div className="flex flex-col gap-2 items-center w-[40%] ms-4 md:px-0 md:flex-row">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <input
                            type="text"
                            name="keywords"
                            className="w-full px-2 focus:outline-none"
                            placeholder="Titre d’emploi ou mot clé"
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-center w-full mx-4 md:px-0 md:flex-row">
                        <hr className="vertical-line w-[2px] h-12 bg-black me-7" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            name="localisation"
                            className="w-full px-2 focus:outline-none"
                            placeholder="Préciser la localisation"
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-center w-full mx-4 md:px-0 md:flex-row"></div>
                    <div className="float-right me-4 px-6 py-3 bg-blue-700 rounded-full text-white">
                        Rechercher
                    </div>
                </form>
            </div>
            <div className="mx-10 max-w-container h-auto px-4 sm:px-6 lg:px-8 mt-5">
                <h2 className="flex justify-center my-5 text-lg">
                    Publier une offre
                </h2>
                <div className="h-auto bg-lightColor rounded-sm border-[1px] border-gray-200 sticky top-4 px-5">
                    <div className="w-full justify-start my-4 text-base">
                        A propos de la société
                    </div>
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3">
                        <li className="flex flex-col w-full">
                            <label htmlFor="companyName">
                                Nom de la sociéte
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                onChange={handleDataChange}
                                className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Ecrivez..."
                            />
                        </li>
                        <li className="flex flex-col w-full">
                            <label htmlFor="mail">Email correspondant</label>
                            <input
                                type="email"
                                name="mail"
                                id="mail"
                                className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Ecrivez..."
                            />
                        </li>
                        <li className="flex flex-col w-full">
                            <label htmlFor="logo">Logo</label>
                            <input
                                type="text"
                                name="logo"
                                id="logo"
                                className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Ecrivez..."
                            />
                        </li>
                    </ul>
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-2">
                        <li className="flex flex-col w-full">
                            <label htmlFor="title">Nom du poste</label>
                            <input
                                type="text"
                                name="title"
                                onChange={handleDataChange}
                                id="title"
                                className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Ecrivez..."
                            />
                            <label htmlFor="society-name">Catégories</label>
                            <ul>
                                <li className="grid grid-cols-2 gap-3 mt-2">
                                    <p
                                        className={`flex justify-center border-[1px] rounded-full p-2 ${
                                            isClicked[0]
                                                ? "bg-blue-600 text-white"
                                                : "bg-white"
                                        }`}
                                        onClick={handleChangeColor(0)}
                                    >
                                        Commercial
                                    </p>
                                    <p
                                        className={`flex justify-center border-[1px] rounded-full p-2 ${
                                            isClicked[1]
                                                ? "bg-blue-600 text-white"
                                                : "bg-white"
                                        }`}
                                        onClick={handleChangeColor(1)}
                                    >
                                        Environnement
                                    </p>
                                    <p
                                        className={`flex justify-center border-[1px] rounded-full p-2 ${
                                            isClicked[2]
                                                ? "bg-blue-600 text-white"
                                                : "bg-white"
                                        }`}
                                        onClick={handleChangeColor(2)}
                                    >
                                        Developpement
                                    </p>
                                    <p
                                        className={`flex justify-center border-[1px] rounded-full p-2 ${
                                            isClicked[3]
                                                ? "bg-blue-600 text-white"
                                                : "bg-white"
                                        }`}
                                        onClick={handleChangeColor(3)}
                                    >
                                        Marketing
                                    </p>
                                </li>
                                <li className="flex mt-2 items-center border-[1px] rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                    &nbsp;
                                    <p>Ajouter</p>
                                </li>
                            </ul>
                        </li>
                        <li className="col-span-2 flex lg:flex-row md:flex-col sm:flex-col">
                            <div className="flex flex-col lg:w-[50%] sm:w-[80%]">
                                <label
                                    htmlFor="description"
                                    className="sm:my-2"
                                >
                                    Description du poste
                                </label>
                                <textarea
                                    name="description"
                                    onChange={handleDataChange}
                                    cols={80}
                                    rows={10}
                                    className="bg-slate-50 focus:outline-none p-2"
                                ></textarea>
                            </div>
                            <div className="flex flex-col lg:w-[50%] sm:w-[80%] lg:ms-3">
                                <label
                                    htmlFor="responsibility"
                                    className="sm:my-2"
                                >
                                    Responsabilité
                                </label>
                                <textarea
                                    name="responsibility"
                                    onChange={handleDataChange}
                                    cols={80}
                                    rows={10}
                                    className="bg-slate-50 focus:outline-none p-2"
                                ></textarea>
                            </div>
                        </li>
                    </ul>
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 h-auto">
                        <li className="flex flex-col w-full">
                            <label htmlFor="society-name">Catégories</label>
                            <table>
                                <tbody>
                                    <tr className="grid grid-cols-2 gap-5 mt-2">
                                        <td className="flex">
                                            <input
                                                type="radio"
                                                value={"stage"}
                                                onChange={handleJobTypeSelect}
                                                name="choose"
                                            />
                                            &nbsp;&nbsp;
                                            <p>Stage</p>
                                        </td>
                                        <td className="flex">
                                            <input
                                                value={"freelance"}
                                                onChange={handleJobTypeSelect}
                                                type="radio"
                                                name="choose"
                                            />
                                            &nbsp;&nbsp;
                                            <p>Freelance</p>
                                        </td>
                                    </tr>
                                    <tr className="grid grid-cols-2 gap-5 mt-2">
                                        <td className="flex">
                                            <input
                                                type="radio"
                                                value={"full-time"}
                                                onChange={handleJobTypeSelect}
                                                name="choose"
                                            />
                                            &nbsp;&nbsp;
                                            <p>Temps plein</p>
                                        </td>
                                        <td className="flex">
                                            <input
                                                type="radio"
                                                value={"remote"}
                                                onChange={handleJobTypeSelect}
                                                name="choose"
                                            />
                                            &nbsp;&nbsp;
                                            <p>Distant</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                        <li></li>
                        <li>
                            <label htmlFor="minSalary">Salaire minimum</label>
                            <input
                                type="text"
                                name="minSalary"
                                id="minSalary"
                                onChange={handleDataChange}
                                className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Ecrivez..."
                            />
                        </li>
                        <li>
                            <label htmlFor="maxSalary">Salaire maximum</label>
                            <input
                                type="text"
                                name="maxSalary"
                                id="maxSalary"
                                onChange={handleDataChange}
                                className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Ecrivez..."
                            />
                        </li>
                    </ul>
                    <button
                        onClick={handleSubmit}
                        className="float-right rounded-full my-5 bg-blue-700 py-2 px-20 text-white"
                    >
                        Publier
                    </button>
                </div>
            </div>
        </>
    );
}

export default Publish;
