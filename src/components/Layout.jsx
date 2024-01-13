import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;