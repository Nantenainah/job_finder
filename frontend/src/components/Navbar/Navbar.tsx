import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MENU_DATA } from "../../constants/Menu";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiTwotoneBell } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

type NavbarProps = {
    isConnected: boolean;
};

const Navbar: React.FC<NavbarProps> = () => {
    const [isMenuClicked, setMenuClicked] = useState(false);
    const modifiedMenuData = [...MENU_DATA];
    const { isAuthenticated, logout, role } = useAuth();
    const navigate = useNavigate();

    // Si l'utilisateur est connecté, add "Mon profil"
    isAuthenticated &&
        modifiedMenuData.push({ path: "/profile", title: "Mon profil" });

    if (isAuthenticated && role === "recruiter") {
        modifiedMenuData.push({ path: "/publish", title: "Publier" });
    }

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <header
            className="bg-lightColor flex justify-between gap-14 items-center 
                border-b-[1px] py-[1rem] px-[2rem] md:px-[5rem]"
        >
            <NavLink
                to={"/"}
                className="logo flex gap-2 items-center cursor-pointer"
            >
                <img
                    src="./logo.png"
                    alt="logo JobFinder"
                    height={10}
                    width={25}
                />
                <h1 className="text-blueColor text-[15px] font-bold">
                    JobFinder
                </h1>
            </NavLink>

            <nav
                className={`flex flex-col items-center gap-6 text-[14px] bg-lightColor rounded-bl-lg overflow-hidden 
                py-4 shadow-sm shadow-gray-100 absolute top-20 right-0 transition-all duration-300
                ${
                    isMenuClicked ? "w-[50%]" : "w-0"
                } md:w-fit md:static md:flex-row md:shadow-none`}
            >
                {modifiedMenuData.map(({ path, title }) => (
                    <NavLink
                        key={path + "-" + title}
                        to={path}
                        className={({ isActive }) =>
                            `menuList ${
                                isActive
                                    ? "text-blueColor"
                                    : "text-gray-600 hover:text-blueColor before:bg-blueColor"
                            }
                            ${title == "Mon profil" ? "md:hidden" : ""}`
                        }
                    >
                        {title}
                    </NavLink>
                ))}

                <NavLink
                    to={"/login"}
                    className={`${
                        isAuthenticated ? "hidden" : ""
                    } border-[1px] flex p-2 px-3 rounded-sm bg-blueColor 
                    text-lightColor cursor-pointer transition duration-300 md:hidden`}
                >
                    se connecter
                </NavLink>
            </nav>

            {/* -------------------------Si l'utilisateur est c-------------------------*/}
            {isAuthenticated ? (
                <div
                    className="profil text-darkColor text-[15px] items-center gap-4 ml-auto 
                            hidden group:cursor-pointer md:flex"
                >
                    <img
                        src="./avatar.jpg"
                        alt="photo de .."
                        className="rounded-[100%] h-[30px] w-[35px] cursor-pointer"
                    />

                    <div className="border-2 border-gray-300 p-2 rounded-[100%] cursor-pointer">
                        <AiTwotoneBell size={18} />
                    </div>

                    <button
                        className="border-2 border-gray-300 p-2 rounded-[100%] cursor-pointer"
                        onClick={handleLogout}
                    >
                        <FiLogOut size={18} />
                    </button>
                </div>
            ) : (
                <div className="hidden text-textColor text-[15px] items-center gap-4 ml-auto md:flex">
                    <Link
                        className="border-[1px] border-gray-400 p-2 px-3 rounded-sm  hover:bg-blueColor 
                        hover:text-lightColor transition duration-300 animate-fadeIn"
                        to={"/sign-up"}
                    >
                        Inscription
                    </Link>
                    <Link
                        className="border-[1px] border-gray-400  p-2 px-3 rounded-sm hover:bg-blueColor 
                        hover:text-lightColor transition duration-300 animate-fadeIn"
                        to={"/login"}
                    >
                        se connecter
                    </Link>
                </div>
            )}

            <BiMenuAltLeft
                size={35}
                color="black"
                className="cursor-pointer md:hidden"
                onClick={() => setMenuClicked(!isMenuClicked)}
            />
        </header>
    );
};

export default Navbar;
