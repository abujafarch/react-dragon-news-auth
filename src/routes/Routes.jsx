import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import News from "../pages/Shared/LeftSideNav/News";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])


export default router;