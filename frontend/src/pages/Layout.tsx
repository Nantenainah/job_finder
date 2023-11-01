import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";

function Layout() {
    return (
        <>
            <Navbar isConnected={false} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
