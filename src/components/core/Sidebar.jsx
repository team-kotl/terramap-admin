import { NavLink } from "react-router-dom";
import { useState } from "react";
import {LayoutDashboard, Users, Map, BarChart3, SquarePen, DownloadCloud, User, Sun, Moon, Menu, X
} from "lucide-react";

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex items-center gap-3 p-4 bg-gray-300 rounded-lg">
            <User size={30} className="text-gray-600" />
            <div className="flex flex-row items-center w-full">
                <p className="text-sm font-semibold text-gray-900">superadmin</p>
                <button
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer ml-auto p-1 rounded-full hover:bg-gray-100">
                {darkMode ? (
                    <Moon size={20} className="text-gray-700" />
                ) : (
                    <Sun size={20} className="text-yellow-600" />
                )}
                </button>
            </div>
        </div>
    );

    return (
        <>
        {/* Burger button on mobile (top-left) */}
        <button
            className="md:hidden absolute top-10 left-5 z-50 p-2"
            onClick={() => setIsOpen(true)}>
            <Menu size={28} className="text-gray-800" />
        </button>

        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-80 h-screen bg-gray-200 text-secondary p-4 flex-col justify-between">
            <div>
                <div className="mt-3 mb-3 flex flex-row items-center justify-center gap-2">
                    <img
                    src="src/assets/DENR-logo.svg"
                    alt="DENR Logo"
                    className="w-15 h-15"
                    />
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
        {isOpen && (
            <div className="fixed inset-0 bg-gray-200 z-50 flex flex-col justify-between p-4">
            {/* Close button */}
            <button
                className="absolute top-10 right-4"
                onClick={() => setIsOpen(false)}>
                <X size={32} />
            </button>

            {/* Top Section */}
            <div>
                <div className="mt-10 mb-3 flex flex-row items-center justify-center gap-2">
                <img
                    src="src/assets/DENR-logo.svg"
                    alt="DENR Logo"
                    className="w-15 h-15"
                />
                <h2 className="text-md font-bold mb-6 text-black mt-5 justify-center text-left">
                    Department of Environment and Natural Resources <br />
                    <span className="font-semibold">CAR</span>
                </h2>
                </div>
                <hr className="border-t border-gray-400 mb-6" />
                <NavLinks />
            </div>

            <UserSection />
            </div>
        )}
        </>
    );
};
export default Sidebar;
