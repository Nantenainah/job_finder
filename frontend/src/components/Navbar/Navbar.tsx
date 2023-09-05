import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import brandLogo from "../../assets/brand.png";

function DesktopNavLink(props: { children: React.ReactNode; to: string }) {
    return (
        <NavLink
            to={props.to}
            className={({ isActive }) =>
                isActive
                    ? "py-5 px-2 border-b-4 border-blue-500 text-blue-500 "
                    : "py-5 px-2 text-gray-500 hover:bg-gray-200 transition duration-200"
            }
        >
            {props.children}
        </NavLink>
    );
}

function MobileNavLink(props: { children: React.ReactNode; to: string }) {
    return (
        <NavLink
            to={props.to}
            className={({ isActive }) => (isActive ? " text-blue-500" : "")}
        >
            {props.children}
        </NavLink>
    );
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white border-b py-5 md:py-0">
            <nav>
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <NavLink to="/" className="flex items-center">
                                <img
                                    src={brandLogo}
                                    className="mr-3"
                                    alt="Job finder brand icon"
                                    width={35}
                                    height={35}
                                />
                                <span className="text-lg font-semibold">
                                    Job-finder
                                </span>
                            </NavLink>

                            {/* Desktop version */}
                            <div className="hidden md:ml-10 md:flex space-x-5">
                                <DesktopNavLink to="/">Emplois</DesktopNavLink>
                                <DesktopNavLink to="/publish">
                                    Publier
                                </DesktopNavLink>
                            </div>
                        </div>

                        <Link
                            to={"/login"}
                            className="hidden md:block px-4 py-2 border border-gray-500 text-gray-500 rounded-full transition duration-200 hover:border-gray-800 hover:text-gray-800"
                        >
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            Se connecter
                        </Link>

                        <button
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    {/* Mobile version */}
                    {isOpen && (
                        <div className="mt-4 md:hidden flex flex-col space-y-3">
                            <MobileNavLink to="/">Emplois</MobileNavLink>
                            <MobileNavLink to="/publish">Publier</MobileNavLink>
                            <MobileNavLink to="/login">
                                Se connecter
                            </MobileNavLink>
                        </div>
                    )}
                </Container>
            </nav>
        </header>
    );
}

export default Navbar;
