import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import ErrorPage from "../components/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {

            }
        ]      
    },
]);

export default Router;