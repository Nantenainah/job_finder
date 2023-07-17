import { FunctionComponent } from "react";
import '../../styles/home.scss';
import recruit1 from '../../assets/images (3).jpg';

export const PostesRecruited: FunctionComponent = () => {
    return (
            <div className="body">
                <h3>
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

            </div>
        );
}