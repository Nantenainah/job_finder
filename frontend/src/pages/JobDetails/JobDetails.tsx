import Container from "../../components/Container/Container";

const RoundedText = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="mx-3 px-5 py-1 border border-gray-500 text-gray-500 rounded-full mt-3">
            {children}
        </span>
    );
};

const RelatedJobs = () => {
    return (
        <aside className="border border-gray-200 bg-white order-2 lg:order-1 lg:w-1/4 p-5">
            <h1 className="font-semibold mt-5">Emplois similaires</h1>
            <hr className="bg-border-200 my-5" />
            <div className="flex flex-col space-y-4">
                {Array.from(new Array(7)).map((_, index) => {
                    return (
                        <div
                            className="flex items-start"
                            key={"related-jobs-" + index}
                        >
                            <img className="bg-gray-500 w-[45px] h-[45px] mr-5 mt-1" />
                            <div className="flex-1">
                                <h1 className="font-medium">
                                    Directrice marketing
                                </h1>
                                <h2 className="text-sm text-gray-400">
                                    Société e-varotra, il y a une heure
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
};

const JobInformations = () => {
    return (
        <div className="p-5 lg:w-3/4 lg:border-r border-gray-200">
            <div className="flex items-center">
                <img className="bg-gray-500 w-[50px] h-[50px] mr-5" />
                <div>
                    <h1 className="text-lg font-medium">
                        Directrice marketing
                    </h1>
                    <h2 className="text-gray-400">Société e-varotra</h2>
                </div>
            </div>
            <hr className="my-5" />
            <h1 className="font-semibold">Description du poste : </h1>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                laboriosam harum, delectus corporis voluptates recusandae
                laborum nemo provident ut libero aliquam, possimus nam
                repellendus in, animi sapiente commodi quos! Excepturi?
            </p>
            <h1 className="font-semibold mt-5">Responsabilités : </h1>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                laboriosam harum, delectus corporis voluptates recusandae
                laborum nemo provident ut libero aliquam, possimus nam
                repellendus in, animi sapiente commodi quos! Excepturi?
            </p>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                laboriosam harum, delectus corporis voluptates recusandae
                laborum nemo provident ut libero aliquam, possimus nam
                repellendus in, animi sapiente commodi quos! Excepturi?
            </p>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                laboriosam harum, delectus corporis voluptates recusandae
                laborum nemo provident ut libero aliquam, possimus nam
                repellendus in, animi sapiente commodi quos! Excepturi?
            </p>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                laboriosam harum, delectus corporis voluptates recusandae
                laborum nemo provident ut libero aliquam, possimus nam
                repellendus in, animi sapiente commodi quos! Excepturi?
            </p>
            <h1 className="font-semibold mt-5">Compétences requis : </h1>
            <div className="flex flex-wrap items-center">
                <RoundedText>Créativité</RoundedText>
                <RoundedText>Communication</RoundedText>
                <RoundedText>Analyse</RoundedText>
                <RoundedText>Stratégie</RoundedText>
            </div>
        </div>
    );
};

const RecruiterInformations = () => {
    return (
        <div className="p-5 lg:w-1/4 flex flex-col">
            <div className="flex-1">
                <h1 className="font-semibold">A propos du client</h1>
                <div className="mt-5">
                    <h2>Nom du client : </h2>
                    <h3 className="text-gray-500">Société e-varotra</h3>
                </div>
                <div className="mt-5">
                    <h2>Membre depuis : </h2>
                    <h3 className="text-gray-500">12 Janvier 2017</h3>
                </div>
                <div className="mt-5">
                    <h2>Adresse</h2>
                    <h3 className="text-gray-500">
                        Ampitatafika, Antananarivo
                    </h3>
                </div>
                <hr className="my-5" />
                <h1 className="font-semibold mb-5">Autres informations</h1>
                <div>
                    <h2 className="">Secteurs d'activités : </h2>
                    <div className="mb-3 flex flex-wrap items-center justify-start">
                        <RoundedText>Créativité</RoundedText>
                        <RoundedText>Communication</RoundedText>
                        <RoundedText>Analyse</RoundedText>
                        <RoundedText>Stratégie</RoundedText>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <button className="w-full rounded-sm bg-blueColor text-white py-3">
                Postuler
            </button>
            <button className="w-full rounded-sm border border-black py-3 mt-3">
                Enregistrer
            </button>
        </div>
    );
};

function JobDetails() {
    return (
        <Container>
            <div className="flex flex-col lg:space-x-5 lg:flex-row my-10">
                <RelatedJobs />
                <div className="order-1 lg:order-2 lg:w-3/4 bg-white border border-gray-200 rounded-t-lg">
                    <div className="h-[80px] bg-gray-600 rounded-t-lg" />
                    <div className="flex flex-col lg:flex-row">
                        <JobInformations />
                        <RecruiterInformations />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default JobDetails;
