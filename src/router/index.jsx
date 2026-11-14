import { createBrowserRouter, Navigate } from "react-router";

import LoginPage from "../pages/Login/LoginPage"
import RegisterPage from "../pages/Register/RegisterPage"
import HomePage from "../pages/Home/HomePage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />
    },
    {
        path: "/login",
        Component: LoginPage
    },
    {
        path: "/register",
        Component: RegisterPage
    },
    {
        path: "/home",
        Component: HomePage
    },
    {
        path: "*",
        element: <Navigate to="/login" replace />
    }
])