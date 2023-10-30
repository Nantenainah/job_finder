import { useCallback } from "react";

function Apply() {   
    
        const onDragOver = useCallback((event: any) => {
          event.preventDefault();
        }, []);
      
        const onDrop = useCallback((event: any) => {
          event.preventDefault();
          const files = event.dataTransfer.files;
          console.log(files);
        }, []);

    return <>
    <div className="mx-10 max-w-container h-auto px-4 sm:px-6 lg:px-8 mt-5">
        <h2 className="flex justify-center my-5 text-lg">
            Postuler
        </h2>
        <div className="h-auto bg-lightColor rounded-sm border-[1px] border-gray-200 sticky top-4 px-5">
            <div className="w-full justify-start my-4 text-base">
                A propos de la société
            </div>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mt-3">
                <li className="flex flex-col w-full">
                    <label htmlFor="personal">Nom complet</label>
                    <input type="text" name="personal" id="personal" className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none" placeholder="Ecrivez..." />
                </li>
                <li className="flex flex-col w-full">
                    <label htmlFor="mail">Email correspondant</label>
                    <input type="email" name="mail" id="mail" className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none" placeholder="Ecrivez..." />
                </li>
                <li className="flex flex-col w-full">
                    <label htmlFor="contact">Contact fiable</label>
                    <input type="tel" name="contact" id="contact" className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none" placeholder="Ex: 0341256897" />
                </li>
            </ul>
            <ul className="flex justify-center">
                <li className="col-span-2 flex lg:flex-row md:flex-col sm:flex-col">
                    <div className="flex flex-col lg:w-[50%] sm:w-[80%]">
                        <label htmlFor="cv sm:my-2">Description du poste</label>
                        <div className="w-[400px] h-[200px] border-spacing-2 border-[1px]">
                            <div 
                                onDragOver={onDragOver} 
                                onDrop={onDrop} 
                                style={{ width: '100%', height: '200px', border: '2px dashed gray' }}
                                className="flex flex-col items-center justify-center"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Glissez et déposez votre CV ici
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[50%] sm:w-[80%] lg:ms-3">
                        <label htmlFor="society-name sm:my-2">Responsabilité</label>
                        <div className="w-[400px] h-[200px] border-spacing-2 border-[1px]">
                            <div 
                                onDragOver={onDragOver} 
                                onDrop={onDrop} 
                                style={{ width: '100%', height: '200px', border: '2px dashed gray' }}
                                className="flex flex-col items-center justify-center"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Glissez et déposez votre lettre de motivation
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mt-3 h-auto">
                <li className="flex flex-col w-full">
                    <label htmlFor="address">Adresse</label>
                    <input type="text" name="address" id="address" className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none" placeholder="Ecrivez..." />
                </li>
                <li></li>
                <li>
                    <label htmlFor="society-name">Salaire minimum</label>
                    <input type="text" name="society-name" id="society-name" className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none" placeholder="Ecrivez..." />
                </li>
                <li>
                    <label htmlFor="society-name">Salaire maximum</label>
                    <input type="text" name="society-name" id="society-name" className="w-full rounded-sm bg-slate-50 h-8 mt-2 mb-8 px-3 focus:outline-none" placeholder="Ecrivez..." />
                </li>
            </ul>
                <button className="float-right rounded-full my-5 bg-blue-700 py-2 px-20 text-white">
                    Postuler 
                </button>
        </div>
    </div>
    </>
}


export default Apply;
