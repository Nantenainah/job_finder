import { useCallback, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";

type Data = {
    fullName: string;
    email: string;
    contact: string;
    address: string;
    salary: string;
    cv: File | null;
    lm: File | null;
};

function Apply() {
    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
    }, []);

    const onDropCV = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            setData((oldData) => ({ ...oldData, cv: files[0] }));
        }
    }, []);

    const onDropLM = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            setData((oldData) => ({ ...oldData, lm: files[0] }));
        }
    }, []);
    const { jobID } = useParams();

    const { user, isAuthenticated, role } = useAuth();

    const [data, setData] = useState<Data>({
        fullName: "",
        email: "",
        contact: "",
        address: "",
        salary: "",
        cv: null,
        lm: null,
    });

    function handleDataChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData((oldData) => ({ ...oldData, [name]: value }));
    }

    function handleCVFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setData((oldData) => ({ ...oldData, cv: file }));
        }
    }

    function handleLMFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setData((oldData) => ({ ...oldData, lm: file }));
        }
    }

    async function handleSubmit() {
        if (!isAuthenticated || role !== "applicant") {
            return;
        }

        const applicantID = user._id;
        const jobListingID = jobID;

        // Create a FormData object
        const formData = new FormData();

        // Append text fields to the FormData
        formData.append("fullName", data.fullName);
        formData.append("email", data.email);
        formData.append("contact", data.contact);
        formData.append("address", data.address);
        formData.append("salary", data.salary);

        // Append files to the FormData
        if (data.cv) {
            formData.append("cv", data.cv);
        }
        if (data.lm) {
            formData.append("lm", data.lm);
        }

        try {
            const res = await fetch(
                `http://localhost:8000/applicants/${applicantID}/applications/${jobListingID}`,
                {
                    method: "POST",
                    credentials: "include",
                    body: formData,
                }
            );
            const resJson = await res.json();
            console.log(resJson);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="mx-10 max-w-container h-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10 pb-10">
                <h2 className="flex justify-center my-5 text-lg">Postuler</h2>
                <div className="h-auto bg-lightColor rounded-sm border-[1px] border-gray-200 sticky top-4 px-5">
                    <div className="w-full justify-start my-4 text-base">
                        A propos de la société
                    </div>
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mt-3">
                        <li className="flex flex-col w-full">
                            <label htmlFor="fullName">Nom complet</label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                onChange={handleDataChange}
                                className="w-full rounded-sm bg-slate-100 h-12 mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Entrez votre nom complet"
                            />
                        </li>
                        <li className="flex flex-col w-full">
                            <label htmlFor="email">Email correspondant</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleDataChange}
                                className="w-full rounded-sm bg-slate-100 h-12  mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Entrez votre adresse email"
                            />
                        </li>
                        <li className="flex flex-col w-full">
                            <label htmlFor="contact">Contact fiable</label>
                            <input
                                type="tel"
                                name="contact"
                                id="contact"
                                onChange={handleDataChange}
                                className="w-full rounded-sm bg-slate-100 h-12  mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Ex: 0341256897"
                            />
                        </li>
                    </ul>
                    <ul className="flex justify-center">
                        <li className="col-span-2 flex lg:flex-row md:flex-col sm:flex-col">
                            <div className="flex flex-col lg:w-[50%] sm:w-[80%]">
                                <label htmlFor="cv sm:my-2">
                                    Téléchargez votre CV
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    name="cv"
                                    id="cv"
                                    onChange={handleCVFileChange}
                                    className="w-full rounded-sm bg-slate-100 h-12 mt-2 mb-8 px-3 focus:outline-none"
                                />
                                <div
                                    onDragOver={onDragOver}
                                    onDrop={onDropCV}
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        border: "2px dashed gray",
                                    }}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-10 h-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Glissez et déposez votre CV ici
                                </div>
                            </div>
                            <div className="flex flex-col lg:w-[50%] sm:w-[80%] lg:ms-3">
                                <label htmlFor="motivation sm:my-2">
                                    Lettre de motivation
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    name="lm"
                                    id="motivation"
                                    onChange={handleLMFileChange}
                                    className="w-full rounded-sm bg-slate-100 h-12 mt-2 mb-8 px-3 focus:outline-none"
                                />
                                <div
                                    onDragOver={onDragOver}
                                    onDrop={onDropLM}
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        border: "2px dashed gray",
                                    }}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-10 h-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Glissez et déposez votre lettre de
                                    motivation ici
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="grid grid-cols2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mt-3 h-auto">
                        <li className="flex flex-col w-full">
                            <label htmlFor="address">Adresse</label>
                            <input
                                type="text"
                                name="address"
                                onChange={handleDataChange}
                                id="address"
                                className="w-full rounded-sm bg-slate-100 h-12  mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Entrez votre adresse"
                            />
                        </li>
                        <li>
                            <label htmlFor="pretSalary">
                                Pretention salariale
                            </label>
                            <input
                                type="text"
                                name="salary"
                                onChange={handleDataChange}
                                id="salary"
                                className="w-full rounded-sm bg-slate-100 h-12 mt-2 mb-8 px-3 focus:outline-none"
                                placeholder="Entrez le salaire minimum souhaité"
                            />
                        </li>
                    </ul>
                    <button
                        className="float-right rounded-full my-5 bg-blue-700 py-2 px-20 text-white"
                        onClick={handleSubmit}
                    >
                        Postuler
                    </button>
                </div>
            </div>
        </>
    );
}

export default Apply;

// import { useCallback, useState } from "react";

// type Data = {
//     fullName: string;
//     email: string;
//     contact: string;
//     address: string;
//     salary: string;
//     cv: string;
//     lm: string;
// };

// function Apply() {
//     const onDragOver = useCallback((event: React.DragEvent) => {
//         event.preventDefault();
//     }, []);

//     const onDrop = useCallback((event: React.DragEvent) => {
//         event.preventDefault();
//         const files = event.dataTransfer.files;
//         console.log(files);
//     }, []);

//     const [data, setData] = useState<Data>({} as Data);

//     function handleDataChange(e: React.ChangeEvent<HTMLInputElement>) {
//         const { name, value } = e.target;
//         setData((oldData) => ({ ...oldData, [name]: value }));
//     }

//     return (
//         <>
//             <div className="mx-10 max-w-container h-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10 pb-10">
//                 <h2 className="flex justify-center my-5 text-lg">Postuler</h2>
//                 <div className="h-auto bg-lightColor rounded-sm border-[1px] border-gray-200 sticky top-4 px-5">
//                     <div className="w-full justify-start my-4 text-base">
//                         A propos de la société
//                     </div>
//                     <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mt-3">
//                         <li className="flex flex-col w-full">
//                             <label htmlFor="fullName">Nom complet</label>
//                             <input
//                                 type="text"
//                                 name="fullName"
//                                 id="fullName"
//                                 onChange={handleDataChange}
//                                 className="w-full rounded-sm bg-slate-100 h-12 mt-2 mb-8 px-3 focus:outline-none"
//                                 placeholder="Entrez votre nom complet"
//                             />
//                         </li>
//                         <li className="flex flex-col w-full">
//                             <label htmlFor="email">Email correspondant</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 onChange={handleDataChange}
//                                 className="w-full rounded-sm bg-slate-100 h-12  mt-2 mb-8 px-3 focus:outline-none"
//                                 placeholder="Entrez votre adresse email"
//                             />
//                         </li>
//                         <li className="flex flex-col w-full">
//                             <label htmlFor="contact">Contact fiable</label>
//                             <input
//                                 type="tel"
//                                 name="contact"
//                                 id="contact"
//                                 onChange={handleDataChange}
//                                 className="w-full rounded-sm bg-slate-100 h-12  mt-2 mb-8 px-3 focus:outline-none"
//                                 placeholder="Ex: 0341256897"
//                             />
//                         </li>
//                     </ul>
//                     <ul className="flex justify-center">
//                         <li className="col-span-2 flex lg:flex-row md:flex-col sm:flex-col">
//                             <div className="flex flex-col lg:w-[50%] sm:w-[80%]">
//                                 <label htmlFor="cv sm:my-2">
//                                     Téléchargez votre CV
//                                 </label>
//                                 <div className="w-[400px] h-[200px] border-spacing-2 border-[1px]">
//                                     <div
//                                         onDragOver={onDragOver}
//                                         onDrop={onDrop}
//                                         style={{
//                                             width: "100%",
//                                             height: "200px",
//                                             border: "2px dashed gray",
//                                         }}
//                                         className="flex flex-col items-center justify-center"
//                                     >
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                            strokeWidth="1.5"
//                                             stroke="currentColor"
//                                             className="w-10 h-10"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                                             />
//                                         </svg>
//                                         Glissez et déposez votre CV ici
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col lg:w-[50%] sm:w-[80%] lg:ms-3">
//                                 <label htmlFor="motivation sm:my-2">
//                                     Lettre de motivation
//                                 </label>
//                                 <div className="w-[400px] h-[200px] border-spacing-2 border-[1px]">
//                                     <div
//                                         onDragOver={onDragOver}
//                                         onDrop={onDrop}
//                                         style={{
//                                             width: "100%",
//                                             height: "200px",
//                                             border: "2px dashed gray",
//                                         }}
//                                         className="flex flex-col items-center justify-center"
//                                     >
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke-width="1.5"
//                                             stroke="currentColor"
//                                             className="w-10 h-10"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                                             />
//                                         </svg>
//                                         Glissez et déposez votre lettre de
//                                         motivation ici
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                     <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mt-3 h-auto">
//                         <li className="flex flex-col w-full">
//                             <label htmlFor="address">Adresse</label>
//                             <input
//                                 type="text"
//                                 name="address"
//                                 id="address"
//                                 className="w-full rounded-sm bg-slate-100 h-12  mt-2 mb-8 px-3 focus:outline-none"
//                                 placeholder="Entrez votre adresse"
//                             />
//                         </li>
//                         <li></li>
//                         <li>
//                             <label htmlFor="pretSalary">
//                                 Pretention salariale
//                             </label>
//                             <input
//                                 type="text"
//                                 name="pretSalary"
//                                 id="pretSalary"
//                                 className="w-full rounded-sm bg-slate-100 h-12 mt-2 mb-8 px-3 focus:outline-none"
//                                 placeholder="Entrez le salaire minimum souhaité"
//                             />
//                         </li>
//                     </ul>
//                     <button className="float-right rounded-full my-5 bg-blue-700 py-2 px-20 text-white">
//                         Postuler
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Apply;
