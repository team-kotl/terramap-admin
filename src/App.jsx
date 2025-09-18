import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/core/Sidebar"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import SiteAct from "./pages/AtlasAct"
import DashboardAct from "./pages/DashboardAct"
import Survey from "./pages/Survey"
import Download from "./pages/Download"
import Login from "./pages/Login"
import SurveyForm from "./components/SurveyForm"

function App() {
    return (
        <Router>
            <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-100 overflow-y-hidden">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/site-activity" element={<SiteAct />} />
                        <Route path="/dashboard-activity" element={<DashboardAct />} />
                        <Route path="/download" element={<Download />} />
                        <Route path="/survey" element={<Survey />} />
                        <Route path="/surveyform" element={<SurveyForm />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
