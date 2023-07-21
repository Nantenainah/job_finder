import { FunctionComponent, useRef } from "react";
import { Link } from "react-router-dom";
import '../../styles/scrollView.scss';

import recrute2 from '../../assets/recruet2.jpg'
import recrute3 from '../../assets/travail-en-ligne.jpg'
import recrute4 from '../../assets/recrute4.jpg'
import recrute5 from '../../assets/recrute3.jpg'

export const ScrollView: FunctionComponent = () => {

    return (
            <div className="scroll">
                <Link to="/postes-1">
                    <div className="scrolling">
                        <div>
                            <img src={recrute2} className="img" />
                        </div>
                        <h6>ScrollView</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam corrupti dolore. 
                        </p>
                    </div>
                </Link>
                <Link to="/postes-2">
                    <div className="scrolling">
                        <div>
                            <img src={recrute3} className="img" />
                        </div>
                        <h6>ScrollView</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam corrupti dolore. 
                        </p>
                    </div>
                </Link>
                <Link to="/postes-3">
                    <div className="scrolling child">
                        <div>
                            <img src={recrute4} className="img" />
                        </div>
                        <h6>ScrollView</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam corrupti dolore. 
                        </p>
                    </div>
                </Link>
                <Link to="/postes-4">
                    <div className="scrolling child">
                        <div>
                            <img src={recrute5} className="img" />
                        </div>
                        <h6>ScrollView</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam corrupti dolore. 
                        </p>
                    </div>
                </Link>
            </div>
        );
}