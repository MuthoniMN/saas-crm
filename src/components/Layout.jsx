import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Sidebar />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout;