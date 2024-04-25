import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import AddCraft from "../Pages/AddCraft";
import AllArtAndCraft from "../Pages/AllArtAndCraft";
import Gallery from "../Pages/Gallery";
import Home from "../Pages/Home";
import MyArtAndCraft from "../Pages/MyArtAndCraft ";
import ErrorPage from "../components/ErrorPage";

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
                element:<AddCraft></AddCraft>
            },
           {
            path: '/MyArtAndCraft',
            element: <MyArtAndCraft></MyArtAndCraft>
           },
           {
            path: '/gallery',
            element: <Gallery></Gallery>
           }
        ]      
    },
]);

export default Router;