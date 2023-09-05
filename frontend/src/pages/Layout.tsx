import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
    return (
        <>
            <Navbar isConnected={false} />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
