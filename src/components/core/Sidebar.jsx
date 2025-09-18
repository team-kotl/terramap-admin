import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
    LayoutDashboard,
    Users,
    Map,
    BarChart3,
    SquarePen,
    DownloadCloud,
    User,
    Sun,
    Moon,
    Menu,
    X,
} from "lucide-react";
import ProfileModal from "../ProfileModal";

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const NavLinks = () => (
        <ul className="space-y-8 mt-8 pl-4">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 text-green-800 font-bold"
                            : "flex items-center gap-5 hover:text-gray-800"
                    }
                    onClick={() => setIsOpen(false)}
                >
                    {({ isActive }) => (
                        <>
                            <LayoutDashboard
                                size={20}
                                className={
                                    isActive
                                        ? "text-green-800"
                                        : "text-gray-600"
                                }
                            />
                            Dashboard
                        </>
                    )}
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 text-green-800 font-bold"
                            : "flex items-center gap-5 hover:text-gray-800"
                    }
                    onClick={() => setIsOpen(false)}
                >
                    {({ isActive }) => (
                        <>
                            <Users
                                size={20}
                                className={
                                    isActive
                                        ? "text-green-800"
                                        : "text-gray-600"
                                }
                            />
                            Users
                        </>
                    )}
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/atlas-activity"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 text-green-800 font-bold"
                            : "flex items-center gap-5 hover:text-gray-800"
                    }
                    onClick={() => setIsOpen(false)}
                >
                    {({ isActive }) => (
                        <>
                            <Map
                                size={20}
                                className={
                                    isActive
                                        ? "text-green-800"
                                        : "text-gray-600"
                                }
                            />
                            Atlas Activity
                        </>
                    )}
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/dashboard-activity"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 text-green-800 font-bold"
                            : "flex items-center gap-5 hover:text-gray-800"
                    }
                    onClick={() => setIsOpen(false)}
                >
                    {({ isActive }) => (
                        <>
                            <BarChart3
                                size={20}
                                className={
                                    isActive
                                        ? "text-green-800"
                                        : "text-gray-600"
                                }
                            />
                            Dashboard Activity
                        </>
                    )}
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/download"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 text-green-800 font-bold"
                            : "flex items-center gap-5 hover:text-gray-800"
                    }
                    onClick={() => setIsOpen(false)}
                >
                    {({ isActive }) => (
                        <>
                            <DownloadCloud
                                size={20}
                                className={
                                    isActive
                                        ? "text-green-800"
                                        : "text-gray-600"
                                }
                            />
                            Download
                        </>
                    )}
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/survey"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 text-green-800 font-bold"
                            : "flex items-center gap-5 hover:text-gray-800"
                    }
                    onClick={() => setIsOpen(false)}
                >
                    {({ isActive }) => (
                        <>
                            <SquarePen
                                size={20}
                                className={
                                    isActive
                                        ? "text-green-800"
                                        : "text-gray-600"
                                }
                            />
                            CSS
                        </>
                    )}
                </NavLink>
            </li>
        </ul>
    );

    const UserSection = () => (
        <div
            onClick={() => setIsProfileOpen(true)}
            className="flex items-center gap-3 p-3 bg-green-800 rounded-lg cursor-pointer hover:bg-green-900 shadow"
        >
            <User size={24} className="text-white" />
            <div className="flex flex-row items-center w-full">
                <p className="text-sm font-semibold text-white">superadmin</p>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setDarkMode(!darkMode);
                    }}
                    className="ml-auto p-1 rounded-full hover:bg-gray-400/50"
                >
                    {darkMode ? (
                        <Moon size={18} className="text-gray-300" />
                    ) : (
                        <Sun size={18} className="text-yellow-400" />
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-80 h-screen bg-gray-200 text-secondary p-4 flex-col justify-between">
                <div>
                    <div className="mt-3 mb-3 flex flex-row items-center justify-left gap-2">
                        <img
                            src="src/assets/DENR-logo.svg"
                            alt="DENR Logo"
                            className="w-15 h-15"
                        />
                        <h2 className="text-md font-bold mb-6 text-black mt-5 justify-center text-left">
                            Department of Environment and Natural Resources{" "}
                            <br />
                            <span className="font-semibold">CAR</span>
                        </h2>
                    </div>
                    <hr className="border-t border-gray-400 mb-6" />
                    <NavLinks />
                </div>
                <UserSection />
            </aside>

            {/* Mobile Floating Menu */}
            <div className="md:hidden">
                {/* Burger Button (sticky bottom-right) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-green-700 text-white shadow-lg"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Floating Card */}
                {isOpen && (
                    <div className="fixed bottom-20 right-5 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-40 p-2 space-y-3">
                        <NavLinks />
                        <hr className="border-t border-gray-300" />
                        <UserSection />
                    </div>
                )}
            </div>

            {/* Profile Modal */}
            {isProfileOpen && (
                <ProfileModal onClose={() => setIsProfileOpen(false)} />
            )}
        </>
    );
};

export default Sidebar;
