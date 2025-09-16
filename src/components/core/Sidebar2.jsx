import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {LayoutDashboard, Users, Map, BarChart3, SquarePen, DownloadCloud, User, Sun, Moon, Menu, X
} from "lucide-react";
import ProfileModal from "../ProfileModal";

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const NavLinks = () => (
        <ul className="space-y-8 mt-8 pl-4">
        <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                ? "flex items-center gap-5 text-primary font-bold"
                : "flex items-center gap-5 hover:text-gray-800 font-semibold"
            }
            onClick={() => setIsOpen(false)}>
            <LayoutDashboard size={20} /> Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/users"
            className={({ isActive }) =>
                isActive
                ? "flex items-center gap-5 text-primary font-bold"
                : "flex items-center gap-5 hover:text-gray-800 font-semibold"
            }
            onClick={() => setIsOpen(false)}>
            <Users size={20} /> Users
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/atlas-activity"
            className={({ isActive }) =>
                isActive
                ? "flex items-center gap-5 text-primary font-bold"
                : "flex items-center gap-5 hover:text-gray-800 font-semibold"
            }
            onClick={() => setIsOpen(false)}>
            <Map size={20} /> Atlas Activity
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/dashboard-activity"
            className={({ isActive }) =>
                isActive
                ? "flex items-center gap-5 text-primary font-bold"
                : "flex items-center gap-5 hover:text-gray-800 font-semibold"
            }
            onClick={() => setIsOpen(false)}>
            <BarChart3 size={20} /> Dashboard Activity
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/download"
            className={({ isActive }) =>
                isActive
                ? "flex items-center gap-5 text-primary font-bold"
                : "flex items-center gap-5 hover:text-gray-800 font-semibold"
            }
            onClick={() => setIsOpen(false)}>
            <DownloadCloud size={20} /> Download
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/survey"
            className={({ isActive }) =>
                isActive
                ? "flex items-center gap-5 text-primary font-bold"
                : "flex items-center gap-5 hover:text-gray-800 font-semibold"
            }
            onClick={() => setIsOpen(false)}>
            <SquarePen size={20} /> CSS
            </NavLink>
        </li>
        </ul>
    );

    const UserSection = () => (
        <div
            onClick={() => setIsProfileOpen(true)}
            className="flex items-center gap-3 p-4 bg-green-800 rounded-lg cursor-pointer hover:bg-green-900 shadow-xl">
            <User size={30} className="text-white" />
            <div className="flex flex-row items-center w-full">
                <p className="text-sm font-semibold text-white">superadmin</p>
                <button
                onClick={(e) => {
                    e.stopPropagation(); // prevents modal from opening if you only click toggle
                    setDarkMode(!darkMode);
                }}
                className="cursor-pointer ml-auto p-1 rounded-full hover:bg-gray-400/50"
                >
                {darkMode ? (
                    <Moon size={20} className="text-gray-300" />
                ) : (
                    <Sun size={20} className="text-yellow-400" />
                )}
                </button>
            </div>
        </div>
    );

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <div
            className={`md:hidden fixed top-10 left-0 w-full z-50 flex items-center gap-2 px-8 py-3 transition-colors duration-300 ${
                scrolled ? "bg-gray-200 shadow-md" : "bg-transparent"}`}>
            <button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer bg-gray-100 px-3 py-2 rounded-md shadow-sm">
                <Menu size={28} className="text-gray-800" />
            </button>
            <span className="text-2xl font-bold text-green-800">DENR-CAR</span>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-80 h-screen bg-gray-200 text-secondary p-4 flex-col justify-between">
            <div>
                <div className="mt-3 mb-3 flex flex-row items-center justify-center gap-2">
                    <img
                    src="src/assets/DENR-logo.svg"
                    alt="DENR Logo"
                    className="w-15 h-15"/>
                    <h2 className="text-md font-bold mb-6 text-black mt-5 justify-center text-left">
                    Department of Environment and Natural Resources <br />
                    <span className="font-semibold">CAR</span>
                    </h2>
                </div>
                <hr className="border-t border-gray-400 mb-6" />
                <NavLinks />
            </div>
            <UserSection />
        </aside>

        {/* Mobile Fullscreen Sidebar */}
        <div className={`fixed inset-0 z-50 flex flex-col justify-between p-4 bg-gray-200 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            {/* Close button */}
            <button
                className="absolute top-10 right-4 cursor-pointer"
                onClick={() => setIsOpen(false)}>
                <X size={32} />
            </button>
            <div>
                <div className="mt-10 mb-3 flex flex-row items-center justify-center gap-2">
                <img
                    src="src/assets/DENR-logo.svg"
                    alt="DENR Logo"
                    className="w-15 h-15"
                />
                <h2 className="text-md font-bold mb-6 text-black mt-5 text-left">
                    Department of Environment and Natural Resources <br />
                    <span className="font-semibold">CAR</span>
                </h2>
                </div>
                <hr className="border-t border-gray-400 mb-6" />
                <NavLinks />
            </div>
            <UserSection />
        </div>
            {isProfileOpen && <ProfileModal onClose={() => setIsProfileOpen(false)} />}
        </>
    );
};
export default Sidebar;
