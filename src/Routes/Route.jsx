import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import AddCraft from "../Pages/AddCraft";
import AllArtAndCraft from "../Pages/AllArtAndCraft";
import Gallery from "../Pages/Gallery";
import Home from "../Pages/Home";
import MyArtAndCraft from "../Pages/MyArtAndCraft ";
import User from "../Pages/User";
import PrivetRoute from "../Provider/PrivetRoute";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/User/Login";
import Register from "../components/User/Register";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allArtAndCraft',
                element: <AllArtAndCraft></AllArtAndCraft>
            },
            {
                path: '/AddCraft',
                element: <PrivetRoute><AddCraft></AddCraft></PrivetRoute>
            },
            {
                path: '/MyArtAndCraft',
                element: <PrivetRoute><MyArtAndCraft></MyArtAndCraft></PrivetRoute>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/user',
                element: <PrivetRoute><User></User></PrivetRoute>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default Router;