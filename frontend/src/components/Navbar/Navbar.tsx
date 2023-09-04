import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useState } from "react";

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
        <header className="bg-gray-100 py-5 md:py-0">
            <nav>
                <Container>
                    <div className="flex justify-between items-center md:justify-start">
                        <NavLink to="/" className="font-semibold h3">
                            Job-finder
                        </NavLink>

                        {/* Desktop version */}
                        <div className="hidden md:ml-10 md:flex space-x-5">
                            <DesktopNavLink to="/">Emplois</DesktopNavLink>
                            <DesktopNavLink to="/publish">
                                Publier
                            </DesktopNavLink>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile version */}
                    {isOpen && (
                        <div className="mt-4 md:hidden flex flex-col space-y-3">
                            <MobileNavLink to="/">Emplois</MobileNavLink>
                            <MobileNavLink to="/publish">Publier</MobileNavLink>
                        </div>
                    )}
                </Container>
            </nav>
        </header>
    );
}

export default Navbar;
