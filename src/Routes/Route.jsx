import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import AddCraft from "../Pages/AddCraft";
import AllArtAndCraft from "../Pages/AllArtAndCraft";
import Gallery from "../Pages/Gallery";
import Home from "../Pages/Home";
import MyArtAndCraft from "../Pages/MyArtAndCraft ";
import User from "../Pages/User";
import PrivetRoute from "../Provider/PrivetRoute";
import ArtCraftCategories from "../components/ArtCraftCategories";
import CraftDetails from "../components/CraftDetails";
import ErrorPage from "../components/ErrorPage";
import SingleCategory from "../components/SingleCategory";
import UpdateArtCraft from "../components/UpdateArtCraft";
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
                element: <Home></Home>,
            },

            {
                path: '/artCraftCategories',
                element: <ArtCraftCategories></ArtCraftCategories>,
                loader: () => fetch('https://assignment-10-server-psi-six.vercel.app/artCraftCategories')
            },
            {
                path: '/artCraftCategories/:subcategory',
                element: <SingleCategory></SingleCategory>,
                loader: ({params}) => fetch(`https://assignment-10-server-psi-six.vercel.app/artCraftCategories/${params.subcategory}`)
            },
            {
                path: '/allArtAndCraft',
                element: <AllArtAndCraft></AllArtAndCraft>,
                loader: () => fetch('https://assignment-10-server-psi-six.vercel.app/artCraft')
            },
            {
                path: '/artCraft/:id',
                element: <PrivetRoute><CraftDetails></CraftDetails></PrivetRoute>,

                loader: ({ params }) =>
                    fetch(`https://assignment-10-server-psi-six.vercel.app/artCraft/${params.id}`)

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
                path: '/artCraftUpdate/:id',
                element: <PrivetRoute><UpdateArtCraft></UpdateArtCraft></PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-psi-six.vercel.app/artCraftUpdate/${params.id}`)
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
            },
        ]
    },
]);

export default Router;