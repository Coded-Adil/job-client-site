import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute><JobApply /></PrivateRoute>,
            },
            {
                path: "/myApplications",
                element: <PrivateRoute><MyApplications /></PrivateRoute>,
            },
            {
                path: "/addJob",
                element: <PrivateRoute><AddJob /></PrivateRoute>,
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
        ],
    },
]);

export default router;