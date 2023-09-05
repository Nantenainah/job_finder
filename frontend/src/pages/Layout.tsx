import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Login from "./Login/Login";

function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <Login/> */}
        </>
    );
}

export default Layout;
