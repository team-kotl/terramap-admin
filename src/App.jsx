import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/core/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import SiteAct from "./pages/AtlasAct";
import DashboardAct from "./pages/DashboardAct";
import Survey from "./pages/Survey";
import Download from "./pages/Download";
import Login from "./pages/Login";
import SurveyForm from "./components/SurveyForm";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<RootLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/site-activity" element={<SiteAct />} />
                    <Route
                        path="/dashboard-activity"
                        element={<DashboardAct />}
                    />
                    <Route path="/download" element={<Download />} />
                    <Route path="/survey" element={<Survey />} />
                </Route>
                <Route path="/form" element={<SurveyForm />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
