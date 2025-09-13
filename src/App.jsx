import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/core/Sidebar"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import AtlasAct from "./pages/AtlasAct"
import DashboardAct from "./pages/DashboardAct"

function App() {
    return (
        <Router>
            <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-100 overflow-y-hidden">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/atlas-activity" element={<AtlasAct />} />
                        <Route path="/dashboard-activity" element={<DashboardAct />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
