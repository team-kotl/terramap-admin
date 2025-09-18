import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {LayoutDashboard,Users,Map,BarChart3,SquarePen,DownloadCloud,User,Sun,Moon,Menu,X,
} from "lucide-react";
import ProfileModal from "../ProfileModal";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    
    const getInitialDark = () => {
        try {
            const stored = localStorage.getItem("theme");
            if (stored) return stored === "dark";
            // fallback to system preference
            return (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            );
        } catch {
            return false;
        }
    };

    const [darkMode, setDarkMode] = useState(getInitialDark);

    useEffect(() => {
        try {
            if (darkMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        } catch (e) {
            // ignore
        }
    }, [darkMode]);

    const toggleDark = (e) => {
        e?.stopPropagation();
        setDarkMode((v) => !v);
    };

    const NavLinks = () => (
        <ul className="space-y-8 mt-8 pl-4">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 font-bold"
                            : "flex items-center gap-5 group font-semibold"
                    }
                    onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                        <>
                            <LayoutDashboard
                                size={20}
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-icon)]"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)]"
                                }/>
                            <span
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-text)] font-bold"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)] group-hover:font-semibold"
                                }>
                                Dashboard
                            </span>
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 font-bold"
                            : "flex items-center gap-5 group font-semibold"
                    }
                    onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                        <>
                            <Users
                                size={20}
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-icon)]"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)]"
                                }/>
                            <span
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-text)] font-bold"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)] group-hover:font-semibold"
                                }>
                                Users
                            </span>
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/atlas-activity"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 font-bold"
                            : "flex items-center gap-5 group font-semibold"
                    }
                    onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                        <>
                            <Map
                                size={20}
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-icon)]"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)]"
                                }/>
                            <span
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-text)] font-bold"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)] group-hover:font-semibold"
                                }>
                                Atlas Activity
                            </span>
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard-activity"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 font-bold"
                            : "flex items-center gap-5 group font-semibold"
                    }
                    onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                        <>
                            <BarChart3
                                size={20}
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-icon)]"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)]"
                                }
                            />
                            <span
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-text)] font-bold"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)] group-hover:font-semibold"
                                }>
                                Dashboard Activity
                            </span>
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/download"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 font-bold"
                            : "flex items-center gap-5 group font-semibold"
                    }
                    onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                        <>
                            <DownloadCloud
                                size={20}
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-icon)]"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)]"
                                }/>
                            <span
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-text)] font-bold"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)] group-hover:font-semibold"}>
                                Downloads
                            </span>
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/survey"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-5 font-bold"
                            : "flex items-center gap-5 group font-semibold"
                    }
                    onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                        <>
                            <SquarePen
                                size={20}
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-icon)]"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)]"
                                }/>
                            <span
                                className={
                                    isActive
                                        ? "text-[var(--sidebar-active-text)] font-bold"
                                        : "text-[var(--color-secondary)] group-hover:text-[var(--sidebar-hover-text)] group-hover:font-semibold"}>
                                CSS
                            </span>
                        </>
                    )}
                </NavLink>
            </li>
        </ul>
    );

    const UserSection = () => (
        <div
            onClick={() => setIsProfileOpen(true)}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer shadow"
            style={{ backgroundColor: "var(--sidebar-user-bg)", color: "var(--sidebar-user-text)" }}>
            <User size={24} className="text-[var(--sidebar-user-text)]" />
            <div className="flex flex-row items-center w-full">
                <p className="text-sm font-semibold">superadmin</p>
                <button
                    onClick={toggleDark}
                    className={`ml-auto bg-transparent p-2 rounded-full cursor-pointer transition-colors
                        ${darkMode ? "hover:bg-gray-800/70" : "hover:bg-gray-200/50"}`}
                    aria-label="Toggle theme">
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
            <aside
                className="hidden md:flex w-80 h-screen p-4 flex-col justify-between 
                        bg-[var(--sidebar-bg)]">
                <div>
                    <div className="mt-3 mb-3 flex flex-row items-center justify-center gap-2">
                        <img src="src/assets/DENR-logo.svg" alt="DENR Logo" className="w-15 h-15" />
                        <h2
                            className="text-md font-bold mb-6 mt-5 text-left"
                            style={{ color: "var(--color-text)" }}>
                            Department of Environment and Natural Resources <br />
                            <span className="font-semibold">CAR</span>
                        </h2>
                    </div>
                    <hr className="mb-6" style={{ borderColor: "var(--sidebar-border)" }} />
                    <NavLinks />
                </div>
                <UserSection />
            </aside>
            {/* Mobile Floating Menu */}
            <div className="md:hidden">
                {/* Burger Button (sticky bottom-right) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg"
                    style={{
                        backgroundColor: "var(--sidebar-mobile-btn-bg)",
                        color: "var(--sidebar-mobile-btn-text)",
                        }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                {/* Floating Card */}
                {isOpen && (
                    <div
                        className="fixed bottom-20 right-5 w-56 rounded-lg shadow-lg z-40 p-2 space-y-3"
                        style={{
                            backgroundColor: "var(--sidebar-bg)",
                            border: `1px solid var(--sidebar-mobile-card-border)`,
                        }}>
                        <NavLinks />
                        <hr style={{ borderColor: "var(--sidebar-mobile-card-border)" }} />
                        <UserSection />
                    </div>
                )}
            </div>
            {/* Profile Modal */}
            {isProfileOpen && <ProfileModal onClose={() => setIsProfileOpen(false)} />}
        </>
    );
};

export default Sidebar;
