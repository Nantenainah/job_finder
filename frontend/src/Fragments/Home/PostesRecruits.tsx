import { FunctionComponent } from "react";
import '../../styles/home.scss';
import recruit1 from '../../assets/recrute5.jpg';
import travail from '../../assets/travail.jpg';
import travail2 from '../../assets/recherche-travail.jpg';
import travail3 from '../../assets/travail-en-ligne.jpg';
import rechercheEmploi from '../../assets/en-tete.jpg';
import { Footer } from "../footer";
import { ScrollView } from "./ScrollView";

export const PostesRecruited: FunctionComponent = () => {
    return (
            <div className="body" style={{ fontSize: "medium", fontFamily: "cursive" }}>
                <div className="recru-lists">
                    <div style={{display: "flex", alignItems: "center", textAlign: "start", marginRight: 100 }} className="first">                                                                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        JobFinder est votre allié dans la recherche d'emploi en ligne. Nous vous connectons avec une multitude d'offres
                        d'emploi, des grandes entreprises aux startups prometteuses. Que vous soyez un jeune diplômé à la recherche de
                        votre premier emploi ou un professionnel expérimenté cherchant à progresser dans votre carrière, nous avons 
                        quelque chose pour vous. Créez votre profil, téléchargez votre CV et commencez à postuler dès aujourd'hui. 
                        Avec JobFinder, votre prochaine opportunité n'est qu'à un clic de distance.
                    </div>
                    <div className="image" style={{ border: "none" }}>
                        <img src={rechercheEmploi} alt="rechercheEmploi" className="head" />
                    </div>
                </div>
                <h3 style={{ display: "flex", alignItems: "start", marginBottom: 50 }}>
                    Les meilleurs postes de recrutement: 
                </h3>
                <div className="recru-lists">
                    <div className="image">
                        <img src={recruit1} alt="recruit1" className="img" />
                    </div>
                    <div className="description">
                        <div className="title">
                            <h1>Postes recrutés</h1>
                        </div>
                        <div className="description-text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam quaerat quidem quibusdam quod, quas quasi
                                repellendus quasi, quasi, quasi.
                            </p>
                        </div>
                    </div>
                </div>

                {/* scrollView */}
                <ScrollView />

                <div className="recru-lists">
                    <div className="image">
                        <img src={travail} alt="recruit1" className="img" />
                    </div>
                    <div className="description">
                        <div className="title">
                            <h1>Postes recrutés</h1>
                        </div>
                        <div className="description-text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam quaerat quidem quibusdam quod, quas quasi
                                repellendus quasi, quasi, quasi.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="recru-lists">
                    <div className="image">
                        <img src={travail2} alt="recruit1" className="img" />
                    </div>
                    <div className="description">
                        <div className="title">
                            <h1>Postes recrutés</h1>
                        </div>
                        <div className="description-text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam quaerat quidem quibusdam quod, quas quasi
                                repellendus quasi, quasi, quasi.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="recru-lists">
                    <div className="image">
                        <img src={travail3} alt="recruit1" className="img" />
                    </div>
                    <div className="description">
                        <div className="title">
                            <h1>Postes recrutés</h1>
                        </div>
                        <div className="description-text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam quaerat quidem quibusdam quod, quas quasi
                                repellendus quasi, quasi, quasi.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="recru-lists">
                    <div className="image">
                        <img src={recruit1} alt="recruit1" className="img" />
                    </div>
                    <div className="description">
                        <div className="title">
                            <h1>Postes recrutés</h1>
                        </div>
                        <div className="description-text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam quaerat quidem quibusdam quod, quas quasi
                                repellendus quasi, quasi, quasi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2>Déclaration sur les valeurs et la diversité, l'équité et l'inclusion de Seva</h2>
                    <p>
                    Job Finder est une plateforme en ligne dédiée à la mise en relation entre employeurs et chercheurs d'emploi. 
                    Conçu pour offrir une expérience utilisateur de premier ordre, notre site permet aux employeurs de publier des offres d'emploi,
                     de gérer leurs profils et de parcourir une base de données de candidats potentiels. De même, les chercheurs d'emploi peuvent 
                     créer des profils, télécharger des CV, chercher des emplois et postuler directement depuis leur tableau de bord. 

                    Avec des fonctionnalités avancées et une interface intuitive, Job Finder simplifie le processus de recherche d'emploi, rendant 
                    plus facile que jamais pour les employeurs de trouver des candidats qualifiés et pour les chercheurs d'emploi de découvrir 
                    des opportunités excitantes. Que vous soyez un recruteur à la recherche du candidat parfait ou un professionnel cherchant votre prochain défi, 
                    Job Finder est là pour vous aider à réaliser vos objectifs professionnels.
                    </p>
                </div>

                <Footer />

            </div>
        );
}