import Home from './pages/home/Home';
import {  createBrowserRouter } from 'react-router-dom';


 export const ROUTES = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/profile",
      element: "",
    },
    {
      path: "/login",
      element: "",
    },
    {
      path: "/signup",
      element: "",
    },
    {
      path: "/profiles",
      element: "",
    },
  ]);
