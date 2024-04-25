import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {

            }
        ]      
    },
]);

export default Router;