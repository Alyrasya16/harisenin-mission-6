import { createBrowserRouter, Navigate } from "react-router";

import LoginPage from "../pages/Login/LoginPage"
import RegisterPage from "../pages/Register/RegisterPage"
import HomePage from "../pages/Home/HomePage"
import ChangePasswordPage from "../pages/Change-Password/ChangePasswordPage";
import FilmPage from "../pages/Film/FilmPage";
import MyListPage from "../pages/My-List/MyListPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SeriesPage from "../pages/Series/SeriesPage";

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
        path: "/profile",
        Component: ProfilePage
    },
    {
        path: "/series",
        Component: SeriesPage
    },
    {
        path: "/film",
        Component: FilmPage
    },
    {
        path: "/my-list",
        Component: MyListPage
    },
    {
        path: "/change-password",
        Component: ChangePasswordPage
    },
    {
        path: "*",
        element: <Navigate to="/login" replace />
    }
])