import { NavLink } from "react-router-dom"
import { LayoutDashboard, Users, Map, BarChart3 } from "lucide-react"

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-gray-200 text-secondary p-4 shadow-lg shadow-gray-700/100">
            <h2 className="text-xl font-bold mb-6">DENR</h2>
            <ul className="space-y-3">
                <li>
                    <NavLink to="/" 
                        className={({ isActive }) =>
                            `flex items-center gap-3 hover:text-primary ${
                                isActive ? "text-primary font-bold" : ""}`}>
                        <LayoutDashboard size={20} /> Overview
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" 
                        className={({ isActive }) =>
                            `flex items-center gap-3 hover:text-primary ${
                                isActive ? "text-primary font-bold" : ""}`}>
                        <Users size={20} /> Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/atlas-activity" 
                        className={({ isActive }) =>
                            `flex items-center gap-3 hover:text-primary ${
                                isActive ? "text-primary font-bold" : ""}`}>
                        <Map size={20} /> Atlas Activity
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard-activity" 
                        className={({ isActive }) =>
                            `flex items-center gap-3 hover:text-primary ${
                                isActive ? "text-primary font-bold" : ""}`}>
                        <BarChart3 size={20} /> Dashboard Activity
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
