import { ChangeEvent, FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../../styles/home.scss';
import logo  from "../../assets/logo_ispm.png";

export const HomeHeader: FunctionComponent = () => {

    const [searchTerm, setSearchTerm] = useState("");
      
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }
    return (
            <div className="header">
                <div className="fusion">
                    <div>
                        <img src={logo} alt="logo" className="header-logo" />
                        <p>JOB FINDER</p>
                    </div>
                    <div className="search">
                        <input
                            type="search"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleChange}
                            style={{paddingLeft: 20}}
                        />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>
                </div>
            </div>
    );
}