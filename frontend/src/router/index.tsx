import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Publish from "../pages/Publish/Publish";
import JobDetails from "../pages/JobDetails/JobDetails";
import Apply from "../pages/Apply/Apply";

const router = createBrowserRouter([
    {
        // Layout page is where we put all the common components of all pages (like the navbar, footer, etc).
        element: <Layout />,

        // Main routes
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/publish",
                element: <Publish />,
            },
            {
                path: "/jobs/:jobID",
                element: <JobDetails />,
            },
            {
                path: "/apply",
                element: <Apply />,
            },
        ],
    },

    // Outside routes
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
]);

export default router;
