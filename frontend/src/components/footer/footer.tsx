import React from "react";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarker,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-8 mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="col-span-3 md:col-span-1 flex justify-center md:justify-start">
                    <div className="w-full md:w-2/3">
                        <h4 className="text-2xl font-bold mb-4">
                            Contactez-nous
                        </h4>
                        <div className="flex items-center flex-col">
                            <div className="flex items-center space-x-2 mb-4">
                                <FaMapMarker />
                                <p>Adresse : Lot AZ EDT 246 Antananarivo</p>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <FaPhone />
                                <p>Téléphone : +261 34 80 242 33</p>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <FaEnvelope />
                                <p>Email : contact@jobfinder.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 md:col-span-1">
                    <h4 className="text-2xl font-bold mb-4">Suivez-nous</h4>
                    <ul className="flex space-x-4 justify-center">
                        <li>
                            <a href="/facebook">
                                <FaFacebook size="30" />
                            </a>
                        </li>
                        <li>
                            <a href="/twitter">
                                <FaTwitter size="30" />
                            </a>
                        </li>
                        <li>
                            <a href="/linkedin">
                                <FaLinkedin size="30" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-3 md:col-span-1">
                    <h4 className="text-2xl font-bold mb-4">Liens utiles</h4>
                    <ul className="flex flex-col space-x-4 items-center">
                        <li>
                            <a href="/">Accueil</a>
                        </li>
                        <li>
                            <a href="/emplois">Offres d'emploi</a>
                        </li>
                        <li>
                            <a href="/apropos">À propos de nous</a>
                        </li>
                        <li>
                            <a href="/contact">Nous contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-6">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Job-finder Team. Tous
                    droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
