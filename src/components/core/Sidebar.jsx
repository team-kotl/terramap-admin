import { NavLink } from "react-router-dom"
import { useState } from "react"
import { LayoutDashboard, Users, Map, BarChart3, SquarePen, DownloadCloud, User, Sun, Moon } from "lucide-react"

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <aside className="w-80 h-screen bg-gray-200 text-secondary p-4 flex flex-col justify-between">
            
            {/* Top Section */}
            <div>
                <div className="mt-3 mb-3 flex flex-row items-center justify-center gap-2">
                    <img src="src/assets/DENR-logo.svg" alt="DENR Logo" className="w-15 h-15"/>
                    <h2 className="text-md font-bold mb-6 text-black mt-5 justify-center text-left">
                        Department of Environment and Natural Resources <br />
                        <span className="font-semibold">CAR</span>
                    </h2> 
                </div>
                <hr className="border-t border-gray-400 mb-6" />
                <ul className="space-y-8 mt-8 pl-4">
                    <li>
                        <NavLink to="/" 
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-5 text-primary font-bold"
                                    : "flex items-center gap-5 hover:text-gray-800 font-semibold"}>
                            <LayoutDashboard size={20} /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" 
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-5 text-primary font-bold"
                                    : "flex items-center gap-5 hover:text-gray-800 font-semibold"}>
                            <Users size={20} /> Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/atlas-activity" 
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-5 text-primary font-bold"
                                    : "flex items-center gap-5 hover:text-gray-800 font-semibold"}>
                            <Map size={20} /> Atlas Activity
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard-activity" 
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-5 text-primary font-bold"
                                    : "flex items-center gap-5 hover:text-gray-800 font-semibold"}>
                            <BarChart3 size={20} /> Dashboard Activity
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/download" 
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-5 text-primary font-bold"
                                    : "flex items-center gap-5 hover:text-gray-800 font-semibold"}>
                            <DownloadCloud size={20} /> Download
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/survey" 
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-5 text-primary font-bold"
                                    : "flex items-center gap-5 hover:text-gray-800 font-semibold"}>
                            <SquarePen size={20} /> CSS
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-300 rounded-lg">
                <User size={30} className="text-gray-600"/>
                <div className="flex flex-row items-center w-full">
                    <p className="text-sm font-semibold text-gray-900">superadmin</p>
                        <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer ml-auto p-1 rounded-full hover:bg-gray-100">
                    {darkMode ? (
                        <Moon size={20} className="text-gray-700" />
                    ) : (
                        <Sun size={20} className="text-yellow-600" />
                    )}
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
