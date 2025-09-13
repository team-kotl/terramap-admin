import { NavLink } from "react-router-dom"
import { LayoutDashboard, Users, Map, BarChart3 } from "lucide-react"

const Sidebar = () => {
    return (
        <aside className=" w-64 h-screen bg-gray-200 text-secondary p-4 shadow-lg shadow-gray-700/100">
            <div className=" mt-5 mb-8 flex flex-row items-center justify-center gap-2">
                <img src="src\assets\DENR-logo.svg" alt="DENR Logo" className="w-18 h-18"/>
                <h2 className="text-xl font-bold mb-6 text-black mt-5">DENR - CAR</h2>
            </div>
            <hr className="border-t border-gray-400 mb-6" />
            <ul className="space-y-8 mt-8">
                <li>
                    <NavLink to="/" 
                        className={({ isActive }) =>
                            `flex items-center gap-5 hover:text-primary ${
                                isActive ? "text-primary font-bold" : ""}`}>
                        <LayoutDashboard size={20} /> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" 
                        className={({ isActive }) =>
                            `flex items-center gap-5 hover:text-primary ${
                                isActive ? "text-primary font-bold" : ""}`}>
                        <Users size={20}  /> Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/atlas-activity" 
                        className={({ isActive }) =>
                            `flex items-center gap-5 hover:text-primary ${
                                isActive ? "text-primary font-bold" : ""}`}>
                        <Map size={20} /> Atlas Activity
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard-activity" 
                        className={({ isActive }) =>
                            `flex items-center gap-5 hover:text-primary ${
                                isActive ? "text-primary font-bold" : ""}`}>
                        <BarChart3 size={20} /> Dashboard Activity
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
