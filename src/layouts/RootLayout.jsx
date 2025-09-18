import SideBar from "../components/core/Sidebar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RootLayout = () => {
    const location = useLocation();
    const nav = useNavigate();
    useEffect(() => {
        if (location.pathname == "/") {
            nav("/dashboard");
        }
    }, []);
    return (
        <>
            <div className="flex w-screen h-screen overflow-y-hidden">
                <SideBar />
                <Outlet />
            </div>
        </>
    );
};

export default RootLayout;
